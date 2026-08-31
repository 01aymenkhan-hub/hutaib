import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ProductRow.scss';
import PopupQuoote from './PopupQuoote';
import ScrollLock from '../ScrollLock.js';


function ProductRow({ item, image }) {
    const createMarkup = (pro) => {
        return { __html: pro };
    }

    const [isOpen, setIsOpen] = useState(false)

    const miniForm = (item) => {
        setIsOpen(true)
        // console.log(item)
        setSp(item);

        blockScroll();
    }
    const [sp, setSp] = useState({})
    const [blockScroll, allowScroll] = ScrollLock();


    let [read, setRead] = useState('')
    const ToggleRead = (item) => {
        if (read == item.name) {
            setRead(false);
        } else {
            setRead(item.name);
        }
    };
    return (
        <section className='ProductRow' style={{ backgroundImage: `url(${image})` }} role="img" aria-label={item.title} title={item.title}>
            <div className='bg_overlay'></div>
            <div className='inner'>
                <div className='title'>
                    <Link to={`product/${item?.name}`}>
                        <h6>{item?.title}</h6>
                    </Link>
                </div>
                <div className='desc'  >
                    <div className='descwrap'>
                        <div className='desc_text'
                            dangerouslySetInnerHTML={
                                read == item?.name ? createMarkup(item?.product_desc) : createMarkup(item?.product_desc.substring(0, 100)
                                )}>

                        </div>
                        <span className={`${read === item.name ? 'read_less' : ''}`} onClick={() => ToggleRead(item)}>{read === item.name ? 'Read Less' : 'Read More'}</span>


                    </div>

                    <div className='buttons_cont'>
                        <a href={`https://hutaib.admin.simboz.website/storage/${item?.tds_file}`} target="_blank">Technical Data Sheet</a>
                        <button className='quote-btn' onClick={() => miniForm(item)}> Get Quote</button>
                    </div>
                </div>

            </div>
            <PopupQuoote open={isOpen} allowScroll={allowScroll} onClose={() => { setIsOpen(false) }} product={sp} />
        </section >
    );
}

export default ProductRow;
