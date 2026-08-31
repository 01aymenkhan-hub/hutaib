import React, { useRef } from 'react'
import "./css/SatisfiedClients.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SatisfiedClients = () => {
    const carouselRef = useRef(null);

    return (
        <div className='SatisfiedClients'>
            <div className='supplementaryHeader'>
                <div className='imageContainer'>
                    {/* <img src="/assets/images/testimonial-image.jpg" alt="" /> */}
                    <img src="/assets/images/about.webp" alt="" />
                </div>
                <div className='contentContainer'>
                    <div className='miniTitle'><img src="/assets/images/gear.svg" alt="" /> <p> ABOUT US</p></div>
                    <p className='title'>Leading the Way in  <span> Quality and Innovation</span></p>
                    <p className='description'>At our core, we strive to deliver high-quality products through state-of-the-art technology and innovative solutions.
                    </p>
                    <div className='twoColsection'>
                        <div className='listContainer'>
                            <span><img src="/assets/images/setting.svg" alt="" />Efficient Production Processes</span>
                            <span><img src="/assets/images/setting.svg" alt="" />Technological Innovation</span>
                            <span><img src="/assets/images/setting.svg" alt="" />Customized Solutions</span>
                            <span><img src="/assets/images/setting.svg" alt="" />Customer-Centric Approach</span>
                            <Link to={'/about'} className='btn'>Learn More</Link>
                        </div>
                        <div className='ratingCont'>
                            <p className='rating'>4.9</p>
                            <span className='starRating'>
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                                <FaStar className='starIcon' />
                            </span>
                            <p className='genuine'>15.5K Genuine Rating</p>
                        </div>
                    </div>
                    {/* <div className='sliderContainer'>
                        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay dots={false} autoplayTimeout={2000} ref={carouselRef}>
                            <div class='item'>
                                <p>We’ve been using Hutaib’s textile chemicals for years, and the results are always excellent. Our fabrics feel softer, last longer, and have better color retention. Great quality!                                </p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>Matloob Ahmed</p>
                                        <p className='designation'>Textile Operator
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div class='item'>
                                <p>Hutaib's construction chemicals made our building projects much easier. The epoxy and other products have helped us improve both quality and durability.</p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>AbdulRehman</p>
                                        <p className='designation'>Builder</p>
                                    </div>

                                </div>
                            </div>

                            <div class='item'>
                                <p>Hutaib’s surfactants are top-notch. They have improved the quality of our products greatly. Great customer service and timely delivery as well!</p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>Ali-Bin-Saeed</p>
                                        <p className='designation'>Chemical Supplier</p>
                                    </div>

                                </div>
                            </div>

                            <div class='item'>
                                <p>The silicone fluid provided by Hutaib has really improved the finish and feel of our textiles. It’s a product we can always count on.</p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>Muhammad Ashir</p>
                                        <p className='designation'>Textile Manufacturer</p>
                                    </div>

                                </div>
                            </div>

                            <div class='item'>
                                <p>We’ve been very happy with the Momentive Amino Functional Fluid from Hutaib. It has worked wonders on our textile processes, making them smoother and more efficient.</p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>Chaudary Taimoor</p>
                                        <p className='designation'>Textile Operator</p>
                                    </div>

                                </div>
                            </div>

                            <div class='item'>
                                <p>I recently used Hutaib’s polydimethylsiloxane for a product, and the results were fantastic. It gave my work the professional finish I needed. Highly recommend!</p>
                                <div className='user'>
                                    <img src="/assets/images/user.jpg" alt="" />
                                    <div className='userInfo'>
                                        <p className='name'>Muhammad Yousuf</p>
                                        <p className='designation'>Industrial Supplier</p>
                                    </div>

                                </div>
                            </div>

                        </OwlCarousel>;
                        <div className='btnWrapper'>
                            <span className='arrowWrapper' onClick={() => carouselRef.current.prev()} ><FaArrowLeft /></span>
                            <span className='arrowWrapper' onClick={() => carouselRef.current.next()}><FaArrowRight /></span>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default SatisfiedClients