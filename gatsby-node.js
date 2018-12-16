/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const axios = require('axios')
const fs = require('fs')
const tokens = require(process.env.ONENOTE).tokens
const { createLog } = require('./util/log')

const notebookLists = [
  ['AWS', '0-BC575AB8E2AB9833!2000'],  // AWS
  ['Dev', '0-BC575AB8E2AB9833!1937'],  // Dev
  ['MacBook', '0-BC575AB8E2AB9833!1940'],  // MacBook
]
/* 노출시키고픈 NoteBook List */
const notebooks = new Map(notebookLists);
const endpointPath = './postings/endpoints.json';
const GET_NOTEBOOK_SECTION_LIST_URL = (notebookId) => {return 'https://www.onenote.com/api/v1.0/me/notes/notebooks/' + notebookId + '/sections'};
const GET_NOTEBOOK_SECTION_PAGE_LIST_URL = (sectionId) => {return 'https://www.onenote.com/api/v1.0/me/notes/sections/' + sectionId + '/pages'};
const GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL = (pageId) => {return 'https://www.onenote.com/api/v1.0/me/notes/pages/' + pageId + '/content?preAuthenticated=true'};
/* All endpoints */
const endpoints = {};

exports.createPages = ({ graphql, actions: {createPage} }) => {
  return new Promise((resolve, reject) => {
    /* Page 생성. */
    const createPageRoute = (path, componentPath, params) => {
      const jsfile = {
        notebooks: "./src/blogposts/notebooklist.js",
        sections: "./src/blogposts/sectionlist.js",
        pages: "./src/blogposts/pagelist.js",
      }
      createPage({
        path: path,
        component: require.resolve(jsfile[componentPath]),
        context: {...params, link} /* pageContext */
      }); // end createPage
    }

    const pageReqExec = (notebookName, sectionId, pageObj) => {
      return new Promise((resolve, reject) => {
        let pageIdx = 0;
        const singleReq = (notebookName, sectionId, pageId) => {
          /* append endpoint */
          endpoints[`${notebookName}/${sectionId}/${pageIdx+1}`] = pageId.id;
          fs.writeFileSync(endpointPath, JSON.stringify(endpoints, null, 2));
          return axios.get(GET_NOTEBOOK_SECTION_PAGE_CONTENT_URL(pageId.id), {
            headers: {
              'Authorization': `Bearer ${tokens.access_token}`
            },
          }).then(result => {
            /* Content: HTML DOMs */
            pageIdx++;
            /* make folder and make html file */
            // !fs.existsSync(`./postings/${notebookName}`) && fs.mkdirSync(`./postings/${notebookName}`);
            // !fs.existsSync(`./postings/${notebookName}/${sectionId}`) && fs.mkdirSync(`./postings/${notebookName}/${sectionId}`);
            fs.writeFileSync(`./postings/${notebookName}/${sectionId}/${pageIdx}.html`, result.data, null, 2);
            /* process log */
            console.log('NOTEBOOK[%s] SECTION[%s] PAGE[%s](%s) process: %d/%d', notebookName, sectionId, pageIdx, pageId.id, pageIdx, pageObj.length);
            /* exit when fully scanned */
            if (pageIdx === pageObj.length) {
              return resolve();
            }
            // fs.writeFileSync(`./${notebookName}/${sectionId}/${pageIdx}.html`, JSON.stringify(result.data, null, 2));
            /* Get Section's Page Info */
            singleReq(notebookName, sectionId, pageObj[pageIdx]);
          }).catch(e => {
            console.log('NOTEBOOK[%s] SECTION[%s] PAGE[%s](%s) process: %d/%d', notebookName, sectionId, pageIdx, pageId.id, pageIdx, pageObj.length);
            console.log('[pageReqExec-singleReq catch]', e);
            console.log('[pageReqExec-singleReq catch]', e.response.status, e.response.statusText);
            /* 에러 나오는 유형: ID가 invalid할때 */
            pageIdx++;
            /* Get Section's Page Info */
            singleReq(notebookName, sectionId, pageObj[pageIdx]);
            // return reject(e);
          })
        }
        if (pageObj.length === 0) {
          return resolve();
        } else {
          /* Beginning of Single Page Info */
          singleReq(notebookName, sectionId, pageObj[pageIdx]);
        }
      });
    } // end pageReqExec(notebookName, sectionId, pageObj)

    const sectionReqExec = (notebookName, sectionObj) => {
      return new Promise((resolve, reject) => {
        let sectionIdx = 0;
        const singleReq = (notebookName, sectionId) => {
          /* append endpoint */
          endpoints[`${notebookName}/${sectionIdx+1}`] = sectionId.id;
          fs.writeFileSync(endpointPath, JSON.stringify(endpoints, null, 2));
          /* axios connection */
          return axios.get(GET_NOTEBOOK_SECTION_PAGE_LIST_URL(sectionId.id), {
            headers: {
              'Authorization': `Bearer ${tokens.access_token}`
            },
          }).then(result => {
            /* Page List: result.data.value = Array[10] */
            sectionIdx++;
            console.log('------------------------------\nNOTEBOOK[%s] SECTION[%s](%s) try ----------(%d/%d)', notebookName, sectionIdx, sectionId.id, sectionIdx, sectionObj.length);
            /* make folder and make html file */
            !fs.existsSync(`./postings/${notebookName}/${sectionIdx}`) && fs.mkdirSync(`./postings/${notebookName}/${sectionIdx}`);
            /* create Actual Page */
            createPageRoute(`/${notebookName}/${sectionIdx}`, 'sections', {data: result.data.value, notebook: notebookName, section: sectionId.name});
            if (sectionIdx === sectionObj.length) {
              return resolve();
            }
            singleReq(notebookName, sectionObj[sectionIdx]);
            // pageReqExec(notebookName, sectionIdx, result.data.value).then(page => {
            //   /* Get Section's Page Info */
            //   singleReq(notebookName, sectionObj[sectionIdx]);
            // }).catch(e => {
            //   console.log('[sectionReqExec-singleReq-pageReqExec catch]', e);
            //   return reject(e);
            // })
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
          const noteBookNextValue = notebookNextItem.value;
          const noteBookNextId = notebookList.get(noteBookNextValue);
          if (!notebookNextItem.done) {
            /* append endpoint */
            endpoints[noteBookNextValue] = noteBookNextId;
            /* create endpoint */
            fs.writeFileSync(endpointPath, JSON.stringify(endpoints, null, 2));
            return axios.get(GET_NOTEBOOK_SECTION_LIST_URL(noteBookNextId), {
              headers: {
                'Authorization': `Bearer ${tokens.access_token}`
              },
            }).then(result => {
              /* Section List: result.data.value = Array[24] */
              // /* set Notebook's Section */
              // sectionData.set(nextObj.value, result.data.value);
              console.log('NOTEBOOK[%s] try---------------', noteBookNextValue);
              /* make folder and make html file */
              !fs.existsSync(`./postings/${noteBookNextValue}`) && fs.mkdirSync(`./postings/${noteBookNextValue}`);
              /* create Actual Page */
              createPageRoute(`/${noteBookNextValue}`, 'notebooks', {data: result.data.value, notebook: noteBookNextValue});
              // singleReq();
              /* Get Section's Pages */
              sectionReqExec(notebookNextItem.value, result.data.value).then(page => {
                /* Recursive Notebook */
                singleReq();
              })
            }).catch(e => {
              const err = new Error(e);
              console.log('[notebookReqExec catch]', err);
              createLog(err, 'notebookReqExec_catch')
              return reject('[[[[[notebookReqExec catch]]]]]');
            })
          }
          return resolve();
        }
        /* First Step! */
        singleReq();
      });
    } // end notebookReqExec(notebookList)

    /* Very First Step */
    notebookReqExec(notebooks).then(data => {
      console.log('# final then #', data);
      return resolve(data);
    }).catch(e => {
      console.log('# final catch #', e)
      return reject(e)
    });
  }); //end Promise
}
