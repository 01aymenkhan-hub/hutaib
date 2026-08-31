import React from 'react';
import Link from 'next/link';
import '../styles/Pagenotfound.scss';

export default function NotFound() {
  return (
    <div className="pagenotfound">
      <div>
        <h1>404 | Error</h1>
        <h1>Page not found</h1>
        <p style={{ marginTop: '20px' }}>
          <Link href="/" className="btn btn-primary" style={{ background: '#004273', borderColor: '#004273' }}>
            Return Home
          </Link>
        </p>
      </div>
    </div>
  );
}
