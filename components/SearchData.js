'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import ProductBox from './ProductBox';
import PopupQuoote from './PopupQuoote';
import useScrollLock from '../lib/ScrollLock';
import { useStateValue } from '../lib/StateContext';
import '../styles/searchData.scss';

export default function SearchData({ productName = '' }) {
  const [search, setSearch] = useState('');
  const [searchClick, setSearchClick] = useState(0);
  const [dat, setDat] = useState(productName);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sp, setSp] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollLock();
  const [, dispatch] = useStateValue();
  const [read, setRead] = useState('');

  useEffect(() => {
    let searchVal = dat;
    if (!searchVal && typeof window !== 'undefined') {
      searchVal = window.localStorage.getItem('search') || '';
      setDat(searchVal);
    }

    if (searchVal) {
      setLoading(true);
      const subapplicationform = new FormData();
      subapplicationform.append('search', searchVal);

      Axios.post(`https://hutaib.admin.simboz.website/api/search/`, subapplicationform)
        .then((res) => {
          setData(res.data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Search error:', err);
          setLoading(false);
        });
    }
  }, [searchClick, dat]);

  const GoDetail = (item) => {
    dispatch({
      type: 'SET_PRODUCT',
      Product: item,
    });
  };

  const ToggleRead = (item) => {
    if (read === item.id) {
      setRead(false);
    } else {
      setRead(item.id);
    }
  };

  const miniForm = (item) => {
    setIsOpen(true);
    setSp(item);
    blockScroll();
  };

  const getSearchVal = (e) => {
    setSearch(e.target.value);
  };

  const EnterPress = (e) => {
    if (e.code === 'Enter' || e.charCode === 13) {
      GoSearch();
    }
  };

  const GoSearch = () => {
    if (search.length > 0) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('search', search);
      }
      setSearchClick((prev) => prev + 1);
      setDat(search);
    }
  };

  return (
    <div className="search">
      <div className="SearchBanner">
        <h5>
          Results for: <span>{dat}</span>
        </h5>
        <h5>
          <Link className="hedisix" href="/product-category/construction-chemicals">
            Explore More Products
          </Link>
        </h5>
        {data.length > 0 ? (
          <div className="search_field">
            <input
              onKeyPress={EnterPress}
              onChange={getSearchVal}
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
                  <p>Contact us for more details</p>{' '}
                </a>
                <div className="search_field">
                  <input
                    onKeyPress={EnterPress}
                    onChange={getSearchVal}
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
          <div className="loader_container">
            <img className="product_loader" src="/assets/images/loader.gif" alt="Loading..." />
          </div>
        )}
      </div>
    </div>
  );
}
