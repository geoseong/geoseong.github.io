import React, { Component } from 'react'
import { Link } from 'gatsby'
import cheerio from 'cheerio'

import Layout from '../components/layout'
// import Image from '../components/image'

class IndexPage extends Component {
  render() {
    // console.log('pageContext:', this.props.pageContext);
    /* OneNote 페이지의 전체 DOM */
    const $ = cheerio.load(this.props.pageContext.data);
    /* OneNote 페이지의 이름 추출 */
    const cheerTitle = $('title').text();
    /* OneNote 페이지의 생성날짜 */
    const createdDt = $('head').find('meta[name="created"]').attr('content');
    /* body 태그 */
    const bodyTag = $('body');
    /* a태그는 target="_blank" attr을 부여하기 */
    bodyTag.find('a').attr('target', '_blank');
    /* body 태그 바로 밑의 div의 스타일 attr 없애기 */
    bodyTag.children('div').removeAttr('style');
    return (
      <Layout type="blog">
        <h1>{cheerTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: bodyTag}} />
      </Layout>
    )
  }
}

export default IndexPage
