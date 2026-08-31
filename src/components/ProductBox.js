import React from 'react'
import { Link } from 'react-router-dom';

function ProductBox({ item, GoDetail, miniForm, ToggleRead, read }) {
    const createMarkup = (pro) => {
        return { __html: pro };
    }

    return (

        <div className='product_box' key={item.id}>
            <div className='inner' >
                <Link to={`/product/${item.slug}`} onClick={() => { GoDetail() }}> <h3 >{item?.title}</h3> </Link>
                <div className='desc'>
                    <div dangerouslySetInnerHTML={
                        read === item.id ?
                            createMarkup(item?.description) :
                            createMarkup(item?.description.substring(0, 230))

                    }
                    ></div>
                    {(item?.description !== '' && item?.description.length > 230) &&
                        <span className={`${read === item.id ? 'read_less' : ''}`} onClick={() => ToggleRead()}>{read === item.id ? 'Read Less' : 'Read More'}</span>
                    }

                </div>

                <div className='button_box'>
                    <button className='' onClick={() => miniForm()}>Get Quote</button>

                    {item.tds_file &&
                        <a className='btn' href={`https://hutaib.admin.simboz.website/storage/${item.tds_file}`} target="_blank">Download</a>
                    }

                </div>
            </div>


        </div>
    )
}

export default ProductBox