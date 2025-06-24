import React, { useEffect } from 'react';

const AdSense = ({ 
  adSlot = "auto", 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = { display: 'block', textAlign: 'center', margin: '20px 0' }
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-4861235624374871"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
};

export default AdSense;
