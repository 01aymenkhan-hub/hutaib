import React, { useEffect, useState } from "react";
import "./ConstructionChemicals.scss";
import SupplementaryServices from "../components/SupplementaryServices";
import { Helmet } from "react-helmet";
import Axios from "axios";

const ConstructionChemicals = () => {
  let mapData = {
    title: "Construction <span> Chemicals</span>",
    desc: "Hutaib Industrial Solutions offers a broad spectrum of top-tier chemicals, developed to meet the dynamic needs of multiple industries.",
    mapItem: [
      {
        title: "Epoxy Resin",
        description:
          "A high-strength bonding agent ideal for structural repairs, coatings, and chemical-resistant applications.",
        slug: "epoxy-resin",
        localImage: "/assets/images/Epoxy.webp",
      },
      {
        title: "Admixture",
        description:
          "A performance-enhancing additive that improves concrete workability, strength, and setting time.",
        slug: "admixture",
        localImage: "/assets/images/admixture.webp",
      },
      {
        title: "RDP Grades",
        description:
          "Redispersible Polymer Powders (RDP) enhance mortar flexibility, adhesion, and crack resistance. They are perfect for tile adhesives, renders, and self-leveling compounds.",
        slug: "rdp-grades",
        localImage: "/assets/images/RDPGRADES.webp",
      },
      {
        title: "SBR Grades",
        description:
          "SBR (Styrene-Butadiene Rubber) grades provide high elasticity, abrasion resistance, and bonding strength. Commonly used in adhesives, sealants, and flooring applications.",
        slug: "sbr-grades",
        localImage: "/assets/images/SBRGRADES.webp",
      },
      {
        title: "Styrene Acrylic",
        description:
          "Styrene acrylic polymers offer excellent adhesion, water resistance, and flexibility. Ideal for coatings, paints, and construction emulsions.",
        slug: "styrene-acrylic",
        localImage: "/assets/images/StyreneAcrylic.webp",
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
                    "https://hutaib.org/product-category/construction-chemicals#collectionpage",
                  url: "https://hutaib.org/product-category/construction-chemicals",
                  name: "Construction Chemicals",
                  headline:
                    "Construction Chemicals in Pakistan – Durable & Affordable",
                  description:
                    "Construction chemicals from Hutaib Industrial Solutions Pakistan. We supply Epoxy Resin, Admixture, RDP Grades, SBR Grades, and Styrene Acrylic for concrete protection, waterproofing, repair, and industrial flooring applications.",
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
                    name: "Construction Chemicals Categories",
                    numberOfItems: 5,
                    itemListOrder: "https://schema.org/ItemListOrderAscending",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Epoxy Resin",
                        url: "https://hutaib.org/product-category/epoxy-resin",
                      },
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: "Admixture",
                        url: "https://hutaib.org/product-category/admixture",
                      },
                      {
                        "@type": "ListItem",
                        position: 3,
                        name: "RDP Grades",
                        url: "https://hutaib.org/product-category/rdp-grades",
                      },
                      {
                        "@type": "ListItem",
                        position: 4,
                        name: "SBR Grades",
                        url: "https://hutaib.org/product-category/sbr-grades",
                      },
                      {
                        "@type": "ListItem",
                        position: 5,
                        name: "Styrene Acrylic",
                        url: "https://hutaib.org/product-category/styrene-acrylic",
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
                    "https://hutaib.org/product-category/construction-chemicals/#breadcrumb",
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
                      name: "Construction Chemicals",
                      item: "https://hutaib.org/product-category/construction-chemicals",
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

export default ConstructionChemicals;
