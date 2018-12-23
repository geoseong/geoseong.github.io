import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import routing from '../../postings/routings.json'

const inlineStyle = {
  alignRight: {
    textAlign: 'right'
  },
  badgeHorizontal: {
    margin: '0 .5rem',
    padding: '.3rem 1rem',
  },
  moreBtnArea: {
    marginTop: '.5rem'
  },
  spaceHorizontal: {
    margin: '0 .5rem',
  }
}

class IndexPage extends Component {
  render() {
    const { props: {pageContext} } = this
    console.log('pageContext:', pageContext)
    
    return (
      <Layout type="blog">
        <div>
          <h3>Categories</h3>
          {
            pageContext.notebookList && pageContext.notebookList.map((item, idx) => {
              const maxItemCnt = 5
              const sections = item.section.map((section, sectionIdx) => {
                console.log('index', section)
                if (sectionIdx === maxItemCnt) {
                  return (<span style={inlineStyle.spaceHorizontal}>...</span>)
                } else if (sectionIdx < maxItemCnt) {
                  return (
                    <Link className="" to={routing[section.id]}>
                      <span key={'section-preview-'+sectionIdx} className="badge geoseong-badge" style={inlineStyle.badgeHorizontal}>{section.name}</span>
                    </Link>
                  )
                }
              })
              return (
                <div key={'notebook-'+idx} className="card">
                  <div className="card-body">
                    <h4 className="card-title"><Link className="card-link text-light" to={item.endpoint}>{item.notebook}</Link></h4>
                    <div>{sections}</div>
                    <div style={{...inlineStyle.alignRight, ...inlineStyle.moreBtnArea}}>
                      <Link className="card-link" to={item.endpoint}>More...</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* <div className="card">
            <div className="card-body">
              <h4 className="card-title">{pageContext.}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div style={inlineStyle.alignRight}>
                <a href="#" className="card-link">More...</a>
              </div>
            </div>
          </div> */}
          {/* <table className="table table-hover">
            <tbody>
              <tr className="table-primary">
                <th scope="row">Primary</th>
                <td style={inlineStyle.alignRight}><span className="badge badge-primary badge-pill">14</span></td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">Secondary</th>
                <td style={inlineStyle.alignRight}><span className="badge badge-primary badge-pill">14</span></td>
              </tr>
            </tbody>
          </table>  */}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
