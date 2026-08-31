import Careerform from '../../components/Careerform';
import '../../styles/CareerBanner.scss';

export const metadata = {
  title: 'Join Our Team | Careers at Hutaib Industrial Solutions',
  description:
    'Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/career',
  },
  openGraph: {
    title: 'Join Our Team | Careers at Hutaib Industrial Solutions',
    description:
      'Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development.',
    url: 'https://hutaib.org/career',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/images/join.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Team | Careers at Hutaib Industrial Solutions',
    description:
      'Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development.',
    images: ['https://hutaib.org/assets/images/join.jpg'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

function CareerBanner() {
  return (
    <div className="CareerBanner">
      <div className="inner">
       
      </div>
    </div>
  );
}

export default function CareerPage() {
  return (
    <div>
      <CareerBanner />
      <Careerform />
    </div>
  );
}
