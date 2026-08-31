import React, { useEffect, useState } from 'react'
import './css/RelatedProducts.scss'
import Slider from '../slider';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Image from "../assets/product.jpg";

const flickityOptions = {
  initialIndex: 1,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  contain: true,
  freeScroll: true,
  selectedAttraction: 0.2,
  friction: 0.8,
  lazyLoad: 1,
  imagesLoaded: true

}

function RelatedProducts({ items }) {
  const [slideWidth, setSlideWidth] = useState('20%');
  useEffect(() => {
    // console.log(window.screen.width);

    if (window.screen.width < 768) {
      setSlideWidth('80%');
      flickityOptions.wrapAround = false;



      // console.log(flickityOptions)
    }
  }, [])
  const [{ Product }, dispatch] = useStateValue();

  console.log(items);



  const GoDetail = (item) => {
    // console.log('item with noi filtration',item);

    // localStorage.setItem('func',JSON.stringify(miniForm))

    dispatch({
      type: "SET_PRODUCT",
      Product: item
    })
  }
  return (
    <div className='related_products'>
      <Slider
        className={`related_slider`}
        options={flickityOptions}
      >

        {items?.map((item, key2) => (
          <div className='related_slide' style={{ width: slideWidth, height: '270px', margin: '5px 1%' }} key={key2}>
            <Link to={`/product/${item?.slug}`} onClick={() => { GoDetail(item) }}>
              <img src={Image} alt={item.title} title={item.title} />

              <h4>{item?.title}</h4>

            </Link>
          </div>

        ))}

      </Slider>
    </div>
  )
}

export default RelatedProducts