'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/ProductBox.scss';

export default function ProductBox({ item, GoDetail, miniForm, ToggleRead, read }) {
  const createMarkup = (pro) => {
    return { __html: pro };
  };

  const description = item?.description || item?.product_desc || '';

  return (
    <div className="product_box" key={item?.id}>
      <div className="inner">
      

        <Link href={`/product/${item?.slug}`} onClick={GoDetail}>
          <h3>{item?.title}</h3>
        </Link>

        {description ? (
          <div className="desc">
            <div
              dangerouslySetInnerHTML={
                read === item?.id
                  ? createMarkup(description)
                  : createMarkup(description.substring(0, 230))
              }
            ></div>
            {description !== '' && description.length > 230 && (
              <span
                className={`${read === item?.id ? 'read_less' : ''}`}
                onClick={ToggleRead}
              >
                {read === item?.id ? 'Read Less' : 'Read More'}
              </span>
            )}
          </div>
        ) : null}

        <div className="button_box">
          <button type="button" onClick={miniForm}>
            Get Quote
          </button>
          
        </div>
      </div>
    </div>
  );
}
