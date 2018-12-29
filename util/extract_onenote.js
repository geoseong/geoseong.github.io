'use strict';

/**
 * @description 
 * [시뮬레이션]
 * [[케이스-검색]]
 * 만약 'ec2'로 검색을 하면, 관련된 페이지가 나올텐데,
 * 노트북/섹션/페이지 중에 페이지만 검색이 되는데,
 * 내뱉어야 할 내용: {
 *  페이지url: '',
 *  페이지제목: '',
 *  노트북: '',
 *  섹션: '',
 * }
 * 그 내뱉어야 할 내용 JSON을 Array에다가 push해갖고 파일로 저장한다.
 * 그래서 이 파일의 Array객체는 fusejs.io를 이용해서 검색되게 쓴다.
 */

const axios = require('axios')
const fs = require('fs')
const tokens = require(process.env.ONENOTE).tokens
const cheerio = require('cheerio')
const startTime = new Date();

const notebookLists = [
  ['AWS', '0-BC575AB8E2AB9833!2000'],
  ['Dev', '0-BC575AB8E2AB9833!1937'],
  ['MacBook', '0-BC575AB8E2AB9833!1940'],
  ['Database', '0-BC575AB8E2AB9833!2160'],
  ['React-Native', '0-BC575AB8E2AB9833!2149'],
  ['React-web', '0-BC575AB8E2AB9833!2142'],
]
/* 노출시키고픈 NoteBook List */
const notebooks = new Map(notebookLists);
const GET_NOTEBOOK_SECTION_LIST_URL = (notebookId) => {return 'https://www.onenote.com/api/v1.0/me/notes/notebooks/' + notebookId + '/sections'};
const GET_NOTEBOOK_SECTION_PAGE_LIST_URL = (sectionId) => {return 'https://www.onenote.com/api/v1.0/me/notes/sections/' + sectionId + '/pages'};
const GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL = (pageId) => {return 'https://www.onenote.com/api/v1.0/me/notes/pages/' + pageId + '/content?preAuthenticated=true'};

/* All routings */
const routings = {};
const routingsPath = './postings/routings.json';
/* All posting contents */
const postContent = [];
const postContentPath = './postings/post_contents.json';
/* collapsed menu */
const collapsedMenu = { notebook: {} };

/**
 * @name savePost
 * @param {String} path 
 * @param {*} context 
 * @description 포스팅 관련 정보를 파일로 저장해 놓기. 
 * 해당 파일이 나중에 gatsby-node.js에서 페이지 생성에 쓰일 것임
 */
const savePost = (path, context) => {
  /* JSON.stringify(endpoints, null, 2) */
  fs.writeFileSync(path, context);
}

/**
 * @name assemblePostInfo
 * @param {String} props.type 'notebook' | 'section' | 'page'
 * @param {String} props.endpoint blog posting url
 * @param {String} props.notebook notebook
 * @param {Object} props.section section info
 * @param {Object} props.page page info {title, content}
 * @description OneNote게시물 정규화시키기
 */
const assemblePostInfo = (props) => {
  return {
    type: props.type,
    endpoint: props.endpoint,
    notebook: props.notebook,
    section: props.section,
    page: props.page,
  }
}
/**
 * @name recurrReqSectionData
 * @param {Array} notebookList 
 * @description Recursive Axios Request Maker
 */
const recurrReqSectionData = (notebookList) => {
  return new Promise((resolve, reject) => {
    /* Section List */
    let sectionData = new Map();
    let pageData = new Map();
    let contentData = {};

    /**
     * @name pageReqExec
     * @param {String} notebookName 
     * @param {Object} section {id, name}
     * @param {Array} pageObj page list for specific section
     */
    const pageReqExec = (notebookName, section, pageObj) => {
      return new Promise((resolve, reject) => {
        let pageIdx = 0;
        const singleReq = (notebookName, section, page) => {
          /* exit when fully scanned */
          if (pageIdx === pageObj.length) {
            return resolve();
          }
          return axios.get(GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL(page.id), {
            headers: {
              'Authorization': `Bearer ${tokens.access_token}`
            },
          }).then(result => {
            /* Content: HTML DOMs */
            pageIdx++;
            /* OneNote 페이지의 전체 DOM */
            const $ = cheerio.load(result.data)
            /* OneNote 페이지의 이름 추출 */
            const pageTitle = $('title').text()
            const pageHtml = $('body').html()
            const pageContent = $('body').text().replace(/\n|\t|\r/g, ' ')
            /* exit when fully scanned */
            if (!section.id) {
              return resolve();
            }
            /* push posting contents */
            postContent.push(assemblePostInfo({
              type: `page`,
              endpoint: `${notebookName.toLowerCase()}/${section.id}/${pageIdx}`,
              page: { ...page, content: pageContent, html: pageHtml },
              notebook: notebookName,
              section: section.name,
            }))
            /* push routings */
            Object.assign(routings, {
              [page.id]: `${notebookName.toLowerCase()}/${section.id}/${pageIdx}`
            })
            /* process log */
            console.log('NOTEBOOK[%s] SECTION[%s] PAGE[%s](%s) process: %d/%d', notebookName, section.id, pageIdx, page.id, pageIdx, pageObj.length);
            
            /* Get Section's Page Info */
            singleReq(notebookName, section, pageObj[pageIdx]);
          }).catch(e => {
            console.log('NOTEBOOK[%s] SECTION[%s] PAGE[%s](%s) process: %d/%d', notebookName, section.id, pageIdx, page.id, pageIdx, pageObj.length);
            console.log('[pageReqExec-singleReq catch]', e);
            console.log('[pageReqExec-singleReq catch]', e.response.status, e.response.statusText);
            /* 에러 나오는 유형: ID가 invalid할때 */
            pageIdx++;
            /* Get Section's Page Info */
            singleReq(notebookName, section, pageObj[pageIdx]);
            // return reject(e);
          })
        }
        if (pageObj.length === 0) {
          return resolve();
        } else {
          /* Beginning of Single Page Info */
          singleReq(notebookName, section, pageObj[pageIdx]);
        }
      });
    } // end pageReqExec(notebookName, section, pageObj)

    /**
     * @name sectionReqExec
     * @param {String} notebookName 
     * @param {Object} sectionObj section list for specific notebook
     */
    const sectionReqExec = (notebookName, sectionObj) => {
      return new Promise((resolve, reject) => {
        let sectionIdx = 0;
        const singleReq = (notebookName, section) => {
          /* exit when fully scanned */
          if (sectionIdx === sectionObj.length) {
            return resolve();
          }
          /* axios connection */
          return axios.get(GET_NOTEBOOK_SECTION_PAGE_LIST_URL(section.id), {
            headers: {
              'Authorization': `Bearer ${tokens.access_token}`
            },
          }).then(result => {
            /* Page List: result.data.value = Array[10] */
            sectionIdx++;
            console.log('------------------------------\nNOTEBOOK[%s] SECTION[%s](%s) try ----------(%d/%d)', notebookName, sectionIdx, section.id, sectionIdx, sectionObj.length);
            /* push posting contents */
            postContent.push(assemblePostInfo({
              type: `section`,
              endpoint: `${notebookName.toLowerCase()}/${sectionIdx}`,
              notebook: notebookName,
              section: section,
              page: result.data.value,
            }))
            /* push routings */
            Object.assign(routings, {
              [section.id]: `/${notebookName.toLowerCase()}/${sectionIdx}`
            })
            pageReqExec(notebookName, {id: sectionIdx, name: section.name}, result.data.value).then(page => {
              /* Get Section's Page Info */
              singleReq(notebookName, sectionObj[sectionIdx]);
            }).catch(e => {
              console.log('[sectionReqExec-singleReq-pageReqExec catch]', e);
              return reject(e);
            })
          }).catch(e => {
            console.log('[sectionReqExec-singleReq catch]', e);
            return reject(e);
          })
        }
        if (sectionObj.length === 0) {
          return resolve();
        } else {
          /* Beginning of Single Page Info */
          singleReq(notebookName, sectionObj[sectionIdx]);
        }
      })
    } // end sectionReqExec(notebookName, sectionObj)
    
    const notebookReqExec = (notebookList) => {
      return new Promise((resolve, reject) => {
        const notebookKeys = notebookList.keys();
        const singleReq = () => {
          const notebookNextItem = notebookKeys.next();
          const noteBookNextValue = notebookList.get(notebookNextItem.value);
          if (!notebookNextItem.done) {
            return axios.get(GET_NOTEBOOK_SECTION_LIST_URL(noteBookNextValue), {
              headers: {
                'Authorization': `Bearer ${tokens.access_token}`
              },
            }).then(result => {
              /* Section List: result.data.value = Array[24] */
              console.log('NOTEBOOK[%s] try', notebookNextItem.value);
              /* push posting contents */
              postContent.push(assemblePostInfo({
                type: `notebook`,
                endpoint: `${notebookNextItem.value.toLowerCase()}`,
                notebook: `${notebookNextItem.value}`,
                section: result.data.value,
                page: null,
              }))
              /* push routings */
              Object.assign(routings, {
                [notebookNextItem.value.toLowerCase()]: `/${notebookNextItem.value.toLowerCase()}`
              })
              /* Get Section's Pages */
              sectionReqExec(notebookNextItem.value, result.data.value).then(page => {
                /* Recursive Notebook */
                singleReq();
              })
            }).catch(e => {
              console.log('[notebookReqExec catch]', e);
              return reject(e);
            })
          }
          return resolve();
        }
        singleReq()
      });
    } // end notebookReqExec(notebookList)

    /* Very First Step */
    const resultOneNoteData = notebookReqExec(notebookList).then(d => {
      return resolve(d);
    }).catch(e => {
      return reject(e)
    });
  });
}

recurrReqSectionData(notebooks).then(data => {
  const leadtime = new Date() - startTime
  console.log('# finished. total %s sec #', leadtime / 1000)
  savePost(postContentPath, JSON.stringify(postContent, null, 2))
  savePost(routingsPath, JSON.stringify(routings, null, 2))
  return;
}).catch(e => {
  console.log('# final catch #', e)
  return;
});
