import React, { useEffect, useState } from "react";
import "./css/Leftimg.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Leftimg(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { llh1, llp, llh2, leftimg, btn, title, alt } = props.data;
  const [flag, setFlag] = useState(true);

  const createMarkup = (pro) => {
    return { __html: pro };
  };
  return (
    <div>
      <div className="comleftarea">
        <div className="leftareawrap">
          <div data-aos="zoom-in-up" className="leftrightwrap">
            <img title={title} alt={alt} src={leftimg} />
          </div>
          <div className="leftleftwrap">
            <h2 className="llh1">{llh1}</h2>
            <h3 className="llh2">{llh2}</h3>
            <div
              className="llp"
              dangerouslySetInnerHTML={createMarkup(
                flag ? llp.substring(0, 250) : llp
              )}
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
        </div>
      </div>
    </div>
  );
}

export default Leftimg;
