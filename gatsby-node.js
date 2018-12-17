/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const axios = require('axios')
const fs = require('fs')
const tokens = require(process.env.ONENOTE).tokens
const { createLog } = require('./util/log')
const blogpost = require('./postings/post_contents.json')

exports.createPages = ({ graphql, actions: {createPage} }) => {
  return new Promise((resolve, reject) => {
    /* Page 생성. */
    const createPageRoute = ({ type, endpoint, notebook, section, page }) => {
      const jsfile = {
        notebook: "./src/blogposts/notebooklist.js",
        section: "./src/blogposts/sectionlist.js",
        page: "./src/blogposts/pagelist.js",
      }
      createPage({
        path: endpoint,
        component: require.resolve(jsfile[type]),
        context: {   /* pageContext */
          notebook,
          section,
          page
        }
      }); // end createPage
    } // end createPageRoute

    for(let i=0; i<blogpost.length; i++) {
      createPageRoute(blogpost[i])
    }
    resolve()
  }); //end Promise
}
