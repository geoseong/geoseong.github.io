import React, { Component } from 'react'
import { Link } from 'gatsby'

const inlineStyle = {
  relativePosition: {
    position: 'relative',
  },
  searchResultWindow: {
    position: 'absolute',
    maxHeight: '70vh',
    overflow: 'scroll',
  },
  searchHeader: {
    backgroundColor: '#073642',
    padding: '.3em',
  },
  searchHeaderSmall: {
    fontSize: '.5em',
  },
  padding: {
    padding: '.3em',
  },
}

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.searchResultDiv = null
  }

  componentDidMount = () => {
    /*  */
  }

  fuseSearchResult = ({ searchResult }) => {
    if (searchResult.length === 0) {
      if (this.searchResultDiv) {
        this.searchResultDiv.classList.remove('border-light')
      }
      return <div className="geoseong-hide" />
    }
    const filteredResult =
      searchResult.length > 0 &&
      searchResult.filter(ele => ele.page && ele.type === 'page')
    return filteredResult.map((ele, idx) => {
      this.searchResultDiv.classList.add('border-light')
      return (
        <Link
          to={ele.endpoint}
          key={`searchres-${idx}`}
          className="badge-light"
        >
          <div
            style={inlineStyle.searchHeader}
            className="geoseong-search-result"
          >
            {ele.type === 'page' && ele.page && (
              <div className="text-white geoseong-search-result">
                {ele.page.title}
              </div>
            )}
            <div
              className="text-right text-info geoseong-search-result"
              style={inlineStyle.searchHeaderSmall}
            >
              <span className="geoseong-search-result">{ele.notebook}</span>
              <span
                className="fas fa-angle-double-right geoseong-search-result"
                style={inlineStyle.spaceHorizontal}
              />
              <span className="geoseong-search-result">{ele.section}</span>
            </div>
          </div>
          {ele.type === 'page' && ele.page && (
            <div style={inlineStyle.padding} className="geoseong-search-result">
              {ele.page.content.length > 150
                ? ele.page.content.substring(0, 150) + '...'
                : ele.page.content}
            </div>
          )}
        </Link>
      )
    })
  }
  render() {
    let FuseSearchResult = this.fuseSearchResult
    return (
      <div
        id="geoseong-search-area"
        style={{ ...inlineStyle.searchResultWindow }}
        className="card bg-light"
        ref={e => (this.searchResultDiv = e)}
      >
        <FuseSearchResult searchResult={this.props.searchResult} />
      </div>
    )
  }
}
