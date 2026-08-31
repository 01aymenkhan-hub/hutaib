import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import "./css/Slide.scss";

import logo1 from "../assets/logos/logo-7.png";
import logo2 from "../assets/logos/Hexion BV.webp";
import logo3 from "../assets/logos/Elkem.webp";
import logo4 from "../assets/logos/Bluestar.webp";
import logo5 from "../assets/logos/DOW.webp";
import logo6 from "../assets/logos/Dow Corning.webp";
import logo7 from "../assets/logos/Synthomer.webp";
import logo8 from "../assets/logos/luonda.webp";
import logo9 from "../assets/logos/Hubei Greenhome.webp";
import logo10 from "../assets/logos/Jiangsu Sanmu Grouo.webp";
import logo11 from "../assets/logos/ressi.webp";
import logo12 from "../assets/logos/Perum Peruthani.webp";
import logo13 from "../assets/logos/EcoPower China.webp";
import logo14 from "../assets/logos/Hubei Haoze.webp";
import logo15 from "../assets/logos/Nucochem.webp";
import logo16 from "../assets/logos/Rucochem.webp";
import logo17 from "../assets/logos/Ningbo Lucky.webp";
import logo18 from "../assets/logos/bostech.webp";
import logo19 from "../assets/logos/Anshika Polysurf.webp";






function Slider() {
  const [bloglist, setBloglist] = useState(5);

  //   useEffect(() => {
  //     if (window.screen.width <= 750) {
  //       setBloglist(1);
  //     } else setBloglist(5);
  //   }, []);

  useEffect(() => {
    if (window.screen.width <= 450) {
      setBloglist(1);
    } else if (window.screen.width <= 750) {
      setBloglist(2);
    } else if (window.screen.width <= 1050) {
      setBloglist(3);
    } else if (window.screen.width <= 1200) {
      setBloglist(4);
    } else setBloglist(5);
  }, []);

  // const Blogarr = [
  //   logo1,
  //   logo2,
  //   logo3,
  //   logo4,
  //   logo5,
  //   logo6,
  //   logo7,
  //   logo8,
  //   logo9,
  //   logo10,
  //   logo11,
  //   logo12,
  //   logo13,
  //   logo14,
  // ];
  const Blogarr = [
    {
      imgsrc: logo1,
      title: 'Momentive Performance Material'
    },
    {
      imgsrc: logo2,
      title: 'Hexion BV'
    }, {
      imgsrc: logo3,
      title: 'Elkem'
    }, {
      imgsrc: logo4,
      title: 'Bluestar'
    }, {
      imgsrc: logo5,
      title: 'DOW'
    }, {
      imgsrc: logo6,
      title: 'Dow Corning'
    }, {
      imgsrc: logo7,
      title: 'Synthomer'
    }, {
      imgsrc: logo8,
      title: 'Lyondell Basell'
    }, {
      imgsrc: logo9,
      title: 'Hubei Greenhome'
    }, {
      imgsrc: logo10,
      title: 'Jiangsu Sanmu Grouo'
    }, {
      imgsrc: logo11,
      title: 'Ressichem'
    },
    {
      imgsrc: logo12,
      title: 'Perum Peruthani'
    },
    {
      imgsrc: logo13,
      title: 'EcoPower China'
    },
    {
      imgsrc: logo14,
      title: 'Hubei Haoze'
    }, {
      imgsrc: logo15,
      title: 'Shanghai Nucochem'
    }, {
      imgsrc: logo16,
      title: 'Rucochem Shanghai'
    }, {
      imgsrc: logo17,
      title: 'Ningbo Lucky'
    }, {
      imgsrc: logo18,
      title: 'Bostech Polymer LLC FZ'
    }, {
      imgsrc: logo19,
      title: 'Anshika Polysurf'
    },
  ]
  return (
    <div className="Blogslider">
      <div className="slideheading">
        <h6 className="blogh2">Suppliers & Partners</h6>
      </div>
      <div className="blogslide">
        <OwlCarousel
          items={bloglist}
          autoplay="1"
          loop
          autoplayTimeout="2000"
        >
          {Blogarr.map((item, index) => {
            return <img key={index} className="imgdata" src={item.imgsrc} alt={item.title} title={item.title} />;
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Slider;
