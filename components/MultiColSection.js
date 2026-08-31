import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import '../styles/MultiColSection.scss';

export default function MultiColSection() {
  return (
    <div className="MultiColSectionContainer">
      <div className="imageContainer">
        <img src="/assets/images/project.webp" alt="Why We Excel" />
      </div>
      <div className="contentContainer">
        <p className="title">Why We Excel in the Industry?</p>
        <p className="description">
          Our deep understanding of market demands, combined with our leading-edge solutions, positions us as the go-to choice for clients across Pakistan.
        </p>
      </div>
      <div className="twoColSection">
        <div className="col firstCol">
          <div className="image">
            <img src="/assets/images/Cutting-edge.webp" alt="Cutting-edge Technology" />
            <div className="contentWrapper sndColor">
              <p className="title">Cutting-edge Technology</p>
              <IoIosArrowRoundForward className="icon" />
              <p className="description">
                We utilize the latest technology to manufacture and supply chemicals that meet the highest industry standards.
              </p>
            </div>
          </div>
        </div>
        <div className="col secCol">
          <div className="image">
            <img src="/assets/images/Engineers.webp" alt="Expert Engineers" />
            <div className="contentWrapper firstColor">
              <p className="title">Expert Engineers</p>
              <IoIosArrowRoundForward className="icon" />
              <p className="description">
                Our team ensures that our chemical products are optimized for performance, durability, and cost-effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="twoColSection rev">
        <div className="col">
          <div className="image">
            <img src="/assets/images/Delivery.webp" alt="Delivery On Time" />
            <div className="contentWrapper firstColor">
              <p className="title">Delivery On Time</p>
              <IoIosArrowRoundForward className="icon" />
              <p className="description">
                We understand the importance of timely deliveries in today’s fast-moving business environment.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img src="/assets/images/Support.webp" alt="Customer Support" />
            <div className="contentWrapper sndColor">
              <p className="title">Customer Support</p>
              <IoIosArrowRoundForward className="icon" />
              <p className="description">
                Our dedicated customer support team is always ready to assist you with product inquiries, technical support, and troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
