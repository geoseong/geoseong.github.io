import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Header from './header'
import './bootswatch.css'
import './geoseong.css'

const pageTitle = 'Geoseong\'s dev note'

const inlineStyle = {
  header: {
    height: '4rem',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 999,
  },
  content: {
    marginTop: '4rem',
    padding: '1rem',
  }
}

const RealLayout = ({children}) => (
  <>
    <Helmet title={pageTitle}>
      {/* Default */}
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="description" content="Geoseong's Dev Note" />
      <meta name="keywords" content="sample, something" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      {/* WebMaster */}
      <meta name="google-site-verification" content="F982oVX7H0KLHXZ48aBOJW917-yg4gujHSA4TsMDsHk" />
      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Geoseong's Next.js" />
      {/* <meta property="og:title" content="opengraph title: page one" />
      <meta property="og:description" content="opengraph desc Next.js 실습" />
      <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/" />
      <meta property="og:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" /> */}
      {/* Twittercard */}
      {/* <meta name="twitter:title" content="Geoseong's REST data" />
      <meta name="twitter:description" content="rest api createPage" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="geoseong.github.io" /> */}
      <meta name="twitter:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" />
      <meta name="twitter:url" content="https://blog.outsider.ne.kr/922" />
      {/* Style */}
      {/* <link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" /> */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"></link>
    </Helmet>
    <React.Fragment>
      <Header title={pageTitle} style={inlineStyle}/>
      <div className="geoseong-page" style={inlineStyle.content}>
        {children}
      </div>
    </React.Fragment>
  </>
)
export default RealLayout
