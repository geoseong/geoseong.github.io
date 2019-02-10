import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import routing from '../../postings/routings.json'
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
          title={pageContext.notebook}
          type="website"
          locationAfterOrigin={pageContext.notebook.toLowerCase()}
          twittercard="summary"
          keywords={`${pageContext.notebook},geoseong,dev note`}
        />
        <React.Fragment>
          <h1 className="text-light">{pageContext.notebook}</h1>
          {pageContext.section.length > 0 &&
            pageContext.section.map((item, idx) => {
              return (
                <div key={'section-' + idx} style={inlineStyle.listItem}>
                  <Link className="card-link" to={routing[item.id]}>
                    <div className="">
                      <h4 className="">{item.name}</h4>
                      <div
                        style={{
                          ...inlineStyle.alignRight,
                          ...inlineStyle.moreBtnArea,
                        }}
                      >
                        More...
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage
