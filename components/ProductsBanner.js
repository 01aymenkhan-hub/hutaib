'use client';

import React from 'react';
import SearchField from './SearchField';
import '../styles/ProductsBanner.scss';

export default function ProductsBanner({ isSearch = false, data }) {
  const customurl = data ? data.split('-').join(' ') : '';

  return (
    <div className="ProductsBanner">
      <img
        className="dynamicbanner"
        src="/assets/images/products_banner.png"
        alt={customurl}
        title={customurl}
      />
      {!isSearch && (
        <div className="banner_inner">
          <SearchField />
        </div>
      )}
    </div>
  );
}
