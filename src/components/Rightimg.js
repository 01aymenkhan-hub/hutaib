import React, { useEffect, useState } from "react";
import "./css/Rightimg.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Rightimg(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { rrh1, rrh2, rrp, rightimg, btn, title, alt } = props.data;

  const [flag, setFlag] = useState(true);

  const createMarkup = (pro) => {
    return { __html: pro };
  };

  return (
    <div className="comrightarea">
      <div className="rightareawrap">
        <div className="rightleftwrap">
          <h2 className="rrh1">{rrh1}</h2>
          <h3 className="rrh2">{rrh2}</h3>
          <div
            className="rrp"
            dangerouslySetInnerHTML={createMarkup(rrp)}
          ></div>
          {btn ? (
            <button
              onClick={() => {
                setFlag(!flag);
              }}
              className="rbtn"
            >
              {flag ? "Read More" : "Read less"}
            </button>
          ) : null}
        </div>
        <div data-aos="zoom-in-up" className="rightrightwrap">
          <img title={title} alt={alt} src={rightimg} />
        </div>
      </div>
    </div>
  );
}

export default Rightimg;
