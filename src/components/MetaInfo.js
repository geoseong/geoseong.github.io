import React from 'react'
import Helmet from 'react-helmet'

/**
 * @name MetaInfo
 * @param {Object} props 
 * @description <meta>태그 조합해서 내뱉어주는 컴포넌트
 * @example 
    <MetaInfo 
      title="Match Online Manager"
      description="MOM Index Page"
      type="website"
      locationAfterOrigin="/test"
      twittercard="summary"
    />
 * @property {
    title: <title>, og:title, twitter:title
    description: og:description, twitter:description
    type: og:type
    locationAfterOrigin: host url 이후의 routing주소
    twittercard: twitter:card
 }   
 */
const domain = "https://geoseong.github.io/"
const pageTitle = 'Geoseong\'s dev note'
const mainIcon = ''
const MetaInfo = (props) => (
  <React.Fragment>
    <Helmet>
      <title>{props.title + ' : ' + pageTitle}</title>
      {/* open graph */}
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={'http://' + domain + props.locationAfterOrigin} />
      <meta property="og:image" content={mainIcon} />
      {/* twitter card */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content={props.twittercard} />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:url" content={'http://' + domain + props.locationAfterOrigin} />
      {/* description(required) */}
      <meta name="description" content={props.description} />
      {/* canonical */}
      <link rel="canonical" href={'http://' + domain + '/'} />
    </Helmet>
  </React.Fragment>
)
export default MetaInfo