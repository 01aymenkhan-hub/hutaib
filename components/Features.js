import React from 'react';
import '../styles/Features.scss';

export default function Features() {
  return (
    <div className="features_container">
      <div className="image_sec">
        <div>
          <img src="/assets/images/featureimage.jpg" alt="Hutaib Industrial Solutions" title="Hutaib Industrial Solutions" />
        </div>
      </div>
      <div className="description">
        <h3>About</h3>
        <h1>Hutaib Industrial Solutions</h1>
        <p className="feature_para">
          Established in July 1997, we have proven our mettle in a short span with pure determination, professional skills, and building sound relations with our customers and suppliers. <br />
          Hutaib Industrial Solutions is a team of dynamic and professional individuals who strive to deliver the best services to the manufacturing industry with the need for quality Polymers and Chemicals.
          <br />
          The rapidly growing manufacturing industry demands faster and more efficient means to source materials, and fortunately, they already have one company that appreciates their needs. We at Hutaib Industrial Solutions accept the challenge and help our customers save time and money through our excellent Commercial, Technical, and E-Services.
          <br />
          Hutaib Industrial Solutions is determined to become the most competitive and reliable source of the highest quality materials to our customers from some of our globally famous manufacturers & suppliers. Our ideally equipped team of professionals enables us to keep our International Suppliers updated with the current needs of our fast-developing markets to deliver the right product at the right time.
        </p>
      </div>
    </div>
  );
}
