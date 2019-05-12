import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
const MetaInfo = ({
  description,
  title,
  createdDt,
  modifiedDt,
  locationAfterOrigin,
  twittercard,
  keywords,
  ogImage,
}) => {
  const descriptionLength = 320
  let metaDescDom = []
  let openDescDom = []
  let twitDescDom = []
  if (description && description.length > descriptionLength) {
    const recurCnt = Math.floor(description.length / descriptionLength)
    for (let i = 0; i < recurCnt; i++) {
      metaDescDom.push(
        <meta
          key={'desc-' + i}
          name="description"
          content={description.substring(
            i * descriptionLength,
            i * descriptionLength + descriptionLength
          )}
        />
      )
      openDescDom.push(
        <meta
          key={'ogdesc-' + i}
          name="og:description"
          content={description.substring(
            i * descriptionLength,
            i * descriptionLength + descriptionLength
          )}
        />
      )
      twitDescDom.push(
        <meta
          key={'twitdesc-' + i}
          name="twitter:description"
          content={description.substring(
            i * descriptionLength,
            i * descriptionLength + descriptionLength
          )}
        />
      )
    }
  }
  const query = graphql`
    query SEO2 {
      site {
        siteMetadata {
          defaultTitle: title
          siteUrl: siteUrl
          defaultImage: image
        }
      }
    }
  `
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            siteUrl,
            defaultImage,
            twitterUsername,
          },
        },
      }) => {
        const defaultOgImage = `${siteUrl}/${defaultImage}`
        return (
          <Helmet>
            <title>{title + ' : ' + defaultTitle}</title>
            {/* Last Modified */}
            <meta name="article:author" content={'geoseong'} />
            <meta name="article:published_time" content={createdDt} />
            <meta name="article:modified_time" content={modifiedDt} />
            <meta name="date" content={modifiedDt} />
            <meta name="last-modified" content={modifiedDt} />
            <meta httpEquiv="last-modified" content={modifiedDt} />
            {/* open graph */}
            <meta property="og:title" content={title} />
            {/* og:description */}
            {openDescDom}
            <meta
              property="og:url"
              content={`${siteUrl}/${locationAfterOrigin}/`}
            />
            <meta property="og:image" content={ogImage || defaultOgImage} />
            {/* twitter card */}
            <meta name="twitter:title" content={title} />
            {/* twitter:description */}
            {twitDescDom}
            <meta name="twitter:card" content={twittercard} />
            <meta name="twitter:domain" content={siteUrl} />
            <meta
              name="twitter:url"
              content={`${siteUrl}/${locationAfterOrigin}/`}
            />
            {/* description(required) */}
            {metaDescDom}
            {/* keyword */}
            <meta name="keywords" content={keywords} />
            {/* canonical */}
            <link rel="canonical" href={siteUrl + '/'} />
          </Helmet>
        )
      }}
    />
  )
}
export default MetaInfo
