import React, { useEffect, useState } from "react";
import "./ConstructionChemicals.scss";
import SupplementaryServices from "../components/SupplementaryServices";
import { Helmet } from "react-helmet";
import Axios from "axios";

const TextileChemical = () => {
  let mapData = {
    title: "Textile <span> Chemicals</span>",
    desc: "Hutaib Industrial Solutions offers a broad spectrum of top-tier chemicals, developed to meet the dynamic needs of multiple industries.",
    mapItem: [
      {
        title: "Amino Functional Fluids",
        description:
          "These silicone-based fluids enhance softness, elasticity, and smoothness in fabrics, making them ideal for premium textile finishes.",
        slug: "momentive-amino-functional-fluid",
        localImage: "/assets/images/aminoFunctional.webp",
      },
      {
        title: "Block Silicone Fluids",
        description:
          "Designed for durable softness and excellent surface smoothness, block silicone fluids offer improved washing durability and compatibility in textile processing.",
        slug: "silicone-oil",
        localImage: "/assets/images/blockSiliconeFluid.webp",
      },
      {
        title: "Hydrophilic",
        description:
          "These finishes allow fabrics to absorb and wick moisture effectively, enhancing comfort, especially in sportswear and activewear.",
        slug: "hydrophilic-oil",
        localImage: "/assets/images/hydrocloric.webp",
      },
      {
        title: "PDMS Emulsion",
        description:
          "A high-performance silicone emulsion that imparts a silky, smooth touch to textiles while boosting fabric strength and flexibility.",
        slug: "polydimethylsiloxane",
        localImage: "/assets/images/Polydimethylsiloxane.webp",
      },
      {
        title: "Softener",
        description:
          "Our textile softeners reduce fabric stiffness, improve drape, and deliver a pleasant hand feel, suitable for a wide range of fabric types.",
        slug: "softeners-for-textile",
        localImage: "/assets/images/Softener.webp",
      },
      {
        title: "Surfactants",
        description:
          "Our surfactants optimize wetting, emulsification, and cleaning processes, ensuring efficient textile treatment and enhanced fabric quality.",
        slug: "surfactants",
        localImage: "/assets/images/Surfactants.webp",
      },
    ],
  };

  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  let getdata = () => {
    Axios.get("https://hutaib.admin.simboz.website/api/products/get-products")
      .then((res) => {
        let data = res.data.cats;
        let url = window.location.href.split("/").at(-1);
        let filterData = data?.filter((item) => item.slug == url);
        setSelectedSubcategory(filterData[0]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {selectedSubcategory && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{selectedSubcategory.meta_title}</title>
            <meta
              name="description"
              content={selectedSubcategory.meta_description}
              data-react-helmet="true"
            />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "CollectionPage",
                  "@id":
                    "https://hutaib.org/product-category/textile-chemical#collectionpage",
                  url: "https://hutaib.org/product-category/textile-chemical",
                  name: "Textile Chemicals",
                  headline:
                    "Textile Chemicals for Fabric Quality & Finishing in Pakistan",
                  description:
                    "Textile chemicals from Hutaib Industrial Solutions Pakistan. We supply Amino Functional Fluids, Block Silicone Fluids, Hydrophilic Oils, PDMS Emulsions, Softeners, and Surfactants for fabric finishing, softness, lubrication, water absorbency, and textile processing applications.",
                  isPartOf: {
                    "@type": "WebSite",
                    name: "Hutaib Industrial Solutions",
                    url: "https://hutaib.org/",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Hutaib Industrial Solutions",
                    url: "https://hutaib.org/",
                  },
                  mainEntity: {
                    "@type": "ItemList",
                    name: "Textile Chemicals Categories",
                    numberOfItems: 6,
                    itemListOrder: "https://schema.org/ItemListOrderAscending",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Amino Functional Fluids",
                        url: "https://hutaib.org/product-category/momentive-amino-functional-fluid",
                      },
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: "Block Silicone Fluids",
                        url: "https://hutaib.org/product-category/silicone-oil",
                      },
                      {
                        "@type": "ListItem",
                        position: 3,
                        name: "Hydrophilic",
                        url: "https://hutaib.org/product-category/hydrophilic-oil",
                      },
                      {
                        "@type": "ListItem",
                        position: 4,
                        name: "PDMS Emulsion",
                        url: "https://hutaib.org/product-category/polydimethylsiloxane",
                      },
                      {
                        "@type": "ListItem",
                        position: 5,
                        name: "Softener",
                        url: "https://hutaib.org/product-category/softeners-for-textile",
                      },
                      {
                        "@type": "ListItem",
                        position: 6,
                        name: "Surfactants",
                        url: "https://hutaib.org/product-category/surfactants",
                      },
                    ],
                  },
                }),
              }}
            />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "@id":
                    "https://hutaib.org/product-category/textile-chemical/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://hutaib.org/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Textile Chemicals",
                      item: "https://hutaib.org/product-category/textile-chemical",
                    },
                  ],
                }),
              }}
            />

            <meta
              data-react-helmet="true"
              property="twitter:image"
              content="https://hutaib.org/assets/images/products_banner.png"
            />
            <meta
              data-react-helmet="true"
              property="twitter:description"
              content={selectedSubcategory.meta_description}
            />
            <meta
              data-react-helmet="true"
              property="twitter:title"
              content={selectedSubcategory.meta_title}
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
            <meta
              data-react-helmet="true"
              property="og:url"
              content={`https://hutaib.org/product-category/${selectedSubcategory.slug}`}
            />
            <meta
              data-react-helmet="true"
              property="og:description"
              content={selectedSubcategory.meta_description}
            />

            <meta
              data-react-helmet="true"
              property="og:title"
              content={selectedSubcategory.meta_title}
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
            <meta
              data-react-helmet="true"
              property="og:type"
              content="website"
            />
            <link
              data-react-helmet="true"
              rel="canonical"
              href={`https://hutaib.org/product-category/${selectedSubcategory.slug}`}
            />
          </Helmet>
          <div className="Wrapme">
            <SupplementaryServices data={mapData} />

            {selectedSubcategory.meta_footer ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedSubcategory.meta_footer,
                }}
                className="seocontent"
              ></div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default TextileChemical;
