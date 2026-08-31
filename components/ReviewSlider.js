'use client';

import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import EmblaSlider from './EmblaSlider';
import '../styles/ReviewSlider.scss';

export default function ReviewSlider() {
  const industries_array = [
    {
      review:
        'We’ve been using Hutaib’s textile chemicals for years, and the results are always excellent. Our fabrics feel softer, last longer, and have better color retention. Great quality!',
      title: 'Textile Operator',
      name: 'Matloob Ahmed',
    },
    {
      review:
        "Hutaib's construction chemicals made our building projects much easier. The epoxy and other products have helped us improve both quality and durability.",
      title: 'Builder',
      name: 'AbdulRehman',
    },
    {
      review:
        'Hutaib’s surfactants are top-notch. They have improved the quality of our products greatly. Great customer service and timely delivery as well!',
      title: 'Chemical Supplier',
      name: 'Ali-Bin-Saeed',
    },
    {
      review:
        'The silicone fluid provided by Hutaib has really improved the finish and feel of our textiles. It’s a product we can always count on.',
      title: 'Textile Manufacturer',
      name: 'Muhammad Ashir',
    },
    {
      review:
        'We’ve been very happy with the Momentive Amino Functional Fluid from Hutaib. It has worked wonders on our textile processes, making them smoother and more efficient.',
      title: 'Textile Factory Owner',
      name: 'Chaudary Taimoor',
    },
    {
      review:
        'I recently used Hutaib’s polydimethylsiloxane for a product, and the results were fantastic. It gave my work the professional finish I needed. Highly recommend!',
      title: 'Industrial Supplier',
      name: 'Muhammad Yousuf',
    },
  ];

  return (
    <div className="ReviewSliderWrapper">
      <div className="reviewInner">
        <div className="inner">
          <div className="contentContainer">
            <p className="title">Feedback from Our Customers</p>
            <p className="description">
              Read on to see how our reliable products have helped businesses across Pakistan succeed.
            </p>
          </div>

          <div className="reviewSlider">
            <EmblaSlider delay={3500}>
              {industries_array.map((ind, key2) => (
                <div
                  className="industry_slide"
                  style={{ width: '400px',  flexShrink: 0, margin: '5px 10px', padding: '0 15px' }}
                  key={key2}
                >
                  <div className="reviewCont">
                    <FaQuoteLeft className="icon leftIcon" />
                    <p>{ind.review}</p>
                    <FaQuoteRight className="icon rightIcon" />
                  </div>
                  <div className="userInfo">
                    <p className="userName">{ind.name}</p>
                    <p className="userPosition">{ind.title}</p>
                  </div>
                </div>
              ))}
            </EmblaSlider>
          </div>
        </div>
      </div>
    </div>
  );
}
