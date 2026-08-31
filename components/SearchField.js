'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import '../styles/SearchField.scss';

export default function SearchField() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const getSearchVal = (e) => {
    setSearch(e.target.value);
  };

  const GoSearch = () => {
    if (search.length > 0) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('search', search);
      }
      router.push(`/products/search?q=${search}`);
    }
  };

  const EnterPress = (e) => {
    if (e.code === 'Enter' || e.charCode === 13 || e.key === 'Enter') {
      GoSearch();
    }
  };

  return (
    <div className="search_area">
      <div className="title">
        <h6>
          Looking For <b>Something?</b>
        </h6>
      </div>

      <div className="search_field">
        <input
          onKeyPress={EnterPress}
          onChange={getSearchVal}
          placeholder="Search"
        />
        <button type="button" onClick={GoSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}
