import { getAllBlogs } from '../lib/api/blogs';
import { getProducts } from '../lib/api/products';

export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://hutaib.org';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/career',
    '/blogs',
    '/product-category/construction-chemicals',
    '/product-category/textile-chemical',
    '/product-category/other-portfolio',
    '/product-category/epoxy-resin',
    '/product-category/admixture',
    '/product-category/momentive-amino-functional-fluid',
    '/product-category/silicone-oil',
    '/product-category/hydrophilic-oil',
    '/product-category/polydimethylsiloxane',
    '/product-category/softeners-for-textile',
    '/product-category/surfactants',
    '/product-category/styrene-acrylic',
    '/product-category/sbr-grades',
    '/product-category/rdp-grades',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogs = await getAllBlogs();
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.updated_at || new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categories = await getProducts();
  const productSlugs = new Set();

  categories.forEach((cat) => {
    if (cat.products) {
      cat.products.forEach((p) => {
        if (p.slug) productSlugs.add(p.slug);
      });
    }
    if (cat.subcategories) {
      cat.subcategories.forEach((sub) => {
        if (sub.products) {
          sub.products.forEach((p) => {
            if (p.slug) productSlugs.add(p.slug);
          });
        }
      });
    }
  });

  const productRoutes = Array.from(productSlugs).map((slug) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...productRoutes];
}
