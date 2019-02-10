import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import './bootswatch.css'
import './geoseong.css'

const pageTitle = "Geoseong's dev note"

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
  },
}

class RealLayout extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside(event) {
    // console.log('handleClickOutside event.target.id', event.target.id)
    if (!event.target.id || event.target.id.length === 0) {
      return
    }
    if (
      ['geoseong-collapse-toggler', 'geoseong-collapse-toggler-icon'].indexOf(
        event.target.id
      ) > -1
    ) {
      return
    }
    if (event.target.id !== 'searchInput') {
      document
        .querySelector('#geoseong-search-area')
        .classList.add('geoseong-hide')
    } else {
      document
        .querySelector('#geoseong-search-area')
        .classList.remove('geoseong-hide')
      return
    }
    if (event.target.id !== 'collapseDiv') {
      document.querySelector(`#collapseDiv`).classList.remove('show')
    } else {
      document.querySelector(`#collapseDiv`).classList.add('show')
    }
  }

  render() {
    const { children, type } = this.props
    return (
      <React.Fragment>
        <Helmet title={pageTitle}>
          {/* Default */}
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Geoseong's Dev Note" />
          <meta name="keywords" content="sample, something" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* WebMaster */}
          <meta
            name="google-site-verification"
            content="F982oVX7H0KLHXZ48aBOJW917-yg4gujHSA4TsMDsHk"
          />
          <meta
            name="google-site-verification"
            content="f-ZKSvxbMZ1cZzz5biFoZdw-cFAaye_KVsVxnVuuPfQ"
          />
          {/* AdSense */}
          {/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-4861235624374871",
              enable_page_level_ads: true
            });
          </script> */}
          {/* OpenGraph */}
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Geoseong's Next.js" />
          {/* Twittercard */}
          <meta
            name="twitter:image"
            content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4"
          />
          {/* Style */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
        </Helmet>
        <React.Fragment>
          <Header title={pageTitle} style={inlineStyle} type={type} />
          <div className="geoseong-page" style={inlineStyle.content}>
            {children}
          </div>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default RealLayout
