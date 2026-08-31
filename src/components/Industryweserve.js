import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "../slider";
import "./css/Industryweserve.scss";
import furniture from "../assets/catslidericon/icons-file.png";
import machine from "../assets/catslidericon/machine.png";
import textile from "../assets/catslidericon/textile.png";
import aviation from "../assets/catslidericon/aviation.png";


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
  imagesLoaded: true,
  autoPlay: 1500
};

function Industryweserve() {
  const [slideWidth, setSlideWidth] = useState("30%");

  let industries_array = [
    {
      name: "Textile Industry",
      icon: textile,
    },
    {
      name: "Appliance Industry",
      icon: machine,
    },
    {
      name: "Aviation Industry",
      icon: aviation,
    },
    {
      name: "Furniture",
      icon: furniture,
    },
  ];

  console.log("industries_array", industries_array);

  useEffect(() => {
    console.log(window.screen.width);

    if (window.screen.width < 768) {
      setSlideWidth("80%");
      flickityOptions.wrapAround = false;

      console.log(flickityOptions);
    }
  }, []);

  return (
    <div className="Industry_Served">
      <div className="section_intro">
        <div className="title">
          <h6>
            <b>Industry</b> We Serve
          </h6>
        </div>
        <div className="description">
          <p>
            At Hutaib Industrial Solutions, we cordially cater to our
            prestigious customers in the following different industries. We
            deliver our products to diverse industries with top-tier industrial
            products solutions.
          </p>
        </div>
      </div>
      <Slider className={`industry_slider`} options={flickityOptions}>
        {industries_array?.map((ind, key2) => (
          <div
            className="industry_slide"
            style={{ width: slideWidth, height: "270px", margin: "5px 1%" }}
            key={key2}
          >
            <img src={ind?.icon} title={ind.name} alt={ind.name} />
            <p>{ind?.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Industryweserve;
