import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
// import routing from '../../postings/routings.json' // prod
import routing from '../../postings/routings_debug.json' // debug
import { getFormmatedDt } from '../../util/convert'
import MetaInfo from '../components/MetaInfo'

const inlineStyle = {
  alignRight: {
    textAlign: 'right',
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
  },
  alignDomCenter: {
    margin: '1em 0',
    display: 'flex',
    justifyContent: 'center',
  },
}

class IndexPage extends Component {
  render() {
    const {
      props: { pageContext },
    } = this
    // console.log('pageContext:', pageContext)
    return (
      <Layout type="blog">
        <MetaInfo
          title={pageContext.section.name}
          type="website"
          locationAfterOrigin={routing[pageContext.section.id]}
          twittercard="summary"
          keywords={`${pageContext.notebook},${
            pageContext.section.name
          },geoseong,dev note`}
        />
        <React.Fragment>
          <Link to={pageContext.notebook.toLowerCase()}>
            <h5 className="">{pageContext.notebook}</h5>
          </Link>
          <h1 className="text-light">{pageContext.section.name}</h1>
          {pageContext.page.length > 0 &&
            pageContext.page.map((item, idx) => {
              return (
                <div key={'section-' + idx} style={inlineStyle.listItem}>
                  <Link className="card-link" to={routing[item.id]}>
                    <div className="">
                      <h4 className="">{item.title}</h4>
                      <h6 className="text-right">
                        {getFormmatedDt(item.lastModifiedTime).datetime}
                      </h6>
                    </div>
                    <div
                      className="geoseong-more-txt"
                      style={{
                        ...inlineStyle.alignRight,
                        ...inlineStyle.moreBtnArea,
                      }}
                    >
                      More...
                    </div>
                  </Link>
                </div>
              )
            })}
          {/* <div style={inlineStyle.alignDomCenter}>
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#">&laquo;</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
              </li>
            </ul>
          </div> */}
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage
