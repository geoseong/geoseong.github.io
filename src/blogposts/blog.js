import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = ({ pageContext }) => {
  console.log('pageContext:', pageContext)
  return (
    <Layout type="blog">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <div>{pageContext.data}</div>
    </Layout>
  )
}

export default IndexPage
