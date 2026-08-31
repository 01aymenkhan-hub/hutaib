import React, { useEffect, useState } from "react";
import "./css/ProductsMainArea.scss";
import Axios from "axios";
import { Link } from "react-router-dom";
import QuoteForm from "./QuoteForm";
import PopupQuoote from "./PopupQuoote";

import ScrollLock from "../ScrollLock.js";
import { useStateValue } from "../StateProvider";
import ProductBox from "./ProductBox";
import "./css/ProductBox.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SupplementaryServices from "./SupplementaryServices.jsx";

const tabs = [
    {
        id: 1,
        name: "Adhesive",
        title:
            "Waterborne low-VOC pressure-sensitive adhesives for the toughest label applications",

        desc: `<p>Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. 
        Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her 
        cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.</p>
        <p>Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. 
        Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her 
        cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.</p>

        <ul>
            <li>Project setup </li>
            <li> Editor component</li>
            <li> Scene component</li>
            <li> Project deploy</li>

            
        </ul>

        <p>Nelsons folly lugger marooned hearties chantey lateen sail Yellow Jack gangplank starboard warp. 
        Chantey Buccaneer log warp snow booty sloop square-rigged mutiny pressgang. Yard bring a spring upon her 
        cable Sail ho clipper bounty careen galleon bilge rat reef handsomely.</p>

        
        `,

        key_features: "",
        recomended_products: "",
        cta_heading: "",
        cta_text: "",
    },
    {
        id: 2,
        name: "Logos",
        title: "Acme Logos",
        desc: `Barbary Coast hogshead port Sea Legs cackle fruit dead men tell no tales crimp poop deck transom
         flogging. Bilge water man-of-war lanyard sloop starboard hardtack no prey, no pay avast tender crack 
         Jennys tea cup. Hogshead cog aft Corsair spanker pinnace bilge water swing the lead Jack Tar Plate Fleet.`,
        key_features: "",
        recomended_products: "",
        cta_heading: "",
        cta_text: "",
    },
    {
        id: 3,
        name: "Blocks",
        title: "Blocks wireframe",
        desc: `Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of 
        the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. 
        Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.`,
        key_features: "",
        recomended_products: "",
        cta_heading: "",
        cta_text: "",
    },
];

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
        // console.log(item)
        setSp(item);

        blockScroll();
    };
    const [sp, setSp] = useState({});
    const [mp, setMp] = useState([]);

    const GoDetail = (item) => {
        // console.log('item with noi filtration',item);
        dispatch({
            type: "SET_PRODUCT",
            Product: item,
        });
        // localStorage.setItem('products', JSON.stringify(item))
        // localStorage.setItem('func',JSON.stringify(miniForm))
    };
    { console.log(props, "props") }

    return (
        <div className={`tabs__content`}>
            {/* {console.log(props, "props=>")} */}
            {props.tab.products.map((item) => (
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
            ))}

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

function Navigation(props) {
    return (
        <ul className={`tabs__nav`}>
            {props.tabs.map((item) => (
                <li
                    key={item.id}
                    className={`tabs__item ${props.activeTabId === item.id ? "active" : ""
                        } `}
                    onClick={() => props.onNavClick(item.id)}
                >
                    {console.log(item, "item")}
                    <button
                        className={`tabs__button ${props.activeTabId === item.id ? "active" : ""
                            }`}
                    >
                        {item.category}
                    </button>
                    {/* {item.subcategories ?
            <ul>
              {item.subcategories.map((item, index) => {
                return (
                  <li key={index}item></li>
                )
              })}
            </ul>
            : null
          } */}
                </li>
            ))}
        </ul>
    );
}

function ProductsMainArea() {
    const [Tabs, setTabs] = useState([]);
    let url = window.location.href.split("/").pop();
    // console.log(url, 'url')
    const [activeTabId, setActiveTab] = React.useState(tabs[0]?.id);
    const activeTab = React.useMemo(
        () => Tabs.find((tab) => tab.id === activeTabId),
        [activeTabId, tabs]
    );
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    useEffect(() => {
        setActiveTab(false);
        Axios.get("https://hutaib.admin.simboz.website/api/products/get-products")
            .then((res) => {
                // setTabs(res.data.products);
                // console.log(res.data.cats, "res.data.cats =>")
                setTabs(res.data.cats);
                let pro = res.data.cats;
                for (let a = 0; a <= pro.length - 1; a++) {
                    if (url.trim() === pro[a].slug.trim()) {
                        setActiveTab(pro[a].id);
                        break;
                    } else {
                        setActiveTab(pro[0].id);
                    }
                }
            })
            .catch((err) => {
            });

        // Axios.get(`https://hutaib.admin.simboz.website/api/products/get-cat-pro/${url}`)
        //   .then((res) => {
        //     console.log(res.data, "inner Response")
        //     setSelectedSubcategory(res.data.products)
        //   })
        //   .catch((err) => {
        //   });


    }, [url]);




    return (
        <>
            <div className="ProductsMainArea">

                {/* working code */}
                {activeTab ? (
                    <div className="inner">
                        <div className="category_side">
                            <div className="inner">
                                <div className={`tabs`}>
                                    <Navigation
                                        tabs={Tabs}
                                        onNavClick={setActiveTab}
                                        activeTabId={activeTabId}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="product_side">
                            <div className="inner">
                                <Tab tab={activeTab} />
                                {activeTab.meta ? (
                                    <div
                                        dangerouslySetInnerHTML={{ __html: activeTab.meta }}
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
            </div >
        </>
    );
}

export default ProductsMainArea;
