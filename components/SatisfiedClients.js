import React from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import '../styles/SatisfiedClients.scss';

export default function SatisfiedClients() {
  return (
    <div className="SatisfiedClients">
      <div className="supplementaryHeader">
        <div className="imageContainer">
          <img src="/assets/images/about.webp" alt="About Hutaib" />
        </div>
        <div className="contentContainer">
          <div className="miniTitle">
            <img src="/assets/images/gear.svg" alt="Gear Icon" /> <p> ABOUT US</p>
          </div>
          <p className="title">
            Leading the Way in <span> Quality and Innovation</span>
          </p>
          <p className="description">
            At our core, we strive to deliver high-quality products through state-of-the-art technology and innovative solutions.
          </p>
          <div className="twoColsection">
            <div className="listContainer">
              <span>
                <img src="/assets/images/setting.svg" alt="" /> Efficient Production Processes
              </span>
              <span>
                <img src="/assets/images/setting.svg" alt="" /> Technological Innovation
              </span>
              <span>
                <img src="/assets/images/setting.svg" alt="" /> Customized Solutions
              </span>
              <span>
                <img src="/assets/images/setting.svg" alt="" /> Customer-Centric Approach
              </span>
              <Link href="/about" className="btn">
                Learn More
              </Link>
            </div>
            <div className="ratingCont">
              <p className="rating">4.9</p>
              <span className="starRating">
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
                <FaStar className="starIcon" />
              </span>
              <p className="genuine">15.5K Genuine Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
