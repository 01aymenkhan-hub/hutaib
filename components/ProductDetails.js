'use client';

import React, { useState } from 'react';
import PopupQuoote from './PopupQuoote';
import RelatedProducts from './RelatedProducts';
import useScrollLock from '../lib/ScrollLock';
import '../styles/productContainer.scss';

export default function ProductDetails({ product }) {
  const createMarkup = (content) => {
    return { __html: content };
  };

  const [blockScroll, allowScroll] = useScrollLock();
  const [isOpen, setIsOpen] = useState(false);
  const [sp, setSp] = useState({});

  const miniForm = () => {
    setIsOpen(true);
    setSp(product);
    blockScroll();
  };

  if (!product) return null;

  return (
    <div className="detailcontainer">
      <div className="mainImg">
        <img
          className="whimage"
          src={
            product.file
              ? `https://hutaib.admin.simboz.website/storage/${product.file}`
              : '/assets/product.jpg'
          }
          alt={product.title || ''}
          title={product.title || ''}
        />
      </div>
      <div className="productDetails">
        <p className="heading">{product.title}</p>
        <div dangerouslySetInnerHTML={createMarkup(product.product_desc)}></div>

        <div className="cntr">
          <button onClick={miniForm} className="btn1">
            GET QUOTE
          </button>
        </div>
      </div>
      <div className="dataBtn">
        {product.tds_file ? (
          <a
            className="btn"
            href={`https://hutaib.admin.simboz.website/storage/${product.tds_file}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            TECHNICAL DATASHEET
          </a>
        ) : null}
      </div>
      <div className="productDesc">
        <div dangerouslySetInnerHTML={createMarkup(product.key_features)}></div>
      </div>
      {product.meta_footer ? (
        <div
          dangerouslySetInnerHTML={{ __html: product.meta_footer }}
          className="seodesc2"
        ></div>
      ) : null}
      {/* {product.recc && product.recc.length > 0 ? (
        <>
          <div className="flx">
            <h2>Related Products</h2>
          </div>
          <RelatedProducts items={product.recc} />
        </>
      ) : null} */}

      <PopupQuoote
        open={isOpen}
        allowScroll={allowScroll}
        onClose={() => {
          setIsOpen(false);
        }}
        product={product}
      />
    </div>
  );
}
