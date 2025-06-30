import React, { useEffect } from 'react';

const AdSenseComponent = ({ adId }) => {
  useEffect(() => {
    // AdSense 스크립트 실행
    if (typeof window !== 'undefined') {
      const adElement = document.getElementById(adId);
      if (adElement && !adElement.hasAttribute('data-adsbygoogle-status')) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          console.log(`AdSense ad ${adId} loaded`);
        } catch (e) {
          console.error(`AdSense error for ${adId}:`, e);
        }
      }
    }
  }, [adId]);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', minHeight: '250px' }}>
      <ins 
        id={adId}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.DATA_AD_CLIENT || "ca-pub-4861235624374871"}
        data-ad-slot={process.env.AD_SLOT || "4257032916"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseComponent;
