import React from 'react';
import Link from 'next/link';
import '../styles/comcare.scss';

export default function Concare() {
  return (
    <div className="concare">
      <div className="concarewrap">
        <div
          style={{ backgroundImage: `url(/assets/images/contact_us.jpg)` }}
          className="concareleft"
          role="img"
          aria-label="Contact Us"
          title="Contact Us"
        >
          <Link href="/contact">
            <button className="lbtn">Contact Us</button>
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(/assets/images/career.jpg)` }}
          className="concareright"
          role="img"
          aria-label="Join Our Team"
          title="Join Our Team"
        >
          <Link href="/career">
            <button className="lbtn">JOIN OUR TEAM</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
