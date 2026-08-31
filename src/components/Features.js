import React from "react";
import "./css/Features.scss";
import featureimage1 from "../assets/featureimage1.jpg";
import featureimage2 from "../assets/featureimage2.jpg";
import featureimage3 from "../assets/featureimage3.jpg";
import featureimage4 from "../assets/featureimage4.jpg";
import featureimage from "../assets/featureimage.jpg";

import Leftimg from "./Leftimg.js";
import Rightimg from "./Rightimg.js";
import a from "../assets/product.jpg";

function Features() {
  const advert = {
    rrh1: "ABOUT Hutaib Industrial Solutions",
    rrh2: "",
    rrp: "<p>Established in July 1997, we have proven our mettle in a short span with pure determination, professional skills, and building sound relations with our customers and suppliers.</p><p>Hutaib Industrial Solutions is a team of dynamic and professional individuals who strive to deliver the best services to the manufacturing industry with the need for quality Polymers and Chemicals.</p><p>The rapidly growing manufacturing industry demands faster and more efficient means to source materials, and fortunately, they already have one company that appreciates their needs. We at Hutaib Industrial Solutions accept the challenge and help our customers save time and money through our excellent Commercial, Technical, and E-Services.</p><p>Hutaib Industrial Solutions is determined to become the most competitive and reliable source of the highest quality materials to our customers from some of our globally famous manufacturers & suppliers. Our ideally equipped team of professionals enables us to keep our International Suppliers updated with the current needs of our fast-developing markets to deliver the right product at the right time.</p>",
    btn: "1",
    title: "2d and 3d animation services",
    alt: "2d and 3d animation services",
    rightimg: a,
  };
  // const bestadvert = {
  //   llh1: "Best Animation and Video",
  //   llh2: "Production Company in Karachi Pakistan",
  //   llp: "<p>As you might know, video marketing is taking social media by storm, it can be difficult to make a wise choice when it comes down to partnering with the best-animated video production company. The most reliable choice for you is Artx Pro. Not only are we the most skilled 2D and 3D animated video agency, but we provide our clients with work that is nothing less than tried and tested top-quality.<br/>As an animation advertising company, we will handle the overall video production and make sure that our work is fully customized to meet your business needs, that too, at an extremely affordable rate.</p>",
  //   btn: "1",
  //   title: "2d and 3d animation company",
  //   alt: "2d and 3d animation company",
  //   leftimg: a,
  // };
  return (
    // <div className="Features">
    //   <Rightimg data={advert} />
    //   {/* <Leftimg data={bestadvert} /> */}
    // </div>

    <div className="features_container">
      <div className="image_sec">
        <div>
          <img src={featureimage} alt='Hutaib Industrial Solutions' title="Hutaib Industrial Solutions" />
        </div>
      </div>
      <div className="description">
        <h3>About</h3>
        <h1>Hutaib Industrial Solutions</h1>
        <p className="feature_para">
          Established in July 1997, we have proven our mettle in a short span
          with pure determination, professional skills, and building sound
          relations with our customers and suppliers. <br />
          Hutaib Industrial Solutions is a team of dynamic and professional
          individuals who strive to deliver the best services to the
          manufacturing industry with the need for quality Polymers and
          Chemicals.
          <br />
          The rapidly growing manufacturing industry demands faster and more
          efficient means to source materials, and fortunately, they already
          have one company that appreciates their needs. We at Hutaib Industrial
          Solutions accept the challenge and help our customers save time and
          money through our excellent Commercial, Technical, and E-Services.
          <br />
          Hutaib Industrial Solutions is determined to become the most
          competitive and reliable source of the highest quality materials to
          our customers from some of our globally famous manufacturers &
          suppliers. Our ideally equipped team of professionals enables us to
          keep our International Suppliers updated with the current needs of our
          fast-developing markets to deliver the right product at the right
          time.
        </p>
      </div>
    </div>
  );
}

export default Features;
