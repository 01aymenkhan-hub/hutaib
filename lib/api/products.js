const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hutaib.admin.simboz.website';

export async function getProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/products/get-products`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    const data = await res.json();
    return data.cats || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function searchProductByIdOrSlug(query) {
  try {
    const formData = new FormData();
    formData.append('search', query);

    const res = await fetch(`${API_BASE_URL}/public/api/search`, {
      method: 'POST',
      body: formData,
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Search failed: ${res.status}`);
    const data = await res.json();
    return data.products?.[0] || null;
  } catch (error) {
    console.error('Error searching product:', error);
    return null;
  }
}

/**
 * Saare product slugs extract karta hai categories aur subcategories se.
 * generateStaticParams ke liye use hota hai.
 */
export async function getAllProductSlugs() {
  const cats = await getProducts();
  const slugs = [];

  for (const cat of cats) {
    if (cat.products) {
      for (const p of cat.products) {
        if (p.slug) slugs.push(p.slug);
      }
    }
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        if (sub.products) {
          for (const p of sub.products) {
            if (p.slug) slugs.push(p.slug);
          }
        }
      }
    }
  }

  // Duplicates remove karo
  return [...new Set(slugs)];
}

