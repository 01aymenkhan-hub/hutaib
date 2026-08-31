import SupplementaryServices from '../../../components/SupplementaryServices';
import JsonLd from '../../../components/JsonLd';
import { getProducts } from '../../../lib/api/products';
import '../../../styles/ConstructionChemicals.scss';

export const metadata = {
  title: 'Construction Chemicals Manufacturers & Suppliers in Pakistan | Hutaib',
  description:
    'Construction chemicals from Hutaib Industrial Solutions Pakistan. We supply Epoxy Resin, Admixture, RDP Grades, SBR Grades, and Styrene Acrylic for concrete protection, waterproofing, repair, and industrial flooring applications.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/product-category/construction-chemicals',
  },
  openGraph: {
    title: 'Construction Chemicals Manufacturers & Suppliers in Pakistan | Hutaib',
    description:
      'Construction chemicals from Hutaib Industrial Solutions Pakistan. We supply Epoxy Resin, Admixture, RDP Grades, SBR Grades, and Styrene Acrylic for concrete protection, waterproofing, repair, and industrial flooring applications.',
    url: 'https://hutaib.org/product-category/construction-chemicals',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/images/products_banner.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Chemicals Manufacturers & Suppliers in Pakistan | Hutaib',
    description:
      'Construction chemicals from Hutaib Industrial Solutions Pakistan. We supply Epoxy Resin, Admixture, RDP Grades, SBR Grades, and Styrene Acrylic for concrete protection, waterproofing, repair, and industrial flooring applications.',
    images: ['https://hutaib.org/assets/images/products_banner.png'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

export default async function ConstructionChemicalsPage() {
  const cats = await getProducts();
  const catData = cats.find((c) => c.slug === 'construction-chemicals') || {};

  const mapData = {
    title: 'Construction <span> Chemicals</span>',
    desc: 'Hutaib Industrial Solutions offers a broad spectrum of top-tier chemicals, developed to meet the dynamic needs of multiple industries.',
    mapItem: [
      {
        title: 'Epoxy Resin',
        description:
          'A high-strength bonding agent ideal for structural repairs, coatings, and chemical-resistant applications.',
        slug: 'epoxy-resin',
        localImage: '/assets/images/Epoxy.webp',
      },
      {
        title: 'Admixture',
        description:
          'A performance-enhancing additive that improves concrete workability, strength, and setting time.',
        slug: 'admixture',
        localImage: '/assets/images/admixture.webp',
      },
      {
        title: 'RDP Grades',
        description:
          'Redispersible Polymer Powders (RDP) enhance mortar flexibility, adhesion, and crack resistance. They are perfect for tile adhesives, renders, and self-leveling compounds.',
        slug: 'rdp-grades',
        localImage: '/assets/images/RDPGRADES.webp',
      },
      {
        title: 'SBR Grades',
        description:
          'SBR (Styrene-Butadiene Rubber) grades provide high elasticity, abrasion resistance, and bonding strength. Commonly used in adhesives, sealants, and flooring applications.',
        slug: 'sbr-grades',
        localImage: '/assets/images/SBRGRADES.webp',
      },
      {
        title: 'Styrene Acrylic',
        description:
          'Styrene acrylic polymers offer excellent adhesion, water resistance, and flexibility. Ideal for coatings, paints, and construction emulsions.',
        slug: 'styrene-acrylic',
        localImage: '/assets/images/StyreneAcrylic.webp',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://hutaib.org/product-category/construction-chemicals#collectionpage',
    url: 'https://hutaib.org/product-category/construction-chemicals',
    name: 'Construction Chemicals',
    headline: 'Construction Chemicals in Pakistan – Durable & Affordable',
    description:
      'Construction chemicals from Hutaib Industrial Solutions Pakistan. We supply Epoxy Resin, Admixture, RDP Grades, SBR Grades, and Styrene Acrylic for concrete protection, waterproofing, repair, and industrial flooring applications.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Hutaib Industrial Solutions',
      url: 'https://hutaib.org/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hutaib Industrial Solutions',
      url: 'https://hutaib.org/',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Construction Chemicals Categories',
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Epoxy Resin',
          url: 'https://hutaib.org/product-category/epoxy-resin',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Admixture',
          url: 'https://hutaib.org/product-category/admixture',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'RDP Grades',
          url: 'https://hutaib.org/product-category/rdp-grades',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'SBR Grades',
          url: 'https://hutaib.org/product-category/sbr-grades',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Styrene Acrylic',
          url: 'https://hutaib.org/product-category/styrene-acrylic',
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://hutaib.org/product-category/construction-chemicals/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hutaib.org/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Construction Chemicals',
        item: 'https://hutaib.org/product-category/construction-chemicals',
      },
    ],
  };

  return (
    <div className="Wrapme">
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumbSchema} />
      <SupplementaryServices data={mapData} />
      {catData.meta_footer ? (
        <div
          dangerouslySetInnerHTML={{ __html: catData.meta_footer }}
          className="seocontent"
        ></div>
      ) : null}
    </div>
  );
}
