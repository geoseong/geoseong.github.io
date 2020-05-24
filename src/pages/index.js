import Layout from '../components/Layout'
import MetaInfo from '../components/MetaInfo'
import React from 'react'

const inlineStyle = {
  wrapper: {
    height: '100vh',
    top: 0,
    left: 0,
  },
  titleContentSize: {
    height: '2rem',
  },
  space: {
    margin: '0 .5em',
  },
}
const Index = () => (
  <Layout>
    <MetaInfo
      title={`Coming soon: geoseong's dev note`}
      description="Full Stack Web Developer Interested in DevOps, new cool things about programming DELL Technical Supporter, IT Operation Helpdesk Staff for 4 years Started as Developer in 2016 learning Java/Spring"
      type="website"
      locationAfterOrigin=""
      twittercard="summary"
      keywords={`geoseong, geoseong's dev note`}
    />
    <div
      className="align-items-center d-flex h-100 justify-content-center w-100 position-absolute"
      style={inlineStyle.wrapper}
    >
      <h1 className="">Coming Soon...</h1>
    </div>
  </Layout>
)

export default Index
