import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Blog.scss'
function Blog() {

  function createMarkup() {
    return { __html: 'First &middot; Second' };
  }


  let [blogs, setBlogs] = useState([])

  useEffect(() => {
    let sttop = () => {
      window.scrollTo(0, 0);
    }
    sttop()
    let url = 'https://hutaib.admin.simboz.website/api/blogs/getAllBlogs'

    axios.get(url).
      then((res) => {
        setBlogs(res.data.blogs)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  console.log(blogs)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Hutaib Industrial Solutions | Chemical Industry</title>

        <meta
          name="description"
          content={'Read blogs by Hutaib Industrial Solutions covering updates, insights, and practical knowledge about the chemical industry in Pakistan and related topics. (edited)'}
          data-react-helmet="true"
        />
        {/* https://hutaib.org/hutaib-admin/uploads */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      </Helmet>
      <div className='blogdetailpage'>
        <div className='blogbanner'>
          <h1>Blogs</h1>
        </div>
        {blogs && blogs != '' ?
          <div className='bloglistingpage'>
            {
              blogs.map((item, index) => {
                return (
                  <Link key={index} to={`/blog/${item.slug}`}>
                    <div className='mapblogcont'>
                      <img src={`https://hutaib.admin.simboz.website/storage/` + item.thumbnail} />
                      {/* <img src={item.desktop_banner_url} /> */}
                      <p>{item.title}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          :
          <div className='loader'>
            <img src='../assets/images/loader.gif' />
          </div>
        }
      </div>
    </>
  )

}

export default Blog
