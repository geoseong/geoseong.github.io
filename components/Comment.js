import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Comment() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  
  React.useEffect(() => {
    const commentEle = document.getElementsByClassName(siteConfig.customFields.commentSelector);
    if (commentEle.length === 0) return;
    const utterances = document.createElement('script');
    utterances.setAttribute('src', 'https://utteranc.es/client.js')
    utterances.setAttribute('repo', siteConfig.customFields.ghRepoUtterance);
    utterances.setAttribute('issue-term', 'title');
    utterances.setAttribute('theme', 'boxy-light');
    utterances.setAttribute('crossorigin', 'anonymous');
    utterances.setAttribute('async', true);
    commentEle[0].insertAdjacentElement('afterend', utterances);
  }, []);

  return (
    <>
      <div className={siteConfig.customFields.commentSelector} />
    </>
  );
}

export default Comment;
