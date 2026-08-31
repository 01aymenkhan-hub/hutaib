import ProductsBanner from '../../../components/ProductsBanner';
import ProductsMainArea from '../../../components/ProductsMainArea';
import JsonLd from '../../../components/JsonLd';
import { getProducts } from '../../../lib/api/products';
import { subCategorySchemas } from '../../../lib/schemas/subCategorySchema';

/**
 * Build time pe saare category/subcategory slugs generate karta hai
 * taki har page ka static HTML ban jaaye.
 */
export async function generateStaticParams() {
  const cats = await getProducts();
  const slugs = [];

  for (const cat of cats) {
    if (cat.slug) {
      slugs.push({ slug: cat.slug });
    }
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        if (sub.slug) {
          slugs.push({ slug: sub.slug });
        }
      }
    }
  }

  return slugs;
}

/**
 * Helper: categories list me se slug match karke category/subcategory return karta hai
 */
function findCategoryBySlug(cats, slug) {
  for (const cat of cats) {
    if (cat.slug === slug) return cat;
    if (cat.subcategories) {
      const sub = cat.subcategories.find((s) => s.slug === slug);
      if (sub) return sub;
    }
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cats = await getProducts();
  const matchedCat = findCategoryBySlug(cats, slug);

  const cleanPath = `/product-category/${slug}/`;
  const schemaData = subCategorySchemas[cleanPath] || null;

  const title =
    matchedCat?.meta_title ||
    schemaData?.headline ||
    schemaData?.name ||
    `${slug.replace(/-/g, ' ')} | Hutaib Industrial Solutions`;
  const description =
    matchedCat?.meta_description || schemaData?.description || '';
  const canonicalUrl = `https://hutaib.org/product-category/${slug}`;

  return {
    title,
    description,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Hutaib',
      images: [{ url: 'https://hutaib.org/assets/images/products_banner.png' }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://hutaib.org/assets/images/products_banner.png'],
      creator: '@Hutaib',
      site: '@Hutaib',
    },
  };
}

export default async function SubCategoryPage({ params }) {
  const { slug } = await params;
  const initialTabs = await getProducts();

  // Server pe hi matched category find kar lo
  const initialSelectedCategory = findCategoryBySlug(initialTabs, slug) || {};

  const cleanPath = `/product-category/${slug}/`;
  const schemaData = subCategorySchemas[cleanPath] || null;

  return (
    <div className="Products">
      {schemaData && <JsonLd data={schemaData} />}
      <ProductsBanner data={slug} />
      <ProductsMainArea
        initialTabs={initialTabs}
        slug={slug}
        initialSelectedCategory={initialSelectedCategory}
      />
    </div>
  );
}

