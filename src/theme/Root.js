import React from 'react';

function Root({ children }) {
  return (
    <>
      {/* Google Adsense */}
      <script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      ></script>
      {children}
    </>
  );
}

export default Root;
