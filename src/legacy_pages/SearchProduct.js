import React from "react";
// import Axios from "axios";
// import ProductsBanner from "../components/ProductsBanner";
import SearchData from "../SearchData";

function SearchProduct() {
  const search = window.localStorage.getItem('search');

  const productName = search;
  // console.log(search);

  // console.log(productName);
  return (
    <div className="searchpage">
      {/* <ProductsBanner isSearch={true} /> */}

      <SearchData productName={productName} />
    </div>
  );
}

export default SearchProduct;
