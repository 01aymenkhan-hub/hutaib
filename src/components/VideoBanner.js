import React from 'react'
import './css/VideoBanner.scss';

const VideoBanner = () => {
    return (
        <div className='videoBannerWrapper'>
            <video autoPlay="autoPlay" loop muted >
                <source src="http://redachem.com/wp-content/uploads/video/website-homepage-video.mp4" type="video/mp4" />
                <source src="http://redachem.com/wp-content/uploads/video/website-homepage-video.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            <div className='videoContentWrapper'>
                <div className='videoContentContainer'>
                    <p className='content'>
                        Leading Distributor of Specialty  Chemicals
                        <span>in Asia, India, Middle-East and Africa</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoBanner