import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import routing from '../../postings/routings.json'
import { getFormmatedDt } from '../../util/convert'

const inlineStyle = {
  alignRight: {
    textAlign: 'right'
  },
  marginHorizontal: {
    margin: '0 .5rem',
    padding: '.3rem 1rem',
  },
  moreBtnArea: {
    marginTop: '.5rem',
  },
  listItem: {
    marginTop: '1rem',
    padding: '1rem',
    borderBottom: '1px solid #073642',
  }
}

class IndexPage extends Component {
  render() {
    const { props: {pageContext} } = this
    console.log('pageContext:', pageContext)
    return (
      <Layout>
        <React.Fragment>
          <h5 className="">{pageContext.notebook}</h5>
          <h2 className="text-light">{pageContext.section.name}</h2>
          {
            pageContext.page.length>0 && pageContext.page.map((item, idx) => {
              return (
                <div key={'section-'+idx} style={inlineStyle.listItem}>
                  <Link className="card-link" to={routing[item.id]}>
                    <div className="">
                      <h4 className="">{item.title}</h4>
                      <h6 className="text-right">{getFormmatedDt(item.lastModifiedTime).datetime}</h6>
                    </div>
                    <div className="geoseong-more-txt" style={{...inlineStyle.alignRight, ...inlineStyle.moreBtnArea}}>
                      More...
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage
