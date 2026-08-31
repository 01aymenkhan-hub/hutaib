import React, { useEffect, useRef, useState } from 'react'
import "./css/SupplementaryServices.scss";
import { Link, Router, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "../slider";

const SupplementaryServices = ({ data }) => {
    const carouselRef = useRef(null);


    // flicktiy options

    const flickityOptions = {
        initialIndex: 1,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,  // Enables infinite loop
        contain: true,
        freeScroll: false, // Disables free scroll
        selectedAttraction: 0.2,
        friction: 0.8,
        lazyLoad: 1,
        imagesLoaded: true,
        autoPlay: 1500
    };

    // set flicty width state

    const [slideWidth, setSlideWidth] = useState("18%");

    // set flicty width

    useEffect(() => {
        // console.log(window.screen.width);

        if (window.screen.width < 768) {
            setSlideWidth("90%");
            flickityOptions.wrapAround = false;
        }
    }, []);

    const navigate = useNavigate();
    const handleSubcategoryClick = (item) => {
        navigate(`/product-category/${item.slug}`);
    };
    // flicktiy
    const createMarkup = (pro) => {
        return { __html: pro };
    };
    return (
        <div className='supplementaryServices'>
            <div className='supplementaryInnerWrapper'>
                <div className={data.desc ? 'supplementaryHeader' : "supplementaryHeader ctxt"} style={{ gridTemplateColumns: data.desc ? 'auto 1fr' : '1fr' }}>
                    <div className={data.desc ? 'supplementaryMegaTitle' : "supplementaryMegaTitle ctxt"} style={{ textAlign: data.desc ? 'left' : 'center' }} dangerouslySetInnerHTML={createMarkup(data.title)}>
                    </div>
                    {data.desc ?
                        <p className='supplementaryMegaContent'> {data.desc} </p>
                        :
                        null
                    }
                </div>
                <div className='supplementaryCradWrapper showOnDesktop'>
                    {
                        data.mapItem.map((item, index) => {
                            return (
                                <div onClick={() => handleSubcategoryClick(item)} className='supplementaryCradItem' key={index}>
                                    {/* {console.log(item, 'item inside Card =>')} */}
                                    {
                                        item.localImage ? <img src={`${item.localImage}`} alt="" />
                                            : <img src={`https://hutaib.admin.simboz.website/public/storage/${item.image}`} alt="" />
                                    }

                                    <div className='contentOverlay'>
                                        <p className='contentOverlayTitle'> {item.name} </p>
                                        <p className='contentOverlayDesc'>{item.description}</p>
                                        <p >View Project </p>
                                    </div>
                                    <p className='AbsTitle'>
                                        {item.title}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='supplementaryCradWrapper showOnMobile'>

                    <Slider options={flickityOptions}>

                        {
                            data.mapItem.map((item, index) => {
                                return (
                                    <div onClick={() => handleSubcategoryClick(item)} className='supplementaryCradItem' key={index}
                                        style={{ width: slideWidth, height: "270px", margin: "5px 1%" }}
                                    >

                                        <img src={item.localImage} alt="" />
                                        <div className='contentOverlay'>
                                            <p className='contentOverlayTitle'> {item.title} </p>
                                            <p className='contentOverlayDesc'>{item.description}</p>
                                            <p >View Project </p>
                                        </div>
                                        <p className='AbsTitle'>
                                            {item.title}
                                        </p>
                                    </div>
                                )
                            })
                        }


                    </Slider>

                    {/* <OwlCarousel className='owl-theme'
                        loop
                        margin={10}
                        items={1}  // Ensure only 1 item is shown
                        // autoplay
                        // dots={false}
                        // autoplayTimeout={2000}
                        stagePadding={0} // Remove extra padding
                        ref={carouselRef}>
                        {
                            mapData.map((item, index) => {
                                return (
                                    <div className='supplementaryCradItem' key={index}>
                                        <img src={item.image} alt="" />
                                        <div className='contentOverlay'>
                                            <p className='contentOverlayTitle'> {item.title} </p>
                                            <p className='contentOverlayDesc'>{item.description}</p>
                                            <Link to={item.link}>View Project </Link>
                                        </div>
                                        <p className='AbsTitle'>
                                            {item.title}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>; */}
                </div>
            </div>
        </div>
    )
}

export default SupplementaryServices