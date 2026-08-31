import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./searchData.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import PopupQuoote from "./components/PopupQuoote";
import ScrollLock from "./ScrollLock";
import ProductBox from "./components/ProductBox";
import { FiSearch } from "react-icons/fi";
// import { useHistory } from "react-router-dom";

function SearchData({ productName }) {
  const [search, Setsearch] = useState(false);
  const [searchClick, SetsearchClick] = useState(0);
  const [dat, setDat] = useState(productName);
  // const productName = useParams()

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    async function () {
      setLoading(true);
      // console.log(dat, "asdasdasdasdasdasdasdsdaadasdasdas");
      let b = window.localStorage.getItem("search");
      // setDat(b);

      console.log(b, "asdasdasdasdasdasdasdsdaadasdasdas");

      // console.log(b, "5646532132131321325");

      if (dat != "") {
        const subapplicationform = new FormData();

        subapplicationform.append("search", dat);

        await axios
          .post(
            `https://hutaib.admin.simboz.website/api/search/`,
            subapplicationform
          )
          .then((res) => {
            // console.log("resssxzcxsss", res);

            // console.log("ressswqes", res.data);

            console.log("ressss", res.data.products);

            setData(res.data.products);
            setLoading(false);
          })
          .catch((err) => {
            // console.log(err);

            setLoading(false);
          });
        // SetsearchClick(false);
      }
    },
    [searchClick]
  );
  console.log("data ==========> ", data);

  const createMarkup = (pro) => {
    return { __html: pro };
  };
  const [sp, setSp] = useState({});
  const [mp, setMp] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = ScrollLock();
  const [{ Product }, dispatch] = useStateValue();

  const GoDetail = (item) => {
    dispatch({
      type: "SET_PRODUCT",
      Product: item,
    });
  };

  const [read, setRead] = useState("");

  const ToggleRead = (item) => {
    if (read == item.id) {
      setRead(false);
    } else {
      setRead(item.id);
    }
  };
  const miniForm = (item) => {
    setIsOpen(true);
    // console.log(item)
    setSp(item);

    blockScroll();
  };

  // const history = useHistory();

  const getSearchVal = (e) => {
    Setsearch(e.target.value);
  };
  const EnterPress = (e) => {
    console.log(e);
    if (e.code == "Enter" || e.charCode == 13) {
      GoSearch();
    }
  };

  const GoSearch = () => {
    if (search.length > 0) {
      SetsearchClick(searchClick + 1);
      setDat(search);

      //   history.push(`/products/search?q=${search}`)
    }
  };

  return (
    <div className="search">
      <div className="SearchBanner">
        <h5>
          Results for: <span>{dat}</span>
        </h5>
        <h5>
          <Link className="hedisix" to="/products">
            Explore More Products
          </Link>
        </h5>
        {data.length > 0 ? (
          <div className="search_field">
            <input
              onKeyPress={(e) => EnterPress(e)}
              onKeyUp={(e) => getSearchVal(e)}
              placeholder="Search"
            />
            <button onClick={GoSearch}>
              <FiSearch />
            </button>
          </div>
        ) : null}
      </div>
      <div className="searchdiv">
        {!loading ? (
          <>
            {data.length > 0 ? (
              data.map((item) => (
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
            ) : (
              <div className="nothing_found">
                <h6>Nothing Found</h6>
                <p>Sorry, no results were found. Try another search?</p>

                <a className="ancr" href="tel:+92 309 7772468">
                  <p>Contact us for more details</p>{" "}
                </a>
                <div className="search_field">
                  <input
                    onKeyPress={(e) => EnterPress(e)}
                    onKeyUp={(e) => getSearchVal(e)}
                    placeholder="Search"
                  />
                  <button onClick={GoSearch}>
                    <FiSearch />
                  </button>
                </div>
              </div>
            )}
            <PopupQuoote
              open={isOpen}
              allowScroll={allowScroll}
              onClose={() => {
                setIsOpen(false);
              }}
              product={sp}
            />
          </>
        ) : (
          <div className={`loader_container `}>
            <img className="product_loader" src="../assets/images/loader.gif" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchData;
