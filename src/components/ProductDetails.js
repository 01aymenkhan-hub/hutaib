import React, { useState } from "react";
import "./css/productContainer.scss";
import Image from "../assets/product.jpg";
import RelatedProducts from "./RelatedProducts";
import PopupQuoote from "./PopupQuoote.js";
import ScrollLock from "../ScrollLock.js";

function ProductDetails({ product }) {
  const createMarkup = (pro) => {
    return { __html: pro };
  };

  // console.log("products ========>", product)
  const [blockScroll, allowScroll] = ScrollLock();
  const [isOpen, setIsOpen] = useState(false);
  const [sp, setSp] = useState({});

  const miniForm = (item) => {
    setIsOpen(true);
    setSp(item);

    blockScroll();
  };

  // console.log(product, 'product')
  return (
    <div className="detailcontainer">
      <div className="mainImg">
        <img className="whimage" src={product.file ? `https://hutaib.admin.simboz.website/storage/${product.file}` : Image} alt={product.title && product.title} title={product.title && product.title} />
      </div>
      <div className="productDetails">
        <p className="heading">{product.title}</p>
        <p dangerouslySetInnerHTML={createMarkup(product.product_desc)}></p>
        {/* some extra desc */}

        <div className="cntr">
          <button onClick={miniForm} className="btn1">
            GET QUOTE
          </button>
        </div>
      </div>
      <div className="dataBtn">
        {/* {console.log(product.tds_file, 'tds file')} */}
        {product.tds_file ?
          <a
            className="btn"
            href={`https://hutaib.admin.simboz.website/storage/${product.tds_file}`}
            target="_blank"
          >
            TECHNICAL DATASHEET 
          </a> : null
        }
      </div>
      <div className="productDesc">
        <p dangerouslySetInnerHTML={createMarkup(product.key_features)}></p>
      </div>
      {/* {product.seo_des &&
        <div className="scrollCont" dangerouslySetInnerHTML={createMarkup(product.seo_des)}>
        </div>
      } */}
      {product.meta_footer ? (

        <div
          dangerouslySetInnerHTML={{ __html: product.meta_footer }}
          className="seodesc2"
        ></div>
      ) : null}
      {product.recc && (
        <>
          {product.recc.length > 0 ?
            <div className="flx">
              <h2>Related Products</h2>
            </div> : null
          }
          <RelatedProducts items={product.recc} />
        </>
      )}



      <PopupQuoote
        open={isOpen}
        allowScroll={allowScroll}
        onClose={() => {
          setIsOpen(false);
        }}
        product={product}
      />
    </div>
  );
}

export default ProductDetails;
