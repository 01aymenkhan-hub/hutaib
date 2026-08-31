const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://hutaib.admin.simboz.website';

export async function getAllBlogs() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/getAllBlogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/getBlogBySlug/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`Failed to fetch blog by slug: ${res.status}`);
    const data = await res.json();
    return data.blogs || null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}
