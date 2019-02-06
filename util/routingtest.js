'use strict';

const routingsPath = '../postings/routings.json';
let routings = {};
try {
  routings = require(routingsPath);
} catch(e) {
  routings = {};
}

const getMaxCnts = () => {
  return new Promise((resolve, reject) => {
    let freshRoutings = {};
    let maxCnts = {};
    
    for(let key in routings) {
      let url = routings[key];
      let splittedUrl = url.split('/');
      let notebookIdx = 0;
      let sectionIdx = 1;
      let pageIdx = 2;
      if (url.substring(0,1) === '/') {
        notebookIdx = 1;
        sectionIdx = 2;
        pageIdx = 3;
      } // end if
      let notebook = splittedUrl[notebookIdx];
      let section = splittedUrl[sectionIdx];
      let page = splittedUrl[pageIdx];
      /*** calculate section's max count ***/
      if (!section && !maxCnts[notebook]) { // ex) /web dev/{n}
        maxCnts[notebook] = 0;
      } else if (section && Number(maxCnts[notebook]) < Number(section)) {
        maxCnts[notebook] = Number(section);
      } // end if
      /*** calculate page's max count ***/
      if (section && !page && !maxCnts[`${notebook}/${section}`]) { // ex) /web dev/1/{n}
        maxCnts[`${notebook}/${section}`] = 0;
      } else if (section && page && Number(maxCnts[`${notebook}/${section}`]) < Number(page)){
        maxCnts[`${notebook}/${section}`] = Number(page);
      } // end if
    } // end for
    resolve(maxCnts);
  });
}

/* for manual execution */
if (process.argv[2]) {
  getMaxCnts().then(result => {
    console.log('maxCnts:', result);
  });
}

exports.getMaxCnts = getMaxCnts;
exports.originalRoutings = routings;