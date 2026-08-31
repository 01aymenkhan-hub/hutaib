import Features from '../../components/Features';
import Concare from '../../components/Concare';
import '../../styles/AboutBanner.scss';

export const metadata = {
  title: 'About Us | Hutaib Industrial Solutions',
  description:
    'Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/about',
  },
  openGraph: {
    title: 'About Us | Hutaib Industrial Solutions',
    description:
      'Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships.',
    url: 'https://hutaib.org/about',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/images/aboutdesktop.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Hutaib Industrial Solutions',
    description:
      'Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships.',
    images: ['https://hutaib.org/assets/images/aboutdesktop.png'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

function AboutBanner() {
  return (
    <div className="AboutBanner">
      <div className="inner">
        
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
      <Features />
      <Concare />
    </div>
  );
}
