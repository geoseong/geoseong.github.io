/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
// const React = require('react')
// const { StaticQuery, graphql } = require('gatsby')
// const query = graphql`
//   query SEO1 {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         siteUrl: siteUrl
//         defaultImage: image
//       }
//     }
//   }
// `
// const _wrapPageElement = ({ element }) => {
//   console.log('browser/wrapPageElement element', element)
//   const Element = element
//   return (
//     <StaticQuery
//       query={query}
//       render={({
//         site: {
//           siteMetadata: {
//             defaultTitle,
//             defaultDescription,
//             siteUrl,
//             defaultImage,
//             twitterUsername,
//           },
//         },
//       }) => {
//         const defaultOgImage = `${siteUrl}/${defaultImage}`
//         return element
//         // return <Element og={defaultOgImage} />
//       }}
//     />
//   )
//   // return element
// }

// exports.wrapPageElement = _wrapPageElement
