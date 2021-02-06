import AnnouncementBar from '@theme/AnnouncementBar';
import Footer from '@theme/Footer';
import LayoutHead from '@theme/LayoutHead';
import LayoutProviders from '@theme/LayoutProviders';
import Navbar from '@theme/Navbar';
import React from 'react';
import SkipToContent from '@theme/SkipToContent';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Layout(props) {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  const { children, noFooter, wrapperClassName } = props;

  // React.useEffect(() => {
  //   const commentEle = document.getElementsByClassName(siteConfig.customFields.commentSelector);
  //   console.log('Layout', commentEle.length);

  //   if (commentEle.length === 0) return;
  //   // commentEle[0].insertAdjacentHTML('afterend', utteranceHtml);

  //   const utterances = document.createElement('script');
  //   utterances.setAttribute('src', 'https://utteranc.es/client.js')
  //   utterances.setAttribute('repo', siteConfig.customFields.ghRepoUtterance);
  //   utterances.setAttribute('issue-term', 'title');
  //   utterances.setAttribute('theme', 'boxy-light');
  //   utterances.setAttribute('crossorigin', 'anonymous');
  //   utterances.setAttribute('async', true);
  //   commentEle[0].insertAdjacentElement('afterend', utterances);
  // }, []);

  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      {/* main */}
      <div className={clsx('main-wrapper', wrapperClassName)}>
        {children}
      </div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}

export default Layout;
