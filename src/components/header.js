import React, { Component } from 'react'
import { Link } from 'gatsby'
import Fuse from 'fuse.js'

const blogpost = require('../../postings/post_contents.json')
const inlineStyle = {
  relativePosition: {
    position: 'relative'
  },
  searchResultWindow: {
    position: 'absolute',
    right: 0,
    maxWidth: '100vh',
    maxHeight: '50vh',
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

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResult: [],
    }
    this.searchInputDom = null
    this.searchResultDom = null
    this.options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'notebook',
        'section.name',
        'page.title',
        'page.content',
    ]
    };
    this.fuse = new Fuse(blogpost, this.options); // "blogpost" is the item array
  }

  componentDidMount = () => {
    setTimeout(() => {
      if (this.searchInputDom) {
        this.searchResultDom.style.top = this.searchInputDom.scrollHeight + 'px'
      }
    }, 500)
  }
  onFuseSearch = (data) => {
    const searchResult = this.fuse.search(data.target.value)
    const filteredResult = (searchResult.length > 0) && searchResult.filter((ele) => ele.page && ele.type === 'page' )
    const resultHTML = filteredResult.map((ele, idx) => {
      console.log({ele})
      return (
        <Link to={ele.endpoint} key={`searchres-${idx}`}>
          <div style={inlineStyle.searchHeader}>
            {ele.type === 'page' && ele.page && <div className="text-white">{ele.page.title}</div>}
            <div className="text-right" style={inlineStyle.searchHeaderSmall}>
              <span className="">{ele.notebook}</span>
              <span className="fas fa-angle-double-right" style={inlineStyle.spaceHorizontal}></span>
              <span className="">{ele.section}</span>
            </div>
          </div>
          {ele.type === 'page' && ele.page && <div style={inlineStyle.padding}>{ele.page.content.substring(0,150)}</div>}
        </Link>
      )
    })
    // console.log({filteredResult})
    if (searchResult.length > 0) {
      this.setState({
        searchResult: resultHTML
      })
    }
  }
  render() {
    console.log('[render]header props', this.props);
    console.log('[render]header state', this.state);
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark geoseong-header" style={this.props.style.header}>
          <Link className="navbar-brand" to="/">{this.props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div style={inlineStyle.relativePosition}>
                <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.onFuseSearch} ref={e => this.searchInputDom = e} />
                <div style={{...inlineStyle.searchResultWindow}} className="card bg-light" ref={e => this.searchResultDom = e}>
                  {this.state.searchResult}
                </div>
              </div>
            </form>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Header
