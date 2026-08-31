import React from "react";
import "./css/CareerBanner.scss";
import SearchField from "./SearchField";

function CareerBanner() {
  return (
    <div className="CareerBanner" role="img" aria-label="Join Hutaib Team" title='Join Hutaib Team' >
      <div className="banner_inner">{/* <SearchField  /> */}</div>
    </div>
  );
}

export default CareerBanner;
