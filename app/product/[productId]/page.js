import { notFound } from 'next/navigation';
import ProductDetails from '../../../components/ProductDetails';
import JsonLd from '../../../components/JsonLd';
import { searchProductByIdOrSlug, getAllProductSlugs } from '../../../lib/api/products';
import { subCategoryProductsSchemas } from '../../../lib/schemas/subCategoryProductSchema';

/**
 * Build time pe saare product slugs generate karta hai
 * taki har product ka static HTML page ban jaaye.
 */
export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ productId: slug }));
}

export async function generateMetadata({ params }) {
  const { productId } = await params;
  const product = await searchProductByIdOrSlug(productId);

  if (!product) {
    return {
      title: 'Product Details | Hutaib Industrial Solutions',
    };
  }

  const title = product.meta_title || product.title || 'Product Details';
  const description = product.meta_description || product.product_desc || '';
  const canonicalUrl = `https://hutaib.org/product/${productId}`;

  return {
    title: `${title} | Hutaib Industrial Solutions`,
    description,
    robots: 'index, follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Hutaib',
      images: [
        product.file
          ? `https://hutaib.admin.simboz.website/storage/${product.file}`
          : 'https://hutaib.org/assets/images/product.png',
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        product.file
          ? `https://hutaib.admin.simboz.website/storage/${product.file}`
          : 'https://hutaib.org/assets/images/product.png',
      ],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { productId } = await params;
  const product = await searchProductByIdOrSlug(productId);

  if (!product) {
    notFound();
  }

  const schemaPath = `/product/${productId}/`;
  const schemaData = subCategoryProductsSchemas[schemaPath] || null;

  return (
    <div>
      {schemaData && <JsonLd data={schemaData} />}
      <ProductDetails product={product} />
    </div>
  );
}
