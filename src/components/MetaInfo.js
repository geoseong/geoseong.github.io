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
      keyword="key,word"
    />
 * @property {
    title: <title>, og:title, twitter:title
    description: og:description, twitter:description
    type: og:type
    locationAfterOrigin: host url 이후의 routing주소
    twittercard: twitter:card
    keyword: 
 }   
 */
const domain = "https://geoseong.github.io/"
const pageTitle = 'Geoseong\'s dev note'
const mainIcon = ''
const MetaInfo = (props) => {
  console.log('MetaInfo props', props)
  const descriptionLength = 320
  let metaDescDom = []
  let openDescDom = []
  let twitDescDom = []
  if (props.description && props.description.length > descriptionLength) {
    const recurCnt = Math.floor(props.description.length / descriptionLength)
    for(let i=0; i<recurCnt; i++) {
      metaDescDom.push(<meta name="description" content={props.description.substring(i*descriptionLength, i*descriptionLength + descriptionLength)} />)
      openDescDom.push(<meta name="og:description" content={props.description.substring(i*descriptionLength, i*descriptionLength + descriptionLength)} />)
      twitDescDom.push(<meta name="twitter:description" content={props.description.substring(i*descriptionLength, i*descriptionLength + descriptionLength)} />)
    }
  }
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.title + ' : ' + pageTitle}</title>
        {/* open graph */}
        <meta property="og:title" content={props.title} />
        {/* <meta property="og:description" content={props.description} /> */}
        {openDescDom}
        <meta property="og:url" content={domain + props.locationAfterOrigin} />
        <meta property="og:image" content={mainIcon} />
        {/* twitter card */}
        <meta name="twitter:title" content={props.title} />
        {/* <meta name="twitter:description" content={props.description} /> */}
        {twitDescDom}
        <meta name="twitter:card" content={props.twittercard} />
        <meta name="twitter:domain" content={domain} />
        <meta name="twitter:url" content={domain + props.locationAfterOrigin} />
        {/* description(required) */}
        {/* <meta name="description" content={props.description} /> */}
        {metaDescDom}
        {/* keyword */}
        <meta name="keywords" content={props.keywords} />
        {/* canonical */}
        <link rel="canonical" href={domain + '/'} />
      </Helmet>
    </React.Fragment>
  )
}
export default MetaInfo