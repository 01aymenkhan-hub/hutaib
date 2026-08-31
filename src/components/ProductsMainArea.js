import React, { useEffect, useState } from "react";
import "./css/ProductsMainArea.scss";
import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import PopupQuoote from "./PopupQuoote";
import { FaChevronRight } from "react-icons/fa";
import ScrollLock from "../ScrollLock.js";
import { useStateValue } from "../StateProvider";
import ProductBox from "./ProductBox";
import "./css/ProductBox.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SupplementaryServices from "./SupplementaryServices.jsx";
import { subCategorySchemas } from "./subCategorySchema.js";
import { subCategoryBreadcrumbs } from "./subCategoryBreadcrumbs.js";

//   main product area

function Tab(props) {
  const [{ Product }, dispatch] = useStateValue();

  const [blockScroll, allowScroll] = ScrollLock();

  const [read, setRead] = useState("");

  const ToggleRead = (item) => {
    if (read == item.id) {
      setRead(false);
    } else {
      setRead(item.id);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const miniForm = (item) => {
    setIsOpen(true);
    setSp(item);
    blockScroll();
  };
  const [sp, setSp] = useState({});
  const [mp, setMp] = useState([]);

  const GoDetail = (item) => {
    dispatch({
      type: "SET_PRODUCT",
      Product: item,
    });
  };

  return (
    <div className={`tabs__content`}>
      {props.tab.products
        ? props.tab.products.map((item) => (
            <ProductBox
              key={item.id}
              item={item}
              GoDetail={() => {
                GoDetail(item);
              }}
              miniForm={() => {
                miniForm(item);
              }}
              ToggleRead={() => {
                ToggleRead(item);
              }}
              read={read}
            />
          ))
        : null}

      <PopupQuoote
        open={isOpen}
        allowScroll={allowScroll}
        onClose={() => {
          setIsOpen(false);
        }}
        product={sp}
      />
    </div>
  );
}

function ProductsMainArea() {
  const [Tabs, setTabs] = useState([]);
  const [seoSchema, setSeoSchema] = useState(null);
  const [seoBreadcrumb, setSeoBreadcrumb] = useState(null);
  let url = window.location.href.split("/").pop();
  const { pathname } = useLocation();

  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [activeCat, setActiveCat] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedSubcategory?.slug) return;

    const path = `/product-category/${selectedSubcategory.slug}/`;

    const schema = subCategorySchemas[path] || null;
    const breadcrumb = subCategoryBreadcrumbs[path] || null;

    setSeoSchema(schema);
    setSeoBreadcrumb(breadcrumb);
  }, [selectedSubcategory]);
  
  // navigate(`/product-category/${item.slug}`);
  useEffect(() => {
    Axios.get("https://hutaib.admin.simboz.website/api/products/get-products")
      .then((res) => {
        setTabs(res.data.cats);
        let pro = res.data.cats;
        console.log('hello', res.data.cats)
        localStorage.setItem("Category", JSON.stringify(pro));
        for (let a = 0; a <= pro.length - 1; a++) {
          if (url.trim() === pro[a].slug.trim()) {
            if (pro[a].products.length > 0) {
              setSelectedSubcategory(pro[a]);
            } else {
              setSelectedSubcategory(pro[a]);
            }
            console.log("Test Pass");
            break;
          } else {
            for (let b = 0; b <= pro[a].subcategories.length - 1; b++) {
              // console.log(pro[a].subcategories[b], "Test")
              if (url.trim() === pro[a].subcategories[b].slug.trim()) {
                setSelectedSubcategory(pro[a].subcategories[b]);
              }
            }
            console.log("Test Fail");
          }
        }
      })
      .catch((err) => {});
    // https://hutaib.admin.simboz.website/api/products/get-cat-pro/${url}
  }, [url]);

  let showProducts = (e, data) => {
    if (data.products.length > 0) {
      setSelectedSubcategory(data);
    } else {
      navigate(`/product-category/${data.slug}`);
    }
  };

  let [slideOut, setSlideOut] = useState(false);

  let [metadata, setMetadata] = useState({
    title: "",
    desc: "",
  });
  let comurl = window.location.href;

  const cleanPath = pathname.endsWith("/") ? pathname : pathname + "/";

  const schemaData = subCategorySchemas[cleanPath] || null;
  const breadcrumbData = subCategoryBreadcrumbs[cleanPath] || null;
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{selectedSubcategory.meta_title}</title>
        <meta
          name="description"
          content={selectedSubcategory.meta_description}
          data-react-helmet="true"
        />

        {/*  SCHEMA */}
        {seoSchema && (
          <script type="application/ld+json">
            {JSON.stringify(seoSchema)}
          </script>
        )}

        {/*  BREADCRUMB */}
        {seoBreadcrumb && (
          <script type="application/ld+json">
            {JSON.stringify(seoBreadcrumb)}
          </script>
        )}

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
        <meta data-react-helmet="true" property="og:url" content={comurl} />
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
        <meta data-react-helmet="true" property="og:type" content="website" />
        <link data-react-helmet="true" rel="canonical" href={comurl} />
      </Helmet>
      <div className="ProductsMainArea">
        {/* working code */}
        {Tabs.length > 0 ? (
          <div className="inner">
            <div
              className={slideOut ? "category_side slideOut" : "category_side "}
            >
              <div
                className="handleController"
                onClick={() => {
                  setSlideOut(!slideOut);
                }}
              >
                <FaChevronRight className="iconToggle" />
              </div>
              <div className="inner">
                <div className={`tabs`}>
                  <ul>
                    {Tabs.map((item, index) => {
                      return (
                        <li key={index}>
                          <span
                            className={
                              item.id == selectedSubcategory.id
                                ? "listItem activeBtn"
                                : "listItem mainCate"
                            }
                            onClick={(e) => showProducts(e, item)}
                          >
                            {item.category}
                          </span>
                          {item.subcategories ? (
                            <ul>
                              {item.subcategories.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <span
                                      className={
                                        item.id == selectedSubcategory.id
                                          ? "listItem activeBtn"
                                          : "listItem"
                                      }
                                      onClick={(e) => showProducts(e, item)}
                                    >
                                      {item.category}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="product_side">
              <div className="inner">
                <Tab tab={selectedSubcategory} />
                {console.log(selectedSubcategory, "selectedSubcategory")}
                {selectedSubcategory.meta_footer ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedSubcategory.meta_footer,
                    }}
                    className="seocontent"
                  ></div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="loader_container">
            <img className="product_loader" src="../assets/images/loader.gif" />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsMainArea;
