import { notFound } from 'next/navigation';
import { getBlogBySlug, getAllBlogs } from '../../../lib/api/blogs';
import '../../../styles/Blogdetailpage.scss';

/**
 * Build time pe saare blogs ke slugs generate karta hai
 * taki har blog ka static HTML page ban jaaye.
 */
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Hutaib Industrial Solutions',
    };
  }

  return {
    title: `${blog.title} | Hutaib Industrial Solutions`,
    description: blog.meta_desc || blog.title,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: `https://hutaib.org/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.meta_desc || blog.title,
      url: `https://hutaib.org/blog/${slug}`,
      siteName: 'Hutaib',
      images: [{ url: blog.thumbnail_url || 'https://hutaib.org/assets/logo/logo.png' }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.meta_desc || blog.title,
      images: [blog.thumbnail_url || 'https://hutaib.org/assets/logo/logo.png'],
    },
  };
}

function parseBlogContent(content) {
  if (!content) return '';
  try {
    const jsonParsed = JSON.parse(content);
    return jsonParsed;
  } catch (err) {
    return content;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const rawHtml = parseBlogContent(blog.content);

  return (
    <div className="blogdetailpage">
      <div className="blogdetailbanner">
        {blog.thumbnail_url ? (
          <img src={blog.thumbnail_url} alt={blog.title || ''} />
        ) : (
          <img src="/assets/images/products_banner.png" alt={blog.title || ''} />
        )}
      </div>

      <div className="blogdetailwrapper">
        <h1>{blog.title}</h1>
        <div
          className="inner"
          dangerouslySetInnerHTML={{ __html: rawHtml }}
        ></div>
      </div>
    </div>
  );
}
