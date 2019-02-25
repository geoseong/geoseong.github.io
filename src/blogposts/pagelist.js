import React, { Component } from 'react'
import Gist from 'react-gist'
import { Link } from 'gatsby'
import cheerio from 'cheerio'
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
  gistRef = React.createRef()
  state = {
    bodyTag: null,
    cnt: 0,
  }

  componentDidMount = () => {
    let ref = this.gistRef
    console.log('content gist', this.contentRef.current.querySelector('#gist'))
    console.log('where is gist', ref.current.iframeNode)
    console.log('[componentDidMount]gistRef', this.gistRef)
    // let temp = ReactDOMServer.renderToStaticMarkup(<GistReference />)

    let htmlTagCovered = this.props.pageContext.page.html
      .replace(
        /\t\t\t<p lang="ko-KR" style="/g,
        '<p lang="ko-KR" style="padding-left: 1.5rem;'
      )
      .replace(
        /\t\t\t<p lang="en-US" style="/g,
        '<p lang="en-US" style="padding-left: 1.5rem;'
      )
      .replace(/\t\t\t<p style="/g, '<p style="padding-left: 1.5rem;')
      .replace(/\t\t\t<table style="/g, '<table style="margin: .5rem 1.5rem;')

    const $ = cheerio.load(htmlTagCovered)
    /* body 태그 */
    const bodyTag = $('body')
    /* a태그는 target="_blank" attr을 부여하기 */
    bodyTag.find('a').attr('target', '_blank')

    /* body 태그 바로 밑의 div의 스타일 attr 없애기 */
    bodyTag.children('div').removeAttr('style')

    // TODO: git gist!: https://gist.github.com/aVolpe/b364a8fcd10f1ba833d97e9ab278f42c

    if (this.state.cnt === 0 && !this.state.bodyTag) {
      let cnt = this.state.cnt + 1
      this.setState({
        bodyTag: bodyTag,
        cnt: cnt,
      })
    }
  }

  getMarkup = htmlTagCovered => {
    /* OneNote 페이지의 전체 DOM */
    const $ = cheerio.load(htmlTagCovered)
    /* body 태그 */
    const bodyTag = $('body')
    /* a태그는 target="_blank" attr을 부여하기 */
    bodyTag.find('a').attr('target', '_blank')
    /* body 태그 바로 밑의 div의 스타일 attr 없애기 */
    bodyTag.children('div').removeAttr('style')
    return bodyTag
  }
  getHtmlTagCovered = pageContext => {
    let htmlTagCovered = pageContext.page.html
      .replace(
        /\t\t\t<p lang="ko-KR" style="/g,
        '<p lang="ko-KR" style="padding-left: 1.5rem;'
      )
      .replace(
        /\t\t\t<p lang="en-US" style="/g,
        '<p lang="en-US" style="padding-left: 1.5rem;'
      )
      .replace(/\t\t\t<p style="/g, '<p style="padding-left: 1.5rem;')
      .replace(/\t\t\t<table style="/g, '<table style="margin: .5rem 1.5rem;')
    return this.getMarkup(htmlTagCovered)
  }

  render() {
    const {
      props: { pageContext },
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
        />
        <div style={inlineStyle.titleArea}>
          <h1 className="text-light">{pageContext.page.title}</h1>
          <div className="text-info">
            <Link
              className="text-info btn"
              to={pageContext.notebook.toLowerCase()}
            >
              <span className="">{pageContext.notebook}</span>
            </Link>
            <span
              className="fas fa-angle-double-right"
              style={inlineStyle.spaceHorizontal}
            />
            <Link
              className="text-info btn"
              to={routing[pageContext.page.parentSection.id]}
            >
              <span className="">{pageContext.section}</span>
            </Link>
          </div>
          <h6 className="text-right">
            {getFormmatedDt(pageContext.page.lastModifiedTime).datetime}
          </h6>
        </div>
        {/* <div
          className="geoseong-page-content"
          dangerouslySetInnerHTML={{
            __html: this.getHtmlTagCovered(pageContext),
          }}
          ref={this.contentRef}
        /> */}
        {this.state.cnt === 0 ? (
          <div
            className="geoseong-page-content"
            dangerouslySetInnerHTML={{
              __html: this.getHtmlTagCovered(pageContext),
            }}
            ref={this.contentRef}
          />
        ) : (
          <div
            className="geoseong-page-content"
            dangerouslySetInnerHTML={{ __html: this.state.bodyTag }}
          />
        )}
        {this.state.cnt === 0 && (
          <Gist
            id="a35eb359793b6b48b222a9a8162c3ba1"
            ref={this.gistRef}
            temphtml={this.temphtml}
          />
        )}
        <div style={inlineStyle.listBtn}>
          <Link to={routing[pageContext.page.parentSection.id]}>
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
