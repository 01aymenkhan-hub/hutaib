import React from "react";
import "./css/comcare.scss";
import contact from "../assets/contact_us.jpg";
import career_banner1 from "../assets/career_banner1.jpg";
import career from "../assets/career.jpg";

import { Link } from "react-router-dom";

function comcare() {
  return (
    <div className="concare">
      <div className="concarewrap">
        <div
          style={{ backgroundImage: `url(${contact})` }}
          className="concareleft"
          role="img" aria-label="Contact Us" title='Contact Us'
        >
          <Link to="/contact">
            <button className="lbtn">Contact Us</button>
          </Link>
        </div>
        <div
          style={{ backgroundImage: `url(${career})` }}
          className="concareright"
          role="img" aria-label="Join Our Team" title='Join Our Team'
        >
          <Link to="/career">
            <button className="lbtn">JOIN OUR TEAM</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default comcare;
