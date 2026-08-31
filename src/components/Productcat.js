import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "../slider";
import "./css/Productcat.scss";
import constructionchemicals from "../assets/catslidericon/constructionchemicals.png";
import epoxy from "../assets/catslidericon/epoxy.png";
import surfactants from "../assets/catslidericon/surfactants.png";
import otherportfolio from "../assets/catslidericon/otherportfolio.png";
import emulsionssoftenersforTextile from "../assets/catslidericon/emulsionssoftenersforTextile.png";
import momentivehydrophilicoil from "../assets/catslidericon/momentivehydrophilicoil.png";
import polydimethylsiloxane from "../assets/catslidericon/polydimethylsiloxane.png";
import textilesiliconefluid from "../assets/catslidericon/textilesiliconefluid.png";
import momentiveaminofunctionalfluid from "../assets/catslidericon/momentiveaminofunctionalfluid.png";
import { Link } from "react-router-dom";
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
function Productcat() {
  const [slideWidth, setSlideWidth] = useState("18%");

  let industries_array = [
    {
      name: "Construction Chemicals",
      title: "Construction Chemicals",
      alt: "Construction Chemicals",
      icon: constructionchemicals,
      link: "/product-category/construction-chemicals",
    },
    {
      name: "Textile Silicone Fluid",
      icon: textilesiliconefluid,
      link: "/product-category/silicone-oil",
      title: "Textile Silicone Oil",
      alt: "Textile Silicone Oil",
    },
    {
      name: "Momentive Amino Functional Fluid",
      icon: momentiveaminofunctionalfluid,
      link: "/product-category/momentive-amino-functional-fluid",
      title: "Momentive Amino Functional Fluid",
      alt: "Momentive Amino Functional Fluid",
    },
    {
      name: "Momentive Hydrophilic Oil",
      icon: momentivehydrophilicoil,
      link: "/product-category/hydrophilic-oil",
      title: "Hydrophilic Oil",
      alt: "Hydrophilic Oil",
    },
    {
      name: "Emulsions/softeners for Textile",
      icon: emulsionssoftenersforTextile,
      link: "/product-category/softeners-for-textile",
      title: "Silicone Softener for Textiles",
      alt: "Silicone Softener for Textiles",
    },
    {
      name: "Other Portfolio",
      icon: otherportfolio,
      link: "/product-category/other-portfolio",
      title: "Softeners and Co-Polymers",
      alt: "Softeners and Co-Polymers",
    },
    {
      name: "Epoxy",
      icon: epoxy,
      link: "/product-category/epoxy-flooring",
      title: "Epoxy Flooring",
      alt: "Epoxy Flooring",
    },
    {
      name: "Surfactants",
      icon: surfactants,
      link: "/product-category/surfactant-chemicals",
      title: "Surfactants Chemicals",
      alt: "Surfactants Chemicals",
    },
    {
      name: "Polydimethylsiloxane",
      icon: polydimethylsiloxane,
      link: "/product-category/polydimethylsiloxane",
      title: "Polydimethylsiloxane Chemicals",
      alt: "Polydimethylsiloxane Chemicals",
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
    <div className="Product_Served">
      <div className="Product_intro">
        <div className="title">
          <h6>
            <b>Product Category</b>
          </h6>
        </div>
      </div>
      <Slider className={`Product_slider`} options={flickityOptions}>
        {industries_array?.map((ind, key2) => (
          <div
            className="Product_slide"
            style={{ width: slideWidth, height: "270px", margin: "5px 1%" }}
            key={key2}
          >
            <Link to={ind.link}>
              <img src={ind?.icon} alt={ind.alt} title={ind.title} />
            </Link>
            <p style={{ textAlign: "center" }}>{ind?.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Productcat;
