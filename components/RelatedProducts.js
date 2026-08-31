'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/RelatedProducts.scss';

export default function RelatedProducts({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="related_products_container">
      <div className="inner">
        {items.map((item, index) => (
          <div className="related_item" key={index}>
            <Link href={`/product/${item.slug}`}>
              <img
                src={
                  item.file
                    ? `https://hutaib.admin.simboz.website/storage/${item.file}`
                    : '/assets/product.jpg'
                }
                alt={item.title}
                title={item.title}
              />
              <h5>{item.title}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
