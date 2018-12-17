import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.css'
const pageTitle = 'Geoseong\'s dev note'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const RealLayout = ({children}) => (
  <>
    <Helmet title={pageTitle}>
      {/* Default */}
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="description" content="Geoseong's Gatsby Site" />
      <meta name="keywords" content="sample, something" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      {/* OpenGraph */}
      <meta property="og:title" content="opengraph title: page one" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="opengraph desc Next.js 실습" />
      <meta property="og:site_name" content="Geoseong's Next.js" />
      <meta property="og:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" />
      <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/" />
      {/* Twittercard */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="geoseong.github.io" />
      <meta name="twitter:title" content="Geoseong's REST data" />
      <meta name="twitter:description" content="rest api createPage" />
      <meta name="twitter:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" />
      <meta name="twitter:url" content="https://blog.outsider.ne.kr/922" />
      {/* Style */}
      <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" />
    </Helmet>
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">{pageTitle}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {children}
    </React.Fragment>
  </>
)
export default RealLayout
