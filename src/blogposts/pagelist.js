import React, { Component } from 'react'
import { Link } from 'gatsby'
import cheerio from 'cheerio'
// import Gist from 'react-gist'
import Layout from '../components/Layout'
import routing from '../../postings/routings.json'
import { getFormmatedDt } from '../../util/convert'
import MetaInfo from '../components/MetaInfo'

const inlineStyle = {
  titleArea: {
    marginBottom: '2rem',
  },
  spaceHorizontal: {
    margin: '0 .5rem',
  },
  listBtn: {
    textAlign: 'right',
    margin: '1rem 0',
  },
}
class IndexPage extends Component {
  contentRef = React.createRef()
  gistObjs = []
  state = {
    // onLoadUtt: false,
  }

  componentDidMount = () => {
    // setTimeout(() => {
    // }, 300)
    this.execGitGist()
    this.initUtterances()
  }

  initUtterances = () => {
    // https://github.com/adhrinae/gatsby-blog-template-rinae/blob/5b22ca6b72e2ecb447e0e90e4a91e698fbf87271/src/templates/Post.js
    // TODO: utterances로 댓글 남길 때 issue보드 내용에 본문 내용과 endpoint찍히는 게 이상한데, 한번 살펴봐야 할 듯.
    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'geoseong/geoseong.github.io',
      // branch: 'master',
      async: true,
      theme: 'icy-dark',
      label: 'comment',
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
    }
    const utterances = document.createElement('script')
    const commentBox = document.querySelector('.commentbox')

    Object.keys(utterancesConfig).forEach(configKey => {
      utterances.setAttribute(configKey, utterancesConfig[configKey])
    })
    commentBox.insertAdjacentElement('afterend', utterances)
    // this.setState({
    //   onLoadUtt: true,
    // })
  }

  execGitGist = () => {
    // let { gistId, gistFile, gistObjs } = this
    let { gistObjs } = this
    if (!gistObjs || gistObjs.length === 0) {
      return
    }
    for (let i = 0; i < gistObjs.length; i++) {
      let { gistId, gistFile, gistIframeId } = gistObjs[i]
      let ref = this.contentRef
      let iframeDom = ref.current.querySelector(`#${gistIframeId}`)
      let doc
      if (iframeDom.contentDocument) {
        doc = iframeDom.contentDocument
      } else if (iframeDom.contentWindow) {
        doc = iframeDom.contentWindow.document
      }
      if (!iframeDom.contentDocument && !iframeDom.contentWindow) {
        /* draft */
      }
      const iframeHtml = this._updateIframeContent({
        id: gistId,
        file: gistFile,
        domId: gistIframeId,
      })
      doc.open()
      doc.writeln(iframeHtml)
      doc.close()
    }
  }

  /* thanks to: https://github.com/tleunen/react-gist */
  _defineUrl = ({ id, file }) => {
    let fileArg = file ? '?file=' + file : ''
    return 'https://gist.github.com/' + id + '.js' + fileArg.replace('-', '.')
  }

  /* thanks to: https://github.com/tleunen/react-gist */
  _updateIframeContent = ({ id, file, domId }) => {
    let gistLink = this._defineUrl({ id, file })
    let gistScript =
      '<script type="text/javascript" src="' + gistLink + '"></script>'
    let styles = '<style>*{font-size:12px;}</style>'
    let elementId = domId
    // let elementId = file ? 'gist-' + id + '-' + file : 'gist-' + id
    let resizeScript =
      'onload="parent.document.getElementById(\'' +
      elementId +
      "').style.height=document.body.scrollHeight + 10 + 'px'\""
    let iframeHtml =
      '<html><head><base target="_parent">' +
      styles +
      '</head><body ' +
      resizeScript +
      '>' +
      gistScript +
      '</body></html>'
    return iframeHtml
  }

  setGistMarkup = htmlTagCovered => {
    /* OneNote 페이지의 전체 DOM */
    const $ = cheerio.load(htmlTagCovered)
    /* body 태그 */
    const bodyTag = $('body')
    /* a태그는 target="_blank" attr을 부여하기 */
    bodyTag.find('a').attr('target', '_blank')
    /* body 태그 바로 밑의 div의 스타일 attr 없애기 */
    bodyTag.children('div').removeAttr('style')
    /* spacing 적용하기 */
    bodyTag.find('p').css('padding-left', '1.5rem')
    bodyTag.find('table').css('margin-left', '1.5rem')
    /* #gist -> iframe */
    bodyTag
      .find('a[href*="gist.github.com"]')
      .parent('p')
      .addClass('gist-wrapper')
    /* h태그의 style 중 font-size 발라내기 */
    let inlineStyleH1 = bodyTag.find('h1').attr('style')
    let inlineStyleH2 = bodyTag.find('h2').attr('style')
    let inlineStyleH3 = bodyTag.find('h3').attr('style')
    if (inlineStyleH1) {
      bodyTag
        .find('h1')
        .attr('style', inlineStyleH1.replace(/font-size:\d+pt;/g, ''))
    }
    if (inlineStyleH2) {
      bodyTag
        .find('h2')
        .attr('style', inlineStyleH2.replace(/font-size:\d+pt;/g, ''))
    }
    if (inlineStyleH3) {
      bodyTag
        .find('h3')
        .attr('style', inlineStyleH3.replace(/font-size:\d+pt;/g, ''))
    }

    let gistDom = bodyTag.find('a[href*="gist.github.com"]')
    for (let i = 0; i < gistDom.length; i++) {
      let {
        attribs: { href },
      } = gistDom[i]
      let splittedHref = href.split('/')
      let gistInfo = splittedHref[splittedHref.length - 1].split('#file-')
      let gistId = gistInfo[0]
      let gistFile = gistInfo.length > 1 && gistInfo[1]
      let gistIframeId = gistFile
        ? `gist-${gistId}-${gistFile}`
        : `gist-${gistId}`
      this.gistObjs.push({
        gistId,
        gistFile,
        gistIframeId,
      })
      bodyTag
        .find(`a[href="${href}"]`)
        .replaceWith(
          `<iframe id="${gistIframeId}" width="100%" style="border-style: none;"/>`
        )
    }
    return bodyTag
  }

  getHtmlTagCovered = pageContext => {
    let htmlTag = pageContext.page.html
    return this.setGistMarkup(htmlTag)
  }

  render() {
    const {
      props: { pageContext },
      // state: { onLoadUtt },
    } = this

    /* html태그가 없는 내용 */
    const content = pageContext.page.content.replace(/  /g, '')

    return (
      <Layout type="blog">
        <MetaInfo
          title={pageContext.page.title}
          description={content}
          type="website"
          locationAfterOrigin={routing[pageContext.page.id]}
          twittercard="summary"
          keywords={
            `${pageContext.notebook},${
              pageContext.section
            },geoseong,dev note,` + pageContext.page.title.split(' ').join(',')
          }
          modifiedDt={pageContext.page.lastModifiedTime}
          createdDt={pageContext.page.createdTime}
        />
        <div style={inlineStyle.titleArea}>
          <h1 className="text-light">{pageContext.page.title}</h1>
          <div className="text-info">
            <Link
              className="text-info btn"
              to={`/${pageContext.notebook.toLowerCase()}`}
            >
              <span className="">{pageContext.notebook}</span>
            </Link>
            <span
              className="fas fa-angle-double-right"
              style={inlineStyle.spaceHorizontal}
            />
            <Link
              className="text-info btn"
              to={`/${routing[pageContext.page.parentSection.id]}`}
            >
              <span className="">{pageContext.section}</span>
            </Link>
          </div>
          <h6 className="text-right">
            {getFormmatedDt(pageContext.page.lastModifiedTime).datetime}
          </h6>
        </div>
        <div
          className="geoseong-page-content"
          dangerouslySetInnerHTML={{
            __html: this.getHtmlTagCovered(pageContext),
          }}
          ref={this.contentRef}
        />
        {/* utterances */}
        <div className="commentbox mt-5" />
        {/* {!onLoadUtt && (
          <div className="comment-loading bg-dark p-3 rounded">
            댓글 로딩 중...
          </div>
        )} */}
        <div style={inlineStyle.listBtn}>
          <Link to={`/${routing[pageContext.page.parentSection.id]}`}>
            <button type="button" className="btn btn-secondary">
              목록으로
            </button>
          </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
