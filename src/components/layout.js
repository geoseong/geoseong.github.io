import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Header from './Header'
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

class RealLayout extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    // console.log('handleClickOutside event.target.id', event.target.id)
    if (!event.target.id || event.target.id.length === 0) {
      return
    }
    if (['geoseong-collapse-toggler', 'geoseong-collapse-toggler-icon'].indexOf(event.target.id) > -1) {
      return
    }
    if (event.target.id !== 'searchInput') {
      document.querySelector('#geoseong-search-area').classList.add('geoseong-hide')
    } else {
      document.querySelector('#geoseong-search-area').classList.remove('geoseong-hide')
      return
    }
    if (event.target.id !== 'collapseDiv') {
    //  && (event.target.id !== 'geoseong-collapse-toggler' && event.target.id !== 'geoseong-collapse-toggler-icon')) {
      document.querySelector(`#collapseDiv`).classList.remove('show')
    } else {
      document.querySelector(`#collapseDiv`).classList.add('show')
    }
  }

  render() {
    const {children, type} = this.props
    return (
      <React.Fragment>
        <Helmet title={pageTitle}>
          {/* Default */}
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge"/>
          <meta name="description" content="Geoseong's Dev Note" />
          <meta name="keywords" content="sample, something" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          {/* WebMaster */}
          <meta name="google-site-verification" content="F982oVX7H0KLHXZ48aBOJW917-yg4gujHSA4TsMDsHk" />
          {/* AdSense */}
          {/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-4861235624374871",
              enable_page_level_ads: true
            });
          </script> */}
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
          <Header title={pageTitle} style={inlineStyle} type={type}/>
          <div className="geoseong-page" style={inlineStyle.content} >
            {children}
          </div>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default RealLayout