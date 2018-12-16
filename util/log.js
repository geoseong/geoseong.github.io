/**
 * @name createLogOld
 * @param {Object} msgobj {
 *   type: 'sectionListGetter',
 *   status: error.response.status,
 *   statusText: error.response.statusText,
 *   detail: error.response.data.error
 * }
 * @description 빌드 실패 시 로그파일 생성시키기
 */
// const createLogOld = (msgobj) => {
//   const fs = require('fs')
//   const nowdt = (dt) => {
//     const lengthtwo = (data) => (data<10?'0'+data:data.toString())
//     const lengththree = (data) => (data<100?(data>10?'0'+data:'00'+data.toString()):data.toString())
//     return dt.getFullYear().toString()+lengthtwo(dt.getMonth()+1)+lengthtwo(dt.getDate())+
//       '_'+
//       lengthtwo(dt.getHours())+lengthtwo(dt.getMinutes())+lengthtwo(dt.getSeconds())+lengththree(dt.getMilliseconds());
//   }
//   // const exist = fs.existsSync(`${__dirname}/buildlog/`);
//   const exist = fs.existsSync(`./buildlog/`);
//   if (exist) {
//     fs.writeFileSync(`./buildlog/${nowdt(new Date())}`, JSON.stringify(msgobj, null, 2));
//   } else {
//     fs.mkdir(`./buildlog/`, (err) => {
//       if (err) {
//         console.log('[createLog]mkdir err', err);
//         return;
//       }
//       fs.writeFileSync(`./buildlog/${nowdt(new Date())}`, JSON.stringify(msgobj, null, 2));
//     })
//   }
// }

/**
 * @name createLog
 * @param {Object} msgobj {
 *   type: 'sectionListGetter',
 *   status: error.response.status,
 *   statusText: error.response.statusText,
 *   detail: error.response.data.error
 * }
 * @param {String} type 로그파일 맨 뒤에 짓고싶은 이름
 * @description 빌드 실패 시 로그파일 생성시키기
 */
const createLog = (msgobj, type) => {
  // console.log('[createLog] msgobj', typeof msgobj)
  // console.log('[createLog] type', type)
  const fs = require('fs')
  
  const nowdt = (dt) => {
    const lengthtwo = (data) => (data<10?`0${data}`:data.toString())
    const lengththree = (data) => (data<100?(data>10?`0${data}`:`00${data}`.toString()):data.toString())
    // return dt.getFullYear().toString()+lengthtwo(dt.getMonth()+1)+lengthtwo(dt.getDate());
    return dt.getFullYear().toString()+lengthtwo(dt.getMonth()+1)+lengthtwo(dt.getDate())+
      '_'+
      lengthtwo(dt.getHours())+lengthtwo(dt.getMinutes())+lengthtwo(dt.getSeconds())+lengththree(dt.getMilliseconds());
  }
  // const exist = fs.existsSync(`${__dirname}/buildlog/`);
  const existdir = fs.existsSync(`./buildlog/`);
  const filepath = `./buildlog/${nowdt(new Date())}${type?'-'+type:''}`;
  const existfile = fs.existsSync(filepath);
  const logdata = (msgobj instanceof Map)?[...msgobj]:msgobj;
  if (existdir) { /* 이미 디렉토리가 존재한다면.. */
    if (existfile) {  /* 이미 디렉토리 내 파일명이 존재한다면.. */
      let idx = 1;
      let over = true;
      while(over) {
        /* true: 존재하는 파일이다. */
        if (fs.existsSync(`${filepath}_${idx}`)){
          idx++;
        } else {
          /* false: 존재하지 않는 파일이다. */
          return fs.writeFileSync(`${filepath}_${idx}`, logdata);
          // fs.writeFileSync(`${filepath}_${idx}`, JSON.stringify(logdata, null, 2));
          over = false;
        }
      } // end while
    } else {
      return fs.writeFileSync(filepath, logdata); 
      // fs.writeFileSync(filepath, JSON.stringify(logdata, null, 2)); 
    }
  } else {
    return fs.mkdir(`./buildlog/`, (err) => {
      if (err) {
        console.log('[createLog]mkdir err', err);
        return;
      }
      return fs.writeFileSync(filepath, logdata);
      // return fs.writeFileSync(filepath, JSON.stringify(logdata, null, 2));
    })
  }
}

exports.createLog = createLog;