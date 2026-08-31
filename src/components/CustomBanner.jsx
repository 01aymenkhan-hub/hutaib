import React from 'react'
import './css/CustomBanner.scss';

const CustomBanner = () => {
    return (
        <div className='customBanner'>
            <img src="/assets/images/hutaib-banner.webp" alt="" className='desktopImage' />
            <img src="/assets/images/mobilebanner.webp" alt="" className='mobileImage' />
            <div className="absText"><p className='text'>Pakistan's Leading Textile & <span> Construction Chemicals Manufacturer & Supplier</span></p></div>
        </div>
    )
}

export default CustomBanner