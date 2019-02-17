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
          <Header
            title={pageTitle}
            style={inlineStyle}
            type={type}
            ref={this.setRef}
          />
          <div className="geoseong-page" style={inlineStyle.content}>
            {children}
          </div>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

export default RealLayout
