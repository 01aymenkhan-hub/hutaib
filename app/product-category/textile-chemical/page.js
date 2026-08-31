import SupplementaryServices from '../../../components/SupplementaryServices';
import JsonLd from '../../../components/JsonLd';
import { getProducts } from '../../../lib/api/products';
import '../../../styles/ConstructionChemicals.scss';

export const metadata = {
  title: 'Textile Chemicals Manufacturers and Suppliers in Pakistan | Hutaib',
  description:
    'Textile chemicals from Hutaib Industrial Solutions Pakistan. We supply Amino Functional Fluids, Block Silicone Fluids, Hydrophilic Oils, PDMS Emulsions, Softeners, and Surfactants for fabric finishing, softness, lubrication, water absorbency, and textile processing applications.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/product-category/textile-chemical',
  },
  openGraph: {
    title: 'Textile Chemicals Manufacturers and Suppliers in Pakistan | Hutaib',
    description:
      'Textile chemicals from Hutaib Industrial Solutions Pakistan. We supply Amino Functional Fluids, Block Silicone Fluids, Hydrophilic Oils, PDMS Emulsions, Softeners, and Surfactants for fabric finishing, softness, lubrication, water absorbency, and textile processing applications.',
    url: 'https://hutaib.org/product-category/textile-chemical',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/images/products_banner.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textile Chemicals Manufacturers and Suppliers in Pakistan | Hutaib',
    description:
      'Textile chemicals from Hutaib Industrial Solutions Pakistan. We supply Amino Functional Fluids, Block Silicone Fluids, Hydrophilic Oils, PDMS Emulsions, Softeners, and Surfactants for fabric finishing, softness, lubrication, water absorbency, and textile processing applications.',
    images: ['https://hutaib.org/assets/images/products_banner.png'],
    creator: '@Hutaib',
    site: '@Hutaib',
  },
};

export default async function TextileChemicalPage() {
  const cats = await getProducts();
  const catData = cats.find((c) => c.slug === 'textile-chemical') || {};

  const mapData = {
    title: 'Textile <span> Chemicals</span>',
    desc: 'Hutaib Industrial Solutions offers a broad spectrum of top-tier chemicals, developed to meet the dynamic needs of multiple industries.',
    mapItem: [
      {
        title: 'Amino Functional Fluids',
        description:
          'These silicone-based fluids enhance softness, elasticity, and smoothness in fabrics, making them ideal for premium textile finishes.',
        slug: 'momentive-amino-functional-fluid',
        localImage: '/assets/images/aminoFunctional.webp',
      },
      {
        title: 'Block Silicone Fluids',
        description:
          'Designed for durable softness and excellent surface smoothness, block silicone fluids offer improved washing durability and compatibility in textile processing.',
        slug: 'silicone-oil',
        localImage: '/assets/images/blockSiliconeFluid.webp',
      },
      {
        title: 'Hydrophilic',
        description:
          'These finishes allow fabrics to absorb and wick moisture effectively, enhancing comfort, especially in sportswear and activewear.',
        slug: 'hydrophilic-oil',
        localImage: '/assets/images/hydrocloric.webp',
      },
      {
        title: 'PDMS Emulsion',
        description:
          'A high-performance silicone emulsion that imparts a silky, smooth touch to textiles while boosting fabric strength and flexibility.',
        slug: 'polydimethylsiloxane',
        localImage: '/assets/images/Polydimethylsiloxane.webp',
      },
      {
        title: 'Softener',
        description:
          'Our textile softeners reduce fabric stiffness, improve drape, and deliver a pleasant hand feel, suitable for a wide range of fabric types.',
        slug: 'softeners-for-textile',
        localImage: '/assets/images/Softener.webp',
      },
      {
        title: 'Surfactants',
        description:
          'Our surfactants optimize wetting, emulsification, and cleaning processes, ensuring efficient textile treatment and enhanced fabric quality.',
        slug: 'surfactants',
        localImage: '/assets/images/Surfactants.webp',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://hutaib.org/product-category/textile-chemical#collectionpage',
    url: 'https://hutaib.org/product-category/textile-chemical',
    name: 'Textile Chemicals',
    headline: 'Textile Chemicals for Fabric Quality & Finishing in Pakistan',
    description:
      'Textile chemicals from Hutaib Industrial Solutions Pakistan. We supply Amino Functional Fluids, Block Silicone Fluids, Hydrophilic Oils, PDMS Emulsions, Softeners, and Surfactants for fabric finishing, softness, lubrication, water absorbency, and textile processing applications.',
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
      name: 'Textile Chemicals Categories',
      numberOfItems: 6,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amino Functional Fluids',
          url: 'https://hutaib.org/product-category/momentive-amino-functional-fluid',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Block Silicone Fluids',
          url: 'https://hutaib.org/product-category/silicone-oil',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Hydrophilic',
          url: 'https://hutaib.org/product-category/hydrophilic-oil',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'PDMS Emulsion',
          url: 'https://hutaib.org/product-category/polydimethylsiloxane',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Softener',
          url: 'https://hutaib.org/product-category/softeners-for-textile',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Surfactants',
          url: 'https://hutaib.org/product-category/surfactants',
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://hutaib.org/product-category/textile-chemical/#breadcrumb',
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
        name: 'Textile Chemicals',
        item: 'https://hutaib.org/product-category/textile-chemical',
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
