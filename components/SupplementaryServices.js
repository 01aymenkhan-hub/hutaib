'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EmblaSlider from './EmblaSlider';
import '../styles/SupplementaryServices.scss';

export default function SupplementaryServices({ data }) {
  const router = useRouter();

  const handleSubcategoryClick = (item) => {
    if (item.slug) {
      router.push(`/product-category/${item.slug}`);
    }
  };

  const createMarkup = (content) => {
    return { __html: content };
  };

  return (
    <div className="supplementaryServices">
      <div className="supplementaryInnerWrapper">
        <div
          className={data.desc ? 'supplementaryHeader' : 'supplementaryHeader ctxt'}
          style={{ gridTemplateColumns: data.desc ? 'auto 1fr' : '1fr' }}
        >
          <div
            className={data.desc ? 'supplementaryMegaTitle' : 'supplementaryMegaTitle ctxt'}
            style={{ textAlign: data.desc ? 'left' : 'center' }}
            dangerouslySetInnerHTML={createMarkup(data.title)}
          />
          {data.desc ? <p className="supplementaryMegaContent"> {data.desc} </p> : null}
        </div>

        {/* Desktop View */}
        <div className="supplementaryCradWrapper showOnDesktop">
          {data.mapItem.map((item, index) => {
            return (
              <div
                onClick={() => handleSubcategoryClick(item)}
                className="supplementaryCradItem"
                key={index}
              >
                {item.localImage ? (
                  <img src={item.localImage} alt={item.title || ''} />
                ) : (
                  <img
                    src={`https://hutaib.admin.simboz.website/public/storage/${item.image}`}
                    alt={item.title || ''}
                  />
                )}

                <div className="contentOverlay">
                  <p className="contentOverlayTitle"> {item.name || item.title} </p>
                  <p className="contentOverlayDesc">{item.description}</p>
                  <p>View Project </p>
                </div>
                <p className="AbsTitle">{item.title}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile View with EmblaSlider */}
        <div className="supplementaryCradWrapper showOnMobile">
          <EmblaSlider delay={3000}>
            {data.mapItem.map((item, index) => {
              return (
                <div
                  onClick={() => handleSubcategoryClick(item)}
                  className="supplementaryCradItem"
                  key={index}
                  style={{ width: '85vw', height: '270px', margin: '5px 10px' }}
                >
                  <img src={item.localImage} alt={item.title || ''} />
                  <div className="contentOverlay">
                    <p className="contentOverlayTitle"> {item.title} </p>
                    <p className="contentOverlayDesc">{item.description}</p>
                    <p>View Project </p>
                  </div>
                  <p className="AbsTitle">{item.title}</p>
                </div>
              );
            })}
          </EmblaSlider>
        </div>
      </div>
    </div>
  );
}
