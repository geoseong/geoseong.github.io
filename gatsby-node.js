/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const blogpost = require('./postings/post_contents_overwrite.json')
const jsfile = {
  notebook: './src/blogposts/notebooklist.js',
  section: './src/blogposts/sectionlist.js',
  page: './src/blogposts/pagelist.js',
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    /* Page 생성. */
    const createPageRoute = ({ type, endpoint, notebook, section, page }) => {
      createPage({
        path: endpoint,
        component: require.resolve(jsfile[type]),
        context: {
          /* pageContext */
          notebook,
          section,
          page,
        },
      }) // end createPage
    } // end createPageRoute

    // const generateRoutePage = (postContents, idx) => {
    //   const { type, endpoint, notebook, section, page } = postContents
    //   createPage({
    //     path: endpoint,
    //     component: require.resolve(jsfile[type]),
    //     context: {
    //       /* pageContext */
    //       notebook,
    //       section,
    //       page,
    //     },
    //   }) // end createPage
    // } // end createPageRoute

    let notebookList = []
    for (let i = 0; i < blogpost.length; i++) {
      createPageRoute(blogpost[i])
      if (blogpost[i].type === 'notebook') {
        notebookList.push(blogpost[i])
      }
    }
    createPage({
      path: '/',
      component: require.resolve('./src/blogposts/index.js'),
      context: {
        /* pageContext */
        notebookList,
      },
    }) // end createPage
    resolve()
  })
}
