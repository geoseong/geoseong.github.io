import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const getDigit = (count) => {
  return Number(count) < 10 ? '0' + count : count;
}

function PostingDate(props) {
  const { created, modified } = props;
  const createdDt = new Date(created);
  const modifiedDt = new Date(modified);

  const context = useDocusaurusContext();
  const {
    siteConfig: { organizationName },
  } = context;

  return (
    <>
      {/* Last Modified */}
      <meta name="article:author" content={organizationName} />
      <meta name="article:published_time" content={createdDt} />
      <meta name="article:modified_time" content={modifiedDt} />
      <meta name="date" content={modifiedDt} />
      <meta name="last-modified" content={modifiedDt} />
      <meta httpEquiv="last-modified" content={modifiedDt} />
      <div className='row'>
        <div className='col text--right'>
          <em>
            <small>
              {`Created on `}
              <time dateTime={createdDt} className='text--bold'>
                {createdDt.getFullYear()}. {getDigit(createdDt.getMonth() + 1)}. {getDigit(createdDt.getDate())}.
              </time>
              {` / Last updated on `}
              <time dateTime={modifiedDt} className='text--bold'>
                {modifiedDt.getFullYear()}. {getDigit(modifiedDt.getMonth() + 1)}. {getDigit(modifiedDt.getDate())}.
              </time>
            </small>
          </em>
        </div>
      </div>
    </>
  );
}

export default PostingDate;
