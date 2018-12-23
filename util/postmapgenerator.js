const fs = require('fs')

/**
 * @name generatePostUrl
 * @param {String} notebookName OneNote notebook Name
 * @param {String} onenoteId 수정하고픈 OneNote ID
 * @description 블로그 url Map 및 sitemap 생성
 */
const generatePostUrl = (notebookName, onenoteId) => {
  // const exist = fs.existsSync(`${__dirname}/buildlog/`);
  const exist = fs.existsSync(`./postmap.json`);
  if (exist) {
    const postmap = fs.readFileSync(`./postmap.json`);
    if (!postmap[onenoteId]) {
      const notebookCnt = Number(postmap[notebookName]?postmap[notebookName]:0);
      const posturl = `${notebookName}/${(notebookCnt + 1)}`;
      const newPostMap = Object.assign(postmap, {[notebookName]: (notebookCnt + 1)}, {[onenoteId]: posturl});
      fs.writeFileSync(`./postmap.json`, JSON.stringify(newPostMap, null, 2));
      return posturl;
    } else {
      return postmap[onenoteId];
    }
  } else {
    const notebookCnt = 0;
    const posturl = `${notebookName}/${(notebookCnt + 1)}`;
    const newPostMap = Object.assign({}, {[notebookName]: (notebookCnt + 1)}, {[onenoteId]: posturl});
    fs.writeFileSync(`./postmap.json`, JSON.stringify(newPostMap, null, 2));
    return posturl;
  }
}

/**
 * @name getPostUrl
 * @param {String} onenoteId OneNote ID
 * @description 해당 OneNote ID에 매칭되는 url이 있나 확인하기
 */
const getPostUrl = (onenoteId) => {
  const exist = fs.existsSync(`./postmap.json`);
  if (exist) {
    const postmap = require(`./postmap.json`);
    return postmap[onenoteId] ? postmap[onenoteId] : false;
  } else {
    return false;
  }
}

exports.generatePostUrl = generatePostUrl;