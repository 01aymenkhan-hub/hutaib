import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Blogdetailpage.scss'
function Blogdetailpage() {


    function createMarkup(data) {
        return { __html: data };
    }

    let [blog, setBlog] = useState()
    let [blogid, setBlogid] = useState()

    let bid = window.location.href.split('/').at(-1)
    console.log(bid)
    let url = `https://hutaib.admin.simboz.website/api/blogs/getBlogBySlug/${blogid}`


    const checkValidJSON = (response) => {
        try {
            const jsonData = JSON.parse(response);
            // If JSON.parse doesn't throw an error, it's valid JSON
            return jsonData;
        } catch (error) {
            // JSON is not valid if parsing fails
            return response;
        }
    };

    useEffect(() => {
        let sttop = () => {
            window.scrollTo(0, 0);
        }
        sttop()
        setTimeout(() => {
            setBlogid(bid)
            url = `https://hutaib.admin.simboz.website/api/blogs/getBlogBySlug/${bid}`

            // console.log(url)
            axios.get(url).
                then((res) => {
                    setBlog(res.data.blogs)

                    console.log(res.data.blogs.content)

                }).catch((err) => {
                    console.log(err);
                })
        }, 500);

        // let url = `https://hutaib.org/hutaib-admin/ProductsAPI/GetBlog/13`

    }, [blogid])

    console.log(blog)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{blog && blog.title}</title>

                <meta
                    name="description"
                    content={blog && blog.meta_desc}
                    data-react-helmet="true"
                />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
            </Helmet>
            {blog && blog != '' ?
                <div className='blogdetailpage'>
                    <div className='blogdetailbanner'>
                        {/* <img src='/assets/images/products_banner.png' /> */}
                        <img src={blog && blog.thumbnail_url} />
                    </div>

                    <div className='blogdetailwrapper'>
                        <h1>{blog && blog.title}</h1>
                        <div className="inner" dangerouslySetInnerHTML={createMarkup(checkValidJSON(blog?.content))}></div>


                    </div>

                </div >
                :
                <div className='loader'>
                    <img src='../assets/images/loader.gif' />
                </div>
            }
        </>
    )
}

export default Blogdetailpage
