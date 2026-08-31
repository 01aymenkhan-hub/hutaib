'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa';
import ProductBox from './ProductBox';
import PopupQuoote from './PopupQuoote';
import useScrollLock from '../lib/ScrollLock';
import { useStateValue } from '../lib/StateContext';
import '../styles/ProductsMainArea.scss';

function Tab({ tab }) {
  const [, dispatch] = useStateValue();
  const [blockScroll, allowScroll] = useScrollLock();
  const [read, setRead] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [sp, setSp] = useState({});

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

  const GoDetail = (item) => {
    dispatch({
      type: 'SET_PRODUCT',
      Product: item,
    });
  };

  return (
    <div className="tabs__content">
      {tab.products
        ? tab.products.map((item) => (
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

/**
 * Helper: categories list me se slug match karke category/subcategory return karta hai
 */
function findCategoryBySlug(cats, slug) {
  for (const cat of cats) {
    if (cat.slug === slug) return cat;
    if (cat.subcategories) {
      const sub = cat.subcategories.find((s) => s.slug === slug);
      if (sub) return sub;
    }
  }
  return null;
}

export default function ProductsMainArea({
  initialTabs = [],
  slug = '',
  initialSelectedCategory = null,
}) {
  // Server se aaya hua data directly use karo — koi client-side fetch nahi
  const Tabs = initialTabs;

  // Initial selected category server se aaya hai, ya slug se compute karo
  const computedInitial = useMemo(() => {
    if (initialSelectedCategory && Object.keys(initialSelectedCategory).length > 0) {
      return initialSelectedCategory;
    }
    if (slug && initialTabs.length > 0) {
      return findCategoryBySlug(initialTabs, slug) || {};
    }
    return {};
  }, [initialSelectedCategory, slug, initialTabs]);

  const [selectedSubcategory, setSelectedSubcategory] = useState(computedInitial);
  const [slideOut, setSlideOut] = useState(false);
  const router = useRouter();

  const showProducts = (e, data) => {
    if (data.products && data.products.length > 0) {
      setSelectedSubcategory(data);
    } else {
      router.push(`/product-category/${data.slug}`);
    }
  };

  return (
    <div className="ProductsMainArea">
      {Tabs.length > 0 ? (
        <div className="inner">
          <div className={slideOut ? 'category_side slideOut' : 'category_side'}>
            <div
              className="handleController"
              onClick={() => {
                setSlideOut(!slideOut);
              }}
            >
              <FaChevronRight className="iconToggle" />
            </div>
            <div className="inner">
              <div className="tabs">
                <ul>
                  {Tabs.map((item, index) => {
                    return (
                      <li key={index}>
                        <span
                          className={
                            item.id === selectedSubcategory.id
                              ? 'listItem activeBtn'
                              : 'listItem mainCate'
                          }
                          onClick={(e) => showProducts(e, item)}
                        >
                          {item.category}
                        </span>
                        {item.subcategories ? (
                          <ul>
                            {item.subcategories.map((subItem, subIndex) => {
                              return (
                                <li key={subIndex}>
                                  <span
                                    className={
                                      subItem.id === selectedSubcategory.id
                                        ? 'listItem activeBtn'
                                        : 'listItem'
                                    }
                                    onClick={(e) => showProducts(e, subItem)}
                                  >
                                    {subItem.category}
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
          <img className="product_loader" src="/assets/images/loader.gif" alt="Loading..." />
        </div>
      )}
    </div>
  );
}
