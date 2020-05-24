import React, { Component } from 'react'

import Fuse from 'fuse.js'
import { Link } from 'gatsby'
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
  },
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResult: [],
    }
    this.fuseoptions = {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['notebook', 'section.name', 'page.title', 'page.content'],
    }
    this.fuse = new Fuse(blogpost, this.fuseoptions) // "blogpost" is the item array
    this.collapseDiv = null
    this.searchInputDom = null
    this.searchResultDom = null
    this.topMenuBtn = {
      blog: null,
      about: null,
    }
    this.mobileMode = false
  }
  componentDidMount = () => {
    // this.detectSize()
    // window.addEventListener('resize', this.detectSize)
    // this.topMenuBtn[this.props.type] &&
    //   this.topMenuBtn[this.props.type].classList.add('active')
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.detectSize)
  }
  detectSize = prop => {
    const resultdom = this.searchResultDom.searchResultDiv
    if (window.innerWidth < 992) {
      this.mobileMode = true
      resultdom.classList.remove('align-desktop')
      resultdom.classList.add('align-mobile')
    } else {
      this.mobileMode = false
      resultdom.classList.add('align-desktop')
      resultdom.classList.remove('align-mobile')
    }
  }
  // onFuseSearch = data => {
  //   let searchResultRaw =
  //     data.target.value.length === 0 ? [] : this.fuse.search(data.target.value)
  //   this.setState({
  //     searchResult: searchResultRaw,
  //   })
  // }
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
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark geoseong-header"
          style={this.props.style.header}
        >
          <Link className="navbar-brand" to="/">
            {this.props.title}
          </Link>

          <button
            className="navbar-toggler"
            id="geoseong-collapse-toggler"
            onClick={this.spreadMenuMobile}
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-controls="collapseExample"
            aria-expanded="false"
            aria-label="메뉴"
          >
            <span
              className="navbar-toggler-icon"
              id="geoseong-collapse-toggler-icon"
            />
          </button>
          <div
            className="collapse navbar-collapse p-2 rounded-bottom"
            id="collapseDiv"
            ref={e => (this.collapseDiv = e)}
          >
            <ul className="navbar-nav mr-auto">
              {/* <li
                id="gs-topmenu-blog"
                className="nav-item"
                ref={e => (this.topMenuBtn.blog = e)}
              >
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </li> */}
              {/* <li
                id="gs-topmenu-about"
                className="nav-item"
                ref={e => (this.topMenuBtn.about = e)}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            {/* <form id="search-form" className="form-inline my-2 my-lg-0">
              <div id="search-form-area" style={inlineStyle.relativePosition}>
                <input
                  id="searchInput"
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  onChange={this.onFuseSearch}
                  ref={e => (this.searchInputDom = e)}
                />
                <SearchResult
                  searchResult={this.state.searchResult}
                  ref={e => (this.searchResultDom = e)}
                />
              </div>
            </form> */}
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Header
