import React, { useState } from 'react'
import './css/ProductsBanner.scss';
import SearchField from './SearchField';

function ProductsBanner({ isSearch = false, data }) {

  let customurl = data.split('-').join(' ')

  return (
    <div className='ProductsBanner'>
      <img className='dynamicbanner' src={window.screen.width > 900 ? '/assets/images/products_banner.png' : '/assets/images/products_tbanner.png'} alt={customurl} title={customurl} />
      {!isSearch &&
        <div className='banner_inner'>
          <SearchField />
        </div>
      }

    </div>
  )
}

export default ProductsBanner