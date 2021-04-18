import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const getDigit = (count) => {
  return Number(count) < 10 ? '0' + count : count;
}

//
// refer to:
// - https://schema.org/datePublished
// - https://schema.org/dateCreated
// - https://schema.org/dateModified
// - https://developer.mozilla.org/ko/docs/Web/HTML/Element/time
//
function PostingDate(props) {
  const { created, modified } = props;
  const createdDt = new Date(created);
  const modifiedDt = new Date(modified);

  const context = useDocusaurusContext();
  const {
    siteConfig: { organizationName },
  } = context;

  const datePublished = `${createdDt.getFullYear()}-${getDigit(createdDt.getMonth() + 1)}-${getDigit(createdDt.getDate())}`;
  const dateModified = `${modifiedDt.getFullYear()}-${getDigit(modifiedDt.getMonth() + 1)}-${getDigit(modifiedDt.getDate())}`;

  return (
    <>
      {/* Last Modified */}
      {/*
      <meta name="article:author" content={organizationName} />
      <meta name="article:published_time" content={createdDt} />
      <meta name="article:modified_time" content={modifiedDt} />
      <meta name="date" content={modifiedDt} />
      <meta name="last-modified" content={modifiedDt} />
      <meta httpEquiv="last-modified" content={modifiedDt} />
      */}
      <div className='row'>
        <div className='col text--right text--italic'>
          <span>{`Created on `}</span>
          <time itemProp={'datePublished'} dateTime={createdDt.toISOString()} className='text--bold'>
            {datePublished}
          </time>
          <span>{` / Last updated on `}</span>
          <time itemProp={'dateModified'} dateTime={modifiedDt.toISOString()} className='text--bold'>
            {dateModified}
          </time>
          {/* <em>
            <small>
            </small>
          </em> */}
        </div>
      </div>
    </>
  );
}

export default PostingDate;
