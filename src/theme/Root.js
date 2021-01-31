import React from 'react';

// Default implementation, that you can customize
function Root({children}) {
  return <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    {children}
  </>;
}

export default Root;