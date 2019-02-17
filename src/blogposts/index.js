import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import routing from '../../postings/routings.json'

const inlineStyle = {
  alignRight: {
    textAlign: 'right',
  },
  badgeHorizontal: {
    margin: '0 .5rem',
    padding: '.3rem 1rem',
  },
  moreBtnArea: {
    marginTop: '.5rem',
  },
  spaceHorizontal: {
    margin: '0 .5rem',
  },
}

class IndexPage extends Component {
  render() {
    const {
      props: { pageContext },
    } = this

    return (
      <Layout type="blog">
        <div>
          <h3>Categories</h3>
          {pageContext.notebookList &&
            pageContext.notebookList.map((item, idx) => {
              const maxItemCnt = 5
              const sections = item.section.map((section, sectionIdx) => {
                if (sectionIdx === maxItemCnt) {
                  return (
                    <span
                      key={'section-span' + sectionIdx}
                      style={inlineStyle.spaceHorizontal}
                    >
                      ...
                    </span>
                  )
                } else if (sectionIdx < maxItemCnt) {
                  return (
                    <Link
                      key={'section-' + sectionIdx}
                      className=""
                      to={routing[section.id]}
                    >
                      <span
                        key={'section-preview-' + sectionIdx}
                        className="badge geoseong-badge"
                        style={inlineStyle.badgeHorizontal}
                      >
                        {section.name}
                      </span>
                    </Link>
                  )
                }
              })
              return (
                <div key={'notebook-' + idx} className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link className="card-link text-light" to={item.endpoint}>
                        {item.notebook}
                      </Link>
                    </h4>
                    <div>{sections}</div>
                    <div
                      style={{
                        ...inlineStyle.alignRight,
                        ...inlineStyle.moreBtnArea,
                      }}
                    >
                      <Link className="card-link" to={item.endpoint}>
                        More...
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
