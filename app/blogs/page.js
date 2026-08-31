import Link from 'next/link';
import { getAllBlogs } from '../../lib/api/blogs';
import '../../styles/Blog.scss';

export const metadata = {
  title: 'Blogs | Hutaib Industrial Solutions | Chemical Industry',
  description:
    'Read blogs by Hutaib Industrial Solutions covering updates, insights, and practical knowledge about the chemical industry in Pakistan and related topics.',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://hutaib.org/blogs',
  },
  openGraph: {
    title: 'Blogs | Hutaib Industrial Solutions | Chemical Industry',
    description:
      'Read blogs by Hutaib Industrial Solutions covering updates, insights, and practical knowledge about the chemical industry in Pakistan and related topics.',
    url: 'https://hutaib.org/blogs',
    siteName: 'Hutaib',
    images: [{ url: 'https://hutaib.org/assets/logo/logo.png' }],
    type: 'website',
  },
};

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="blogdetailpage">
      <div className="blogbanner">
        <h1>Blogs</h1>
      </div>
      {blogs && blogs.length > 0 ? (
        <div className="bloglistingpage">
          {blogs.map((item, index) => {
            return (
              <Link key={index} href={`/blog/${item.slug}`}>
                <div className="mapblogcont">
                  <img
                    src={`https://hutaib.admin.simboz.website/storage/${item.thumbnail}`}
                    alt={item.title || ''}
                  />
                  <p>{item.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="loader">
          <img src="/assets/images/loader.gif" alt="Loading blogs..." />
        </div>
      )}
    </div>
  );
}
