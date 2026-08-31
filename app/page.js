import Link from 'next/link';
import CustomBanner from '../components/CustomBanner';
import SupplementaryServices from '../components/SupplementaryServices';
import SatisfiedClients from '../components/SatisfiedClients';
import Industries from '../components/Industries';
import MultiColSection from '../components/MultiColSection';
import Slider from '../components/Slider';
import Cta from '../components/Cta';
import HomeAboutSection from '../components/HomeAboutSection';
import ReviewSlider from '../components/ReviewSlider';
import JsonLd from '../components/JsonLd';
import '../styles/Home.scss';

export const metadata = {
  title: 'Chemical Company in Pakistan | Hutaib Industrial Solutions',
  description:
    'Since 1997, Hutaib Industrial Solutions provides quality construction, textile, and industrial chemicals across Pakistan with reliable delivery and fair prices.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/',
  },
  openGraph: {
    title: 'Chemical Company in Pakistan | Hutaib Industrial Solutions',
    description:
      'Since 1997, Hutaib Industrial Solutions provides quality construction, textile, and industrial chemicals across Pakistan with reliable delivery and fair prices.',
    url: 'https://hutaib.org/',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/logo/logo.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chemical Company in Pakistan | Hutaib Industrial Solutions',
    description:
      'Since 1997, Hutaib Industrial Solutions provides quality construction, textile, and industrial chemicals across Pakistan with reliable delivery and fair prices.',
    images: ['https://hutaib.org/assets/logo/logo.png'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

export default function HomePage() {
  const mapData = {
    title: 'Our <span> Categories</span>',
    desc: '',
    mapItem: [
      {
        title: 'Construction Chemicals',
        description:
          'Our construction chemicals are designed to enhance the strength, durability, and performance of structures.',
        slug: 'construction-chemicals',
        localImage: '/assets/images/constructionChemical.webp',
      },
      {
        title: 'Textile Chemicals',
        description:
          'Our textile chemicals are engineered to improve fabric feel, performance, and processing.',
        slug: 'textile-chemical',
        localImage: '/assets/images/textileChemical.webp',
      },
      {
        title: 'Other Chemicals ',
        description:
          'Beyond our core categories, we offer a broad spectrum of industrial chemicals, each chosen for effectiveness.',
        slug: 'other-portfolio',
        localImage: '/assets/images/othersChemical.webp',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hutaib Industrial Solutions',
    url: 'https://hutaib.org/',
    description:
      'Hutaib Industrial Solutions, established in 1997, is a leading chemical supplier in Pakistan, specializing in high-quality construction chemicals, textile chemicals, and basic industrial chemicals. Committed to innovation and customer-centric solutions, we serve industries such as textile, construction, cosmetic, automotive, agriculture and many more. Our product range includes epoxy resins, admixtures, RDP grades, surfactants, and more, designed to enhance durability, efficiency, and performance. With a focus on quality assurance, competitive pricing, and reliable delivery, Hutaib supports businesses across Pakistan with tailored chemical solutions.',
    logo: 'https://hutaib.org/assets/logo/logo.png',
    email: 'info@hutaib.org',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+92-21-35661603',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+92-309-7772468',
        contactType: 'customer service',
        areaServed: 'PK',
        availableLanguage: 'English',
      },
    ],
    sameAs: [
      'https://www.facebook.com/HutaibindustrialSolutions/',
      'https://www.instagram.com/hutaibindustrialsolutions/',
      'https://www.linkedin.com/company/82427342',
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        url: 'https://hutaib.org/',
        name: 'Hutaib Chemical Company in Pakistan | Hutaib Industrial Solutions',
        description:
          'Hutaib industrial solutions is a distinguished chemical supplier in Pakistan dealing with textile chemicals manufacturers, and offers broad range of chemicals.',
        inLanguage: 'en-US',
        potentialAction: [{ '@type': 'ReadAction', target: ['https://hutaib.org/'] }],
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Hutaib Industrial Solutions | Chemical Importer & Suppliers',
    url: 'https://hutaib.org/',
    image: 'https://hutaib.org/assets/logo/logo.png',
    description:
      'Hutaib Industrial Solutions is a textile & construction chemical company in Pakistan; offering textile chemicals, construction and building materials, including waterproofing, SBR chemicals, silicone fluid, Hydrophilic silicone oil, Polydimethylsiloxane fluid, Epoxy, and Momentive Amino functional fluid. We are textile chemicals manufacturers and suppliers catering multiple industrial requirements.',
    hasMap:
      'https://www.google.com/maps/place/Hutaib+Industrial+Solutions+%7C+Chemical+Importer+%26+Suppliers/@24.8453678,67.0218373,17z/data=!4m5!3m4!1s0x3eb33de705ddfe63:0x1a67cdf796876b93!8m2!3d24.8453629!4d67.024026',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite #309, Progressive Plaza, Beaumont Rd, near Pidc House, Civil Lines',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'PK',
      postalCode: '75530',
    },
    telephone: '03097772468',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.8452375',
      longitude: '67.0238114',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Monday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Tuesday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Wednesday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Thursday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Friday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'http://schema.org/Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  };

  return (
    <div className="Home">
      <JsonLd data={organizationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={localBusinessSchema} />

      <CustomBanner />
      <SupplementaryServices data={mapData} />
      <SatisfiedClients />
      <Industries />
      <MultiColSection />
      <Slider />
      <Cta />
      <HomeAboutSection />
      <ReviewSlider />

      <div className="seodesc">
        <h1>Chemical Company in Pakistan: Hutaib Industrial Solutions</h1>
        <p>
          Since 1997, Hutaib Industrial Solutions has been a reliable chemical company in Pakistan, helping businesses get the materials they need to succeed. We’re a family-run chemical manufacturing company in Pakistan that started small, listening closely to what our customers—factories, builders, textile makers, and farmers—need to keep their operations running smoothly. Based in Pakistan, we work hard as a chemical supply company to deliver products that make a difference, whether it’s for stronger buildings or better fabrics. Our promise is straightforward: solid chemicals, fair prices, and delivery you can count on.
        </p>
        <h2>What Are Industrial Chemicals and Why Do They Matter?</h2>
        <p>
          Industrial chemicals are the unsung heroes behind better products and smoother processes. They’re used across chemical industries in Pakistan—from construction sites to textile mills to farms—to make things stronger, last longer, or work more efficiently. For instance, our chemicals help concrete hold up in tough weather, make fabrics softer for everyday wear, or boost crop growth. As a dedicated chemical supplier in Pakistan, we tailor our products to fit the real-world needs of local businesses, whether you’re a small workshop or a large manufacturer.
        </p>
        <h2>Why Choose Hutaib as Your Chemical Supplier?</h2>
        <p>
          Running a business in Pakistan means dealing with tight schedules, unpredictable weather, and budget pressures. As one of the trusted chemical suppliers in Pakistan, we focus on making your job easier. Here’s what sets us apart:
        </p>
        <ul>
          <li><b>Quality You Can Trust:</b> Our chemicals come from reputable sources, and we check every batch to ensure it performs well and safely.</li>
          <li><b>Fair and Clear Pricing:</b> We keep our prices competitive, whether you’re a small startup or a large operation, so you get value without surprises.</li>
          <li><b>Wide Product Range:</b> From construction to textiles, our industrial chemicals suppliers have what you need, and we can source specific products if you have unique requirements.</li>
          <li><b>Fast and Reliable Delivery:</b> We know delays can hurt, so our team ensures your order arrives on time, anywhere in Pakistan.</li>
          <li><b>Hands-On Support:</b> Not sure which chemical is right? Our experienced team is ready to guide you with practical advice tailored to your project.</li>
        </ul>
        <h2>Our Diverse Chemical Solutions</h2>
        <p>As a key player among chemical industries in Pakistan, we provide a broad range of products to support various applications:</p>
        <h3>Construction Chemicals</h3>
        <p>Resins, admixtures, and polymers to make structures stronger and more durable, improving load-bearing capacity and resistance to environmental wear, which ultimately contributes to longer building lifespans and reduced maintenance costs. These chemical solutions are engineered to enhance workability, bonding strength, and sustainability in both residential and commercial construction projects.</p>
        <h3>Textile Chemicals</h3>
        <p>Surfactants, softeners, and finishes to improve fabric quality and streamline production, offering better dye uptake, smoother textures, and enhanced washing performance for a more refined end product. Our textile chemicals are formulated to optimize processing efficiency while meeting global standards for softness, colourfastness, and fabric durability in garments and home textiles.</p>
        <h3>Basic Industrial Chemicals</h3>
        <p>Solvents, amines, and pigments for paints, adhesives, and manufacturing processes, playing a vital role in product formulation, process efficiency, and meeting specific performance requirements across diverse industrial segments. These essential chemicals form the foundation of numerous industrial operations and contribute to the reliability, safety, and effectiveness of final products in various applications.</p>
        <p>These products are designed to meet the demands of Pakistan’s diverse industries, from urban construction projects to rural farming operations.</p>
        <h2>Where Our Chemicals Make an Impact</h2>
        <p>We’ve worked with all kinds of businesses across Pakistan, and each has its own needs. Here’s how our products help:</p>
        <h3>Construction Projects</h3>
        <p>
          Strengthen concrete, seal against water and corrosion, and repair cracks to extend the life of buildings. Our high-performance admixtures enhance concrete bonding, reduce shrinkage, and offer protection against moisture—making them ideal for Pakistan’s diverse and often harsh climate conditions. These <Link href="/product-category/construction-chemicals">construction chemicals</Link> are essential for developers, engineers, and contractors who prioritize safety, structural integrity, and long-term reliability in their projects.
        </p>
        <h3>Textile Production</h3>
        <p>
          Deliver softer, more resilient fabrics and enhance dye penetration for clothing and technical textiles like sportswear. From improving hand feel to achieving richer colors, our solutions help textile manufacturers maintain quality while managing production costs and efficiency. With our advanced formulations, we support sustainability goals through lower water usage, reduced energy consumption, and compliance with international textile standards.
        </p>
        <h3>Manufacturing</h3>
        <p>
          Enable efficient production of paints, adhesives, coatings, and industrial parts through chemicals that improve performance and minimize waste. By enhancing durability and consistency, our products help manufacturers reduce defects and ensure long-term product quality. Whether in small-scale workshops or large industrial plants, our chemical solutions promote streamlined operations, regulatory compliance, and innovation in product development.
        </p>
        <p>
          As dedicated <Link href="/product-category/textile-chemical">industrial chemical</Link> suppliers, we take pride in powering Pakistan’s industrial progress—one industry, one solution, one project at a time.
        </p>
        <h2>Why Hutaib Stands Out as a chemical company in Pakistan</h2>
        <p>
          We’re more than just a chemical supply company. With over 25 years in the game, we’ve learned what businesses in Pakistan need to thrive. Whether you’re a contractor building a new high-rise or a textile mill aiming for export-quality fabrics, we take the time to understand your goals. Our team offers practical advice to pick the right chemicals, and we keep our prices affordable so you can focus on your work. As industrial chemicals suppliers, we’re set up to deliver across Pakistan, from Karachi to Lahore, with no delays.
        </p>
        <h2>Bulk Chemical Supply for Big Projects</h2>
        <p>
          Need a lot of chemicals? No problem. As bulk chemical suppliers, we specialize in supplying large quantities for projects that can’t afford to run dry. Whether it’s a major construction job or a textile factory with round-the-clock production, we ensure consistent quality and timely delivery. Our long-term partnerships mean you get the same reliable chemicals with every order, no matter the size.
        </p>
        <h2>Get Started with Hutaib Industrial Solutions</h2>
        <p>
          Ready to get the chemicals you need? Hutaib Industrial Solutions is here to make it easy. Contact us for a quote or to talk about your project—whether it’s a small job or a major operation. As a chemical manufacturing company in Pakistan, we’re proud to support businesses across the country with products that deliver. Drop us a message, and let’s get your next project moving.
        </p>
        <h3>Let’s Build Something Together</h3>
        <p>
          Chemicals might seem like a small part of your work, but they’re the glue that holds it all together. At Hutaib Industrial Solutions, we’re excited to be part of Pakistan’s industrial story, helping businesses like yours succeed. Got a question? Need a specific chemical? Want to know how we can help? We’re just a call or email away.
        </p>
        <h2>FAQ About Chemical Suppliers in Pakistan</h2>
        <h3>What types of chemicals does Hutaib provide?</h3>
        <p>We supply construction chemicals, textile chemicals, and basic industrial chemicals for industries like manufacturing, agriculture, and coatings.</p>
        <h3>How can I buy chemicals in Pakistan?</h3>
        <p>Reach out to us for a quote. We offer both small and large quantities with delivery across Pakistan.</p>
        <h3>Why choose Hutaib as my chemical supplier in Pakistan?</h3>
        <p>We combine quality products, fair pricing, fast delivery, and hands-on support to help your business get results.</p>
        <h3>Can you supply large orders for big projects?</h3>
        <p>Yes, as bulk chemical suppliers, we’re ready to provide large volumes for construction, textiles, or manufacturing, with consistent quality.</p>
        <h3>How do your chemicals improve my work?</h3>
        <p>Our products make structures stronger, fabrics better, or crops healthier, all tailored to Pakistan’s unique conditions.</p>
      </div>
    </div>
  );
}
