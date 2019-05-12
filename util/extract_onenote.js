'use strict'

const tokens = require(process.env.ONENOTE).tokens
const axios = require('axios')
const fs = require('fs')
const cheerio = require('cheerio')
const { setValidToken } = require('./refresh_token')
const { getMaxCnts, originalRoutings, originalPostings } = require('./blog_getter')
const notebooks = new Map([
  ['Web Dev', '0-BC575AB8E2AB9833!1937'],
  ['App Dev', '0-BC575AB8E2AB9833!2179'],
  ['Security Dev', '0-BC575AB8E2AB9833!2191'],
  ['React-web', '0-BC575AB8E2AB9833!2142'],
  ['React-Native', '0-BC575AB8E2AB9833!2149'],
  ['AWS', '0-BC575AB8E2AB9833!2000'],
  ['Database', '0-BC575AB8E2AB9833!2160'],
  ['MacBook', '0-BC575AB8E2AB9833!1940'],
  ['AI', '0-BC575AB8E2AB9833!2197'],
])
const startTime = new Date()
const routings = originalRoutings.content
const postContent = {}
const GET_NOTEBOOK_SECTION_LIST_URL = notebookId => `https://www.onenote.com/api/v1.0/me/notes/notebooks/${notebookId}/sections`
const GET_NOTEBOOK_SECTION_PAGE_LIST_URL = sectionId => `https://www.onenote.com/api/v1.0/me/notes/sections/${sectionId}/pages`
const GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL = pageId => `https://www.onenote.com/api/v1.0/me/notes/pages/${pageId}/content?preAuthenticated=true`

// #region utility function
/**
 * @name appendPost
 * @param {String} type for postContent (notebook | section | page)
 * @param {String} routeKey for routings (notebookId | sectionId | pageId)
 * @param {String} endpoint for postContent and routings
 * @param {String} note for postContent and routings { notebook, section, page }
 * @param {Object} maxCnts max routing number at each notebooks and sections for checking duplicate routing
 * @description 페이지 종합정보(postContent)와 라우팅정보(routings)를 일관성있게 관리하기 위함
 * */
const appendPost = ({ type, routeKey, endpoint, note, maxCnts }) => {
  // 이미 존재하던 게시물들이 사라지는 건 상관없다.
  // 이미 존재하는 url에 있는 내용이 전혀 다른 내용으로 바꿔치기가 되는 상황이 나오지 않게 신경쓰자
  let validEndpoint = endpoint
  let findExists = false
  let updatedMaxCnts = maxCnts
  let maxCntKey = endpoint
    .split('/')
    .filter((val, idx) => idx < 2)
    .join('/')

  if (routings[routeKey]) {
    findExists = true
  }

  if (findExists) {
    validEndpoint =
      routings[routeKey].substring(0, 1) === '/' ? routings[routeKey].substring(1) : routings[routeKey]
  } else if (!findExists) {
    if (type === 'section') {
      if (maxCnts[endpoint]) {
        // 새로 추가될 OneNote Section의 endpoint가 이미 존재하는 endpoint라면, 새로운 endpoint로 변경.
        let notebookName = endpoint.split('/')[0]
        let newSectionCnt = updatedMaxCnts[notebookName] + 1
        validEndpoint = `${notebookName}/${newSectionCnt}`
        updatedMaxCnts[notebookName] = newSectionCnt
      } else {
        validEndpoint = endpoint
      }
    } else if (type === 'page') {
      updatedMaxCnts[maxCntKey] = !maxCnts[maxCntKey] ? 1 : maxCnts[maxCntKey] + 1
      validEndpoint = maxCntKey+'/'+updatedMaxCnts[maxCntKey]
    }
  }

  /* push routings */
  Object.assign(routings, {
    [routeKey]: validEndpoint,
  })

  /* push posting contents */
  Object.assign(postContent, {
    [validEndpoint]: assemblePostInfo({
      type: type,
      endpoint: validEndpoint+'/',
      notebook: note.notebook,
      section: note.section,
      page: note.page,
    })
  })

  return {
    endpoint: validEndpoint,
    maxCnts: updatedMaxCnts,
  }
}

/**
 * @name assemblePostInfo
 * @param {String} props.type 'notebook' | 'section' | 'page'
 * @param {String} props.endpoint blog posting url
 * @param {String} props.notebook notebook
 * @param {Object} props.section section info
 * @param {any} props.page
 *  type is notebook: null
 *  type is section: [{id, createdTime, title, lastModifiedTime, ..., content, html}]
 *  type is page: {id, createdTime, title, lastModifiedTime, ..., content, html}
 * @description OneNote게시물 정규화시키기
 */
const assemblePostInfo = props => {
  return {
    type: props.type,
    endpoint: props.endpoint,
    notebook: props.notebook,
    section: props.section,
    page: props.page,
  }
}

/**
 * @name savePost
 * @param {String} path
 * @param {*} context
 * @description 포스팅 관련 정보를 파일로 저장해 놓기.
 * 해당 파일이 나중에 gatsby-node.js에서 페이지 생성에 쓰일 것임
 */
const savePost = (path, context) => {
  fs.writeFileSync(path, context)
}

/**
 * @name shouldRecurse
 * @param {Object} e error object
 * @description this will answer if questioner should recurse calling OneNote API or not
 */
const shouldRecurse = e => {
  /**
   * @variable e
   * @description Axios Response Scheme
   * @error { config | message | request | response | stack }
   * @error_response { status | statusText | headers | config | request | data }
   * @example error.response
      status 401,
      statusText 'Unauthorized',
      data { error: { code: '40001',
        message: 'The request does not contain a valid authentication token.',
        '(@)api.url': 'https://aka.ms/onenote-errors#C40001' } } } }
  */
  if (
    e.response.data &&
    e.response.data.error &&
    Number(e.response.data.error.code) > 20000 &&
    Number(e.response.data.error.code) < 30000
  ) {
    return 'wrong'
  } else if (e.response.status.toString() === '401') {
    return 'auth'
  }
  return false
}
// #endregion utility function

// #region executor
/**
 * @name recurrReqSectionData
 * @param {Array} notebookList
 * @param {JSON} maxCnts max counts at each notebook/section/pages
 * @param {JSON} tokens OneNote tokens
 * @function pageReqExec generate page content
 * @function sectionReqExec generate section content
 * @function notebookReqExec generate notebook content
 * @description Recursive Axios Request Maker
 */
const recurrReqSectionData = (notebookList, maxCnts, tokens) => {
  return new Promise((resolve, reject) => {
    /**
     * @name pageReqExec
     * @param {String} notebookName
     * @param {Object} section {id, name}
     * @param {Array} pageObj page list for specific section
     * @param {Object} maxCnts max routing number at each notebooks and sections for checking duplicate routing
     * @param {JSON} tokens OneNote tokens
     * @description generate page content
     */
    const pageReqExec = (notebookName, section, pageObj, maxCnts, tokens) => {
      return new Promise((resolve, reject) => {
        const singleReq = (notebookName, section, page, maxCnts, tokens, pageIdx) => {
          /* exit when fully scanned */
          if (pageIdx === pageObj.length) {
            return resolve(maxCnts)
          }
          return axios
            .get(GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL(page.id), {
              headers: {
                Authorization: `Bearer ${tokens.access_token}`,
              },
            })
            .then(result => {
              pageIdx++
              /* OneNote 페이지의 전체 DOM */
              const $ = cheerio.load(result.data)
              /* OneNote 페이지의 이름 추출 */
              const pageHtml = $('body').html()
              const pageContent = $('body')
                .text()
                .replace(/\n|\t|\r/g, ' ')
              /* exit when fully scanned */
              if (!section.sectionUrl) {
                return resolve(maxCnts)
              }
              const updatedContents = appendPost({
                type: 'page',
                routeKey: page.id,
                endpoint: `${notebookName.toLowerCase()}/${section.sectionUrl}/${pageIdx}`,
                note: {
                  notebook: notebookName,
                  section: section.name,
                  page: { ...page, content: pageContent, html: pageHtml },
                },
                maxCnts: maxCnts,
              })

              /* process log */
              console.log(
                'NOTEBOOK[%s] SECTION[%s] PAGE[%s](%s) process: %d/%d',
                notebookName,
                section.sectionUrl,
                pageIdx,
                page.id,
                pageIdx,
                pageObj.length
              )

              /* Get Section's Page Info */
              singleReq(notebookName, section, pageObj[pageIdx], updatedContents.maxCnts, tokens, pageIdx)
            })
            .catch(e => {
              console.log('[pageReqExec-singleReq catch]', e.stack)
              pageIdx++
              const divineAnswer = shouldRecurse(e)
              console.log('### divineAnswer:', divineAnswer)
              if (divineAnswer === 'auth') {
                setValidToken().then(refreshedTokens => {
                  tokens = refreshedTokens
                  singleReq(notebookName, section, pageObj[pageIdx], maxCnts, tokens, pageIdx)
                })
              } else if (divineAnswer === 'wrong') {
                singleReq(notebookName, section, pageObj[pageIdx], maxCnts, tokens, pageIdx)
              } else {
                return reject(e)
              }
            }) // end axios()
        } // end singelReq()
        if (pageObj.length === 0) {
          return resolve(maxCnts)
        } else {
          /* Beginning of Single Page Info */
          singleReq(notebookName, section, pageObj[0], maxCnts, tokens, 0)
        }
      })
    } // end pageReqExec(notebookName, section, pageObj)

    /**
     * @name sectionReqExec
     * @param {String} notebookName
     * @param {Array} sectionObj section list for specific notebook
     * @param {Object} maxCnts max routing number at each notebooks and sections for checking duplicate routing
     * @param {JSON} tokens OneNote tokens
     * @description generate section content
     */
    const sectionReqExec = (notebookName, sectionObj, maxCnts, tokens) => {
      return new Promise((resolve, reject) => {
        const singleReq = (notebookName, section, maxCnts, tokens, sectionIdx) => {
          /* exit when fully scanned */
          if (sectionIdx === sectionObj.length) {
            return resolve(maxCnts)
          }
          /* axios connection */
          return axios
            .get(GET_NOTEBOOK_SECTION_PAGE_LIST_URL(section.id), {
              headers: {
                Authorization: `Bearer ${tokens.access_token}`,
              },
            })
            .then(result => {
              /* Page List: result.data.value = Array[10] */
              sectionIdx++
              console.log(
                '------------------------------\nNOTEBOOK[%s] SECTION[%s](%s) try ----------(%d/%d)',
                notebookName,
                sectionIdx,
                section.id,
                sectionIdx,
                sectionObj.length
              )
              const updatedContents = appendPost({
                type: 'section',
                routeKey: section.id,
                endpoint: `${notebookName.toLowerCase()}/${sectionIdx}`,
                note: {
                  notebook: notebookName,
                  section: section,
                  page: result.data.value,
                },
                maxCnts: maxCnts,
              })
              pageReqExec(
                notebookName,
                {
                  sectionUrl: updatedContents.endpoint.split('/')[1],
                  // sectionUrl: sectionIdx,
                  name: section.name,
                },
                result.data.value,
                updatedContents.maxCnts,
                tokens
              )
                .then(updatedMaxCnts => {
                  /* Get Section's Page Info */
                  singleReq(notebookName, sectionObj[sectionIdx], updatedMaxCnts, tokens, sectionIdx)
                })
                .catch(e => {
                  console.log('[sectionReqExec-singleReq-pageReqExec catch]',e.stack)
                  return reject(e)
                })
            })
            .catch(e => {
              console.log('[sectionReqExec-singleReq catch]', e.stack)
              // sectionIdx++
              const divineAnswer = shouldRecurse(e)
              console.log('### divineAnswer:', divineAnswer)
              if (divineAnswer === 'auth') {
                setValidToken().then(refreshedTokens => {
                  tokens = refreshedTokens
                  singleReq(notebookName, sectionObj[sectionIdx], maxCnts, tokens, sectionIdx)
                })
              } else if (divineAnswer === 'wrong') {
                singleReq(notebookName, sectionObj[sectionIdx], maxCnts, tokens, sectionIdx)
              } else {
                return reject(e)
              }
            }) // end axios()
        }
        /* check when no more section exists */
        if (sectionObj.length === 0) {
          return resolve(maxCnts)
        } else {
          /* Beginning of Single Page Info */
          singleReq(notebookName, sectionObj[0], maxCnts, tokens, 0)
        }
      })
    } // end sectionReqExec(notebookName, sectionObj)

    /**
     * @name notebookReqExec
     * @param {Object} notebookList notebook list for creating post contents
     * @param {Object} maxCnts max routing number at each notebooks and sections for checking duplicate routing
     * @param {JSON} tokens OneNote tokens
     * @description generate notebook content
     */
    const notebookReqExec = (notebookList, maxCnts, tokens) => {
      return new Promise((resolve, reject) => {
        const singleReq = (notebooks, maxCnts, tokens) => {
          const notebookKeys = notebooks.keys()
          const notebookNextItem = notebookKeys.next()
          const noteBookNextValue = notebooks.get(notebookNextItem.value)
          if (!notebookNextItem.done) {
            return axios
              .get(GET_NOTEBOOK_SECTION_LIST_URL(noteBookNextValue), {
                headers: {
                  Authorization: `Bearer ${tokens.access_token}`,
                },
              })
              .then(result => {
                /* Section List: result.data.value = Array[24] */
                notebooks.delete(notebookNextItem.value)
                console.log('NOTEBOOK[%s] try', notebookNextItem.value)

                const updatedContents = appendPost({
                  type: 'notebook',
                  routeKey: notebookNextItem.value.toLowerCase(),
                  endpoint: notebookNextItem.value.toLowerCase(),
                  note: {
                    notebook: notebookNextItem.value,
                    section: result.data.value,
                    page: null,
                  },
                  maxCnts: maxCnts,
                })
                /* Prod: Get Section's Pages */
                sectionReqExec(
                  notebookNextItem.value,
                  result.data.value,
                  updatedContents.maxCnts,
                  tokens
                )
                  .then(updatedMaxCnts => {
                    /* Recursive Notebook */
                    singleReq(notebooks, updatedMaxCnts, tokens)
                  })
                  .catch(e => {
                    console.log('[notebookReqExec-singleReq-sectionReqExec catch]', e.stack)
                    return reject(e)
                  })
              })
              .catch(e => {
                console.log('[notebookReqExec catch]', e.stack)
                const divineAnswer = shouldRecurse(e)
                console.log('### divineAnswer:', divineAnswer)
                if (divineAnswer === 'auth') {
                  setValidToken().then(refreshedTokens => {
                    tokens = refreshedTokens
                    singleReq(notebooks, maxCnts, tokens)
                  })
                } else if (divineAnswer === 'wrong') {
                  singleReq(notebooks, maxCnts, tokens)
                } else {
                  return reject(e)
                }
              }) // end axios()
          } // end if
          return resolve()
        } // end singleReq()
        /* check when no more section exists */
        const isNotebookExists = notebookList.keys().next()
        if (!isNotebookExists.done) {
          singleReq(notebookList, maxCnts, tokens)
        } else {
          return resolve()
        }
      })
    } // end notebookReqExec(notebookList)

    /* Prod: Very First Step */
    return notebookReqExec(notebookList, maxCnts, tokens)
      .then(() => {
        return resolve()
      })
      .catch(e => {
        return reject(e)
      })
  })
}
// #endregion end executor

/**
 * @name execution
 * @description get max counts at existed routings and generate onenote contents
 */
getMaxCnts()
  .then(maxCnts => {
    // 이미 존재하는 post_contents를 postContent에 적재해 놓고, 그 이후의 포스팅에 대해서 추가한다는 의도의 로직이지만,
    // 가끔 JSON의 key인 endpoint의 value가 미세하게 다른 것 때문에 중복되어서 내용이 추가되는 경우도 있음.
    // 굳이 이 로직이 없더라도 routings의 key값으로 중복체크를 할 것임.
    // if (originalPostings.content.length > 0) {
    //   for(let i=0; i<originalPostings.content.length; i++) {
    //     postContent[originalPostings.content[i].endpoint] = originalPostings.content[i]
    //   }
    // }
    return recurrReqSectionData(notebooks, maxCnts, tokens)
  })
  .then(() => {
    return Object.keys(postContent).map((key) => {
      return postContent[key]
    })
  })
  .then((formattedPostContent) => {
    const leadtime = new Date() - startTime
    savePost(originalPostings.path.substring(1), JSON.stringify(formattedPostContent, null, 2)) // prod
    savePost(originalRoutings.path.substring(1), JSON.stringify(routings, null, 2)) // prod
    console.log('# finished. total %s sec #', leadtime / 1000)
  })
  .catch(e => {
    console.log('# final catch #', e)
  })
