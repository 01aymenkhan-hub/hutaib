// import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import "./css/HomeAboutSection.scss";

function HomeAboutSection() {
  const [over, setOver] = useState(false);
  const IconMouse = (no) => {
    // console.log(no);
    setOver(no);
  };
  return (
    <div className="HomeAboutSection">
      <div className="section_top">
        <div className="title">
          <h6>
            {" "}
            <b>About</b> Us{" "}
          </h6>
        </div>
        <div className="desc">
          <p>
            Hutaib Industrial Solutions was established in the year 1997. We
            source different chemicals that are actually designed to meet your
            needs. We evolve at the top of the market by delivering accurate
            solutions at the appropriate time.
          </p>
        </div>
      </div>

      <div className="section_main" role="img" aria-label='Textile Chemicals Suppliers' title='Textile Chemicals Suppliers'>
        <div className="icons_container">
          <div className="inner">
            <div
              className="icon_box"
              onMouseOver={() => IconMouse("1")}
              onMouseLeave={() => setOver(false)}
            >
              <div className="inner">
                <img
                  src={
                    over == "1"
                      ? `./assets/images/hover/High-Quality.webp`
                      : `./assets/images/icons/High-Quality.webp`

                  }
                  alt='Quality Products'
                  title="Quality Products"
                />
                <h4>Quality Products</h4>
              </div>
            </div>
            <div
              className="icon_box selected"
              onMouseOver={() => IconMouse("2")}
              onMouseLeave={() => setOver(false)}
            >
              <div className="inner">
                <img
                  src={
                    over == "2"
                      ? `./assets/images/hover/innovation.webp`
                      : `./assets/images/icons/innovation.webp`
                  }
                  title='Resources'
                  alt="Resources"
                />
                <h4>Resources</h4>
              </div>
            </div>
            <div
              className="icon_box"
              onMouseOver={() => IconMouse("3")}
              onMouseLeave={() => setOver(false)}
            >
              <div className="inner">
                <img
                  src={
                    over == "3"
                      ? `./assets/images/hover/certification.webp`
                      : `./assets/images/icons/certification.webp`
                  }
                  title='Compliance'
                  alt="Compliance"
                />
                <h4>Compliance</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
