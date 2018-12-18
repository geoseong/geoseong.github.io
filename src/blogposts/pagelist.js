import React, { Component } from 'react'
import { Link } from 'gatsby'
import cheerio from 'cheerio'
import Layout from '../components/layout'
import { getFormmatedDt } from '../../util/convert'

const inlineStyle = {
  titleArea: {
    marginBottom: '2rem',
  },
  spaceHorizontal: {
    margin: '0 .5rem',
  },
}
class IndexPage extends Component {
  render() {
    const { props: {pageContext} } = this
    console.log('pageContext:', pageContext)

    /* OneNote 페이지의 전체 DOM */
    const $ = cheerio.load(pageContext.page.html);
    /* body 태그 */
    const bodyTag = $('body');
    /* a태그는 target="_blank" attr을 부여하기 */
    bodyTag.find('a').attr('target', '_blank');
    /* body 태그 바로 밑의 div의 스타일 attr 없애기 */
    bodyTag.children('div').removeAttr('style');

    return (
      <Layout>
        {/* <h5 className="">{pageContext.notebook}</h5>
        <h6 className="">{pageContext.section}</h6> */}
        <div style={inlineStyle.titleArea}>
          <h3 className="text-light">{pageContext.page.title}</h3>
          <div className="text-info">
            <Link className="text-info" to={pageContext.notebook.toLowerCase()}><span className="">{pageContext.notebook}</span></Link>
            <span className="fas fa-angle-double-right" style={inlineStyle.spaceHorizontal}></span>
            <span className="">{pageContext.section}</span>
          </div>
          <h6 className="text-right">{getFormmatedDt(pageContext.page.lastModifiedTime).datetime}</h6>
        </div>
        <div className="geoseong-page-content" dangerouslySetInnerHTML={{__html: bodyTag}} />
      </Layout>
    )
  }
}

export default IndexPage
