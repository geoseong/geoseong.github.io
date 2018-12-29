import React, { Component } from 'react'
import { Link } from 'gatsby'

const inlineStyle = {
  relativePosition: {
    position: 'relative'
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
  }
}

export default class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.searchResultDom = null
  }

  componentDidMount = () => {
    // setTimeout(() => {
    //   this.searchResultDom.style.top = document.querySelector('input#searchInput').scrollHeight + 'px'
    // }, 500);
  }

  fuseSearchResult = (searchResult) => {
    // console.log({searchResult})
    if (searchResult.length === 0) {
      if ( this.searchResultDom ) {
        this.searchResultDom.classList.remove('border-light')
      }
      return (<div></div>)
    }
    // console.log('fuseSearchResult after', searchResult)
    const filteredResult = (searchResult.length > 0) && searchResult.filter((ele) => ele.page && ele.type === 'page' )
    return filteredResult.map((ele, idx) => {
      this.searchResultDom.classList.add('border-light')
      return (
        <Link to={ele.endpoint} key={`searchres-${idx}`} className="badge-light">
          <div style={inlineStyle.searchHeader}>
            {ele.type === 'page' && ele.page && <div className="text-white">{ele.page.title}</div>}
            <div className="text-right text-info" style={inlineStyle.searchHeaderSmall}>
              <span className="">{ele.notebook}</span>
              <span className="fas fa-angle-double-right" style={inlineStyle.spaceHorizontal}></span>
              <span className="">{ele.section}</span>
            </div>
          </div>
          {ele.type === 'page' && ele.page && <div style={inlineStyle.padding}>{(ele.page.content.length > 150) ? ele.page.content.substring(0,150)+'...': ele.page.content}</div>}
        </Link>
      )
    })
  }
  render() {
    return (
      <div id="geoseong-search-area" style={{...inlineStyle.searchResultWindow}} className="card bg-light" ref={e => this.searchResultDom = e} >
        {this.fuseSearchResult(this.props.searchResult)}
      </div>
    )
  }
}
