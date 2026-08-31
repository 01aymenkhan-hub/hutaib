import React, { useEffect, useState } from "react";
import ProductsBanner from "../components/ProductsBanner";
import ProductsMainArea from "../components/ProductsMainArea";
import { Helmet } from "react-helmet";
import { json } from "react-router-dom";

function Products() {
  // let [metadata, setMetadata] = useState({
  //   title: "",
  //   desc: "",
  // });

  let comurl = window.location.href;
  let customurl = comurl.split("-").join(" ");

  let url = window.location.href.split("/").pop();
  useEffect(() => {
    let sttop = () => {
      window.scrollTo(0, 0);
    };
    sttop();
    // console.log(url, '=>>>>>>>>>>>>>>')

    // if (url == "construction-chemicals") {
    //   setMetadata({
    //     title: "Construction Chemicals Manufacturers & Suppliers in Pakistan",
    //     desc: "We deal with construction chemicals Manufacturers in Pakistan and stay at the top of rivalry amongst the construction chemical suppliers with quality products.",
    //   });
    // } else if (url === "momentive-amino-functional-fluid") {
    //   setMetadata({
    //     title: "Momentive Amine Functional Silicone Fluids Suppliers | Hutaib",
    //     desc: "Leading amongst the Momentane silicone fluid oil suppliers and manufacturers with Momentive Amino Silicone Fluids are made to soften your textile industry. ",
    //   });
    // } else if (url === "hydrophilic-oil") {
    //   setMetadata({
    //     title: "Momentive Hydrophilic Silicone Softener for Textiles | Hutaib",
    //     desc: "We give extra handfeel softness with these excellent quality co-polymers: Momentive hydrophilic silicone oil and hydrophilic silicone softener for textiles. ",
    //   });
    // } else if (url === "softeners-for-textile") {
    //   setMetadata({
    //     title: "Silicone Softener for Textiles Industry in Pakistan | Hutaib",
    //     desc: "Amongst prominent textile softeners manufacturers and suppliers, our industrial fabric softener emulsions rank the top and sell at competitive price.",
    //   });
    // } else if (url === "other-portfolio") {
    //   setMetadata({
    //     title: "Hutaib Other Chemicals of Softeners and Co-Polymers",
    //     desc: "We supply the smoothest textile softening chemicals and excellent quality epoxies, efficient oleic acids, DETA and copolymer petrochemicals all over Pakistan.",
    //   });
    // } else if (url === "epoxy-flooring") {
    //   setMetadata({
    //     title: "Epoxy Flooring Manufacturers and Suppliers in Pakistan",
    //     desc: "Leading in epoxy flooring in Pakistan and ranks at the top amongst the prominent epoxy flooring manufacturers and suppliers with adhesive chemical properties.",
    //   });
    // } else if (url === "surfactant-chemicals") {
    //   setMetadata({
    //     title: "Surfactant Chemicals Manufacturers Suppliers in Pakistan",
    //     desc: "Amongst the topmost surfactant chemicals Manufacturers, we rival the well-known surfactant suppliers in Pakistan with biodegradable nonionic products.",
    //   });
    // } else if (url === "polydimethylsiloxane") {
    //   setMetadata({
    //     title: "Polydimethylsiloxane Chemicals Suppliers in Pakistan | Hutaib",
    //     desc: "Ruling as one of the most interactive PDMS chemicals suppliers challenging highly-ranked polydimethylsiloxane manufacturers in Pakistan at a competitive cost.",
    //   });
    // } else if (url === "silicone-oil") {
    //   setMetadata({
    //     title: "Silicone Oil Manufacturers and Suppliers in Pakistan | Hutaib",
    //     desc: "We corporate with alternative textile silicone oil manufacturers acting as one of the top-ranking suppliers, catering to best silicone oil in Pakistan. ",
    //   });
    // } else if (url === "products") {
    //   setMetadata({
    //     title: "Hutaib Product Categories",
    //     desc: "",
    //   });
    // } else {
    //   setMetadata({
    //     title: "Textile Chemicals Manufacturers and Suppliers in Pakistan",
    //     desc: "Hutaib industrial solutions is a distinguished chemical supplier in Pakistan dealing with textile chemicals manufacturers, and offers broad range of chemicals.",
    //   });
    // }
  }, [url]);

  // let schemadata = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "WebPage",
  //       url: comurl,
  //       name: metadata.title,
  //       description: metadata.desc,
  //       inLanguage: "en-US",
  //       potentialAction: [{ "@type": "ReadAction", target: comurl }],
  //     },
  //   ],
  // };
  return (
    <div className="Products">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.desc}
          data-react-helmet="true"
        />

        <script type="application/ld+json">{JSON.stringify(schemadata)}</script>

        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://hutaib.org/assets/images/products_banner.png"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content={metadata.desc}
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content={metadata.title}
        />
        <meta
          data-react-helmet="true"
          property="twitter:creator"
          content="@Hutaib"
        />
        <meta
          data-react-helmet="true"
          property="twitter:site"
          content="@Hutaib"
        />
        <meta
          data-react-helmet="true"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://hutaib.org/assets/images/products_banner.png"
        />
        <meta data-react-helmet="true" property="og:url" content={comurl} />
        <meta
          data-react-helmet="true"
          property="og:description"
          content={metadata.desc}
        />

        <meta
          data-react-helmet="true"
          property="og:title"
          content={metadata.title}
        />
        <meta
          data-react-helmet="true"
          property="og:site_name"
          content="Hutaib"
        />
        <meta
          data-react-helmet="true"
          property="fb:app_id"
          content="Hutaib Industrial Solutions"
        />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <link data-react-helmet="true" rel="canonical" href={comurl} />
      </Helmet> */}
      <ProductsBanner data={url} />
      <ProductsMainArea />
    </div>
  );
}

export default Products;
