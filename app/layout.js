import Script from 'next/script';
import { FaWhatsapp } from 'react-icons/fa';
import { StateProvider } from '../lib/StateContext';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/App.css';

export const metadata = {
  metadataBase: new URL('https://hutaib.org'),
  title: 'Chemical Company in Pakistan | Hutaib Industrial Solutions',
  description:
    'Since 1997, Hutaib Industrial Solutions provides quality construction, textile, and industrial chemicals across Pakistan with reliable delivery and fair prices.',
  verification: {
    google: '6NRpX6sK8Kg80uy2-99lybkxENfE0CpVE3wA4nJxXZ0',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-246322616-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-246322616-1');
          `}
        </Script>
      </head>
      <body>
        <StateProvider>
          <div className="App">
            <Nav />
            <main>{children}</main>
            <Footer />
            <Copyright />

            {/* Floating WhatsApp Button */}
            <div className="floatingicon">
              <a
                href="https://wa.link/v4unuc"
                target="_blank"
                rel="noopener noreferrer"
                title="Hutaib Whatsapp"
                role="img"
                aria-label="Hutaib Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
