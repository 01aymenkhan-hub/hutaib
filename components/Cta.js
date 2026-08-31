import React from 'react';
import Link from 'next/link';
import '../styles/Cta.scss';

export default function Cta() {
  return (
    <div className="Cta">
      <div className="">
        <div className="getqdata">
          <h2 className="getdatah2">Supplying to major customers around the globe.</h2>
          <h4 className="getdatah4">For further brief.</h4>
          <Link href="/contact" className="btn1">
            Get Quote
          </Link>
        </div>
      
      </div>
    </div>
  );
}
