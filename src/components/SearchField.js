import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "./css/SearchField.scss";

function SearchField() {
  const history = useNavigate();
  const [search, Setsearch] = useState("");

  const getSearchVal = (e) => {
    let a = e.target.value;
    Setsearch(a);
  };

  const GoSearch = () => {
    if (search.length > 0) {
      history(`/products/search?q=${search}`)
      // history.push(`/products/search?q=${search}`);
      window.localStorage.setItem('search', search);
    }
  };

  const EnterPress = (e) => {
    console.log(e);
    if (e.code == "Enter" || e.charCode == 13) {
      GoSearch();
    }
  };
  return (
    <div className="search_area">
      <div className="title">
        <h6>
          Looking For <b> Something?</b>
        </h6>
      </div>

      <div className="search_field">
        <input
          onKeyPress={(e) => EnterPress(e)}
          onChange={(e) => getSearchVal(e)}
          placeholder="Search"
        />
        <button type="submit" onClick={GoSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchField;
