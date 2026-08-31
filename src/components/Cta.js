import React, { useState } from "react";
import "./css/Cta.scss";
import ScrollLock from "../ScrollLock";
import PopupQuoote from "./PopupQuoote.js";

function Cta() {
  const [blockScroll, allowScroll] = ScrollLock();
  const [isOpen, setIsOpen] = useState(false);
  const [sp, setSp] = useState({});

  const miniForm = (item) => {
    setIsOpen(true);
    // console.log(item)
    setSp(item);

    blockScroll();
  };
  const [product, setProduct] = useState({
    title: "Get Query",
  });
  return (
    <div className="getq">
      <div className="getqdata">
        <p className="getdatah2">Supplying to major customers around the globe.</p>
        <p className="getdatah4">For further brief. </p>
        <button onClick={miniForm} className="btn1">
          Get Quote
        </button>
      </div>

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

export default Cta;
