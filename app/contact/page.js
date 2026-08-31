import ContactusMianArea from '../../components/ContactusMianArea';

export const metadata = {
  title: 'Contact Us | Hutaib Industrial Solutions',
  description:
    'Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/contact',
  },
  openGraph: {
    title: 'Contact Us | Hutaib Industrial Solutions',
    description:
      'Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office.',
    url: 'https://hutaib.org/contact',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/logo/logo.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Hutaib Industrial Solutions',
    description:
      'Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office.',
    images: ['https://hutaib.org/assets/logo/logo.png'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactusMianArea />
    </div>
  );
}
