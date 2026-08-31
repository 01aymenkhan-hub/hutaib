import React from "react";
import "./css/AboutMainArea.scss";
import { FaRegNewspaper, FaShip, FaCannabis, FaChartPie } from "react-icons/fa";

const AboutMainArea = () => {
  return (
    <div className="main_area_container">
      <div className="aboutus_heading">
        <h1>get to know us</h1>
        <span className="line"></span>
      </div>
      <div className="aboutus_info">
        <div className="social">
          <FaRegNewspaper size="2.5em" className="icons" />
          <h3>RAW MATERIAL</h3>
          
        </div>
        <div className="social">
          <FaShip size="2.5em" className="icons" />
          <h3>GLOBAL SUPPLIER NETWORK</h3>
      
        </div>
        <div className="social">
          <FaCannabis size="2.5em" className="icons" />
          <h3>OUR PROCESS</h3>
      
        </div>
      </div>
    </div>
  );
};

export default AboutMainArea;
