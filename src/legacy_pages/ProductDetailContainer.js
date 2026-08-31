import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import ProductsBanner from "../components/ProductsBanner";
import { useStateValue } from "../StateProvider";
import Axios from "axios";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { subCategoryProductsSchemas } from "../components/subCategoryProductSchema";

function ProductDetailContainer() {
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const { pathname } = useLocation();

  const path = `${pathname}/`;
  console.log({ path });
  const productPageSchema = subCategoryProductsSchemas[path];
  console.log({productPageSchema})
  const [{ Product }, dispatch] = useStateValue();
  const [Prod, SetProd] = useState("");
  let comurl = window.location.href;

  useEffect(() => {
    console.log("location:", pathname);
    let product_id = getLastItem(window.location.pathname);
    let formData = new FormData();
    formData.append("search", product_id);
    Axios.post(
      `https://hutaib.admin.simboz.website/public/api/search`,
      formData,
    )
      .then((res) => {
        dispatch({
          type: "SET_PRODUCT",
          Product: res.data.products[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {Product
            ? Product.meta_title
              ? Product.meta_title
              : Product.title
            : ""}
        </title>
        <meta
          name="description"
          content={
            Product
              ? Product.meta_description
                ? Product.meta_description
                : Product.product_desc
              : ""
          }
          data-react-helmet="true"
        />
        <meta name="robots" content="index, follow" />
        <link data-react-helmet="true" rel="canonical" href={comurl} />


        {productPageSchema && (
          <script type="application/ld+json">
            {JSON.stringify(productPageSchema)}
          </script>
        )}

        
        {/* open graph data */}
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content={
            Product
              ? Product.meta_title
                ? Product.meta_title
                : Product.title
              : ""
          }
        />
        <meta
          property="og:description"
          content={
            Product
              ? Product.meta_description
                ? Product.meta_description
                : Product.product_desc
              : ""
          }
        />
        <meta property="og:url" content={comurl} />
        <meta
          property="og:image"
          content="https://hutaib.org/static/media/product.273b4c95.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,minimum-scale=1"
        />
        <meta property="og:url" content={comurl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            Product
              ? Product.meta_title
                ? Product.meta_title
                : Product.title
              : ""
          }
        />
        <meta
          property="og:description"
          content={
            Product
              ? Product.meta_description
                ? Product.meta_description
                : Product.product_desc
              : ""
          }
        />
        <meta
          property="og:image"
          content="https://hutaib.org/static/media/product.273b4c95.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://hutaib.org/" />
        <meta property="twitter:url" content={comurl} />
        <meta
          name="twitter:title"
          content={
            Product
              ? Product.meta_title
                ? Product.meta_title
                : Product.title
              : ""
          }
        />
        <meta
          name="twitter:description"
          content={
            Product
              ? Product.meta_description
                ? Product.meta_description
                : Product.product_desc
              : ""
          }
        />{" "}
        <meta
          name="twitter:image"
          content="https://hutaib.org/static/media/product.273b4c95.jpg"
        />
        {/* open graph data */}
      </Helmet>

      {Product ? (
        <ProductDetails product={Product ? Product : Prod} />
      ) : (
        <div
          className="loader_container"
          style={{
            width: "100vw",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="product_loader" src="../assets/images/loader.gif" />
        </div>
      )}
    </div>
  );
}

export default ProductDetailContainer;
