import React from 'react';
import '../styles/CustomBanner.scss';

export default function CustomBanner() {
  return (
    <div className="customBanner">
      <img src="/assets/images/hutaib-banner.webp" alt="Hutaib Banner Desktop" className="desktopImage" />
      <img src="/assets/images/mobilebanner.webp" alt="Hutaib Banner Mobile" className="mobileImage" />
      <div className="absText">
        <p className="text">
          Pakistan&apos;s Leading Textile & <span> Construction Chemicals Manufacturer & Supplier</span>
        </p>
      </div>
    </div>
  );
}
