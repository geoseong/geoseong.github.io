import React from 'react';

function Root({ children }) {
  return (
    <>
      {/* Google Adsense */}
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4861235624374871'
        crossOrigin="anonymous"
      ></script>
      {children}
    </>
  );
}

export default Root;
