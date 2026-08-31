import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/TopProducts.scss";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
function TopProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    Axios.get("https://hutaib.admin.simboz.website/api/products/featured")
      .then((res) => {
        // console.log(res.data.products);

        setProducts(res.data.products);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <section className="TopProducts">
      <div className="section_intro">
        <div className="title">
          <h6>
            Our <b>Top Products </b>
          </h6>
        </div>
        <div className="desc">
          <p>
            Our selection of quality chemicals along with our services is what
            we are known for
          </p>
        </div>
      </div>

      <div className="products_list">
        {products?.map((item, key) => (
          <ProductRow
            key={item.id}
            item={item}
            image={`./assets/images/product${key + 1}.webp`}
          />
        ))}
      </div>

      <div className="rel">
        <Link to="/products">
          <svg className="arrow">
            <path fill="white" className="a1" d="M0 0 L30 22 L60 0"></path>
            <path className="a2" d="M0 20 L30 42 L60 20"></path>
            <path className="a3" d="M0 40 L30 62 L60 40"></path>
            <h3 className="explore">
              Explore More Products
              <FaArrowRight className="faicon" />
            </h3>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default TopProducts;
