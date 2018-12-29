import React, { Component } from 'react'
import { Link } from 'gatsby'
import Fuse from 'fuse.js'
import SearchResult from './SearchResult'

const blogpost = require('../../postings/post_contents.json')
const inlineStyle = {
  relativePosition: {
    position: 'relative',
    width: '100%',
  },
  padding: {
    padding: '.3em',
  },
  searchInput: {
    width: '70vw',
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResult: [],
    }
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
    this.collapseDiv = null
    this.searchInputDom = null
    this.searchResultDom = null
  }
  componentDidMount = () => {
    // console.log('[componentDidMount]this.props', this.props)
    this.detectSize()
    window.addEventListener("resize", this.detectSize);
    if ( document.querySelector(`#gs-topmenu-${this.props.type}`) ) {
      document.querySelector(`#gs-topmenu-${this.props.type}`).classList.add('active')
    }
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.detectSize);
  }
  detectSize = (prop) => {
    const resultdom = document.querySelector('#geoseong-search-area')
    if (window.innerWidth < 992) {
      resultdom.classList.remove('align-desktop')
      resultdom.classList.add('align-mobile')
    } else {
      resultdom.classList.add('align-desktop')
      resultdom.classList.remove('align-mobile')
    }
  }
  onFuseSearch = (data) => {
    const searchResultRaw = this.fuse.search(data.target.value)
    this.setState({
      searchResult: searchResultRaw
    })
  }
  spreadMenuMobile = () => {
    if (this.collapseDiv.classList.value.indexOf('show') > -1) {
      this.collapseDiv.classList.remove('show')
      this.collapseDiv.classList.remove('geoseong-collapse-menu')
    } else {
      this.collapseDiv.classList.add('show')
      this.collapseDiv.classList.add('geoseong-collapse-menu')
    }
  }
  render() {
    // console.log('Header', this.props)
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark geoseong-header" style={this.props.style.header}>
          <Link className="navbar-brand" to="/">{this.props.title}</Link>

          <button className="navbar-toggler" id="geoseong-collapse-toggler" onClick={this.spreadMenuMobile} type="button" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample" aria-expanded="false" aria-label="메뉴">
            <span className="navbar-toggler-icon" id="geoseong-collapse-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseDiv" ref={e => this.collapseDiv = e}>
            <ul className="navbar-nav mr-auto">
              <li id="gs-topmenu-blog" className="nav-item">
                <Link className="nav-link" to="/">Blog</Link>
              </li>
              <li id="gs-topmenu-about" className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div style={inlineStyle.relativePosition}>
                <input id="searchInput" className="form-control mr-sm-2" type="text" 
                  placeholder="Search" 
                  onChange={this.onFuseSearch} 
                  ref={e => this.searchInputDom = e} />
                <SearchResult searchResult={this.state.searchResult} ref={e => this.searchResultDom = e} />
              </div>
            </form>
          </div>

        </nav>
      </React.Fragment>
    )
  }
}

export default Header
