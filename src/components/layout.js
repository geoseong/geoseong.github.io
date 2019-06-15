import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from './Header'
import '../styles/bootswatch.css'
import '../styles/geoseong.css'

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
  headerDom = null

  componentDidMount() {
    document.addEventListener('mousedown', e => {
      this.handleClickOutside(e, this.headerDom)
    })
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', e => {
      this.handleClickOutside(e, this.headerDom)
    })
  }

  handleClickOutside(event, headerDom) {
    // console.dir(event.target)
    /* 
      1. 텍스트박스 눌렀을때 #searchInput
      2. 검색결과 박스 눌렀을때 -
      3. [모바일] 텍스트박스 옆의 영역 눌렀을때 #search-form-area
      4. 아얘 다른 영역 눌렀을때 -
      5. [모바일] 펼치는 리스트버튼 눌렀을때 
        #geoseong-collapse-toggler-icon || #geoseong-collapse-toggler
      6. 헤더 영역 혹은 모바일의 펼침메뉴 영역 눌렀을 때 #collapseDiv
    */
    if (
      ['geoseong-collapse-toggler', 'geoseong-collapse-toggler-icon'].indexOf(
        event.target.id
      ) > -1
    ) {
      return
    }
    if (
      event.target.classList.contains('geoseong-search-result') ||
      event.target.classList.contains('nav-link')
    ) {
      return
    }
    document.querySelector(`#collapseDiv`).classList.add('show')
    if (event.target.id === 'searchInput') {
      document
        .querySelector('#geoseong-search-area')
        .classList.remove('geoseong-hide')
    } else if (event.target.id === 'search-form-area') {
      document
        .querySelector('#geoseong-search-area')
        .classList.add('geoseong-hide')
    } else {
      document
        .querySelector('#geoseong-search-area')
        .classList.add('geoseong-hide')
      document.querySelector(`#collapseDiv`).classList.remove('show')
    }
  }

  setRef = e => {
    return (this.headerDom = e)
  }

  LayoutRenderer = ({
    site: {
      siteMetadata: { defaultTitle, siteUrl, defaultImage },
    },
  }) => {
    const { children, type, intro } = this.props
    const defaultOgImage = `${siteUrl}/${defaultImage}`
    return (
      <React.Fragment>
        <Helmet title={defaultTitle}>
          {/* Default */}
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {intro && <meta name="description" content={defaultTitle} />}
          <meta name="keywords" content="geoseong, react, javascript" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* AdSense */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script src="/adsense.js" type="text/javascript" />
          {/* WebMaster */}
          <meta
            name="google-site-verification"
            content="F982oVX7H0KLHXZ48aBOJW917-yg4gujHSA4TsMDsHk"
          />
          <meta
            name="google-site-verification"
            content="f-ZKSvxbMZ1cZzz5biFoZdw-cFAaye_KVsVxnVuuPfQ"
          />
          {/* OpenGraph */}
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content={defaultTitle} />
          {intro && <meta property="og:title" content={defaultTitle} />}
          {intro && <meta property="og:url" content={`${siteUrl}/`} />}
          {intro && <meta property="og:image" content={defaultOgImage} />}
          {/* Twittercard */}
          <meta name="twitter:image" content={defaultOgImage} />
          {intro && <meta property="twitter:title" content={defaultTitle} />}
          {intro && (
            <meta property="twitter:text:title" content={defaultTitle} />
          )}
          {/* Style */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
        </Helmet>
        <Header
          title={defaultTitle}
          style={inlineStyle}
          type={type}
          ref={this.setRef}
        />
        <div className="geoseong-page container" style={inlineStyle.content}>
          {children}
        </div>
      </React.Fragment>
    )
  }
  render() {
    const query = graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            siteUrl: siteUrl
            defaultImage: image
          }
        }
      }
    `
    return <StaticQuery query={query} render={this.LayoutRenderer} />
  }
}

export default RealLayout
