import React, { Component } from 'react'
import { Link } from 'gatsby'
import cheerio from 'cheerio'

import Layout from '../components/layout'
import routing from '../../postings/routings.json'

class IndexPage extends Component {
  render() {
    const { props: {pageContext} } = this
    console.log('pageContext:', pageContext);
    return (
      <Layout>
        <React.Fragment>
          <h2>{pageContext.section.name}</h2>
          {
            pageContext.page.length>0 && pageContext.page.map((data, idx) => {
              /* Routing Table object에서 data.id를 key로 한 endpoint를 가져다 써야할 듯 */
              return (
                <div key={idx}><Link to={routing[data.id]}>{data.title}</Link></div>
              )
            })
          }
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage
