'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';
import { ImWhatsapp } from 'react-icons/im';
import { FaAngleRight, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import PopupQuoote from './PopupQuoote';
import useScrollLock from '../lib/ScrollLock';
import '../styles/Nav.scss';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sp, setSp] = useState({});
  const [blockScroll, allowScroll] = useScrollLock();

  // Lock/unlock body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  }, []);

  const miniForm = () => {
    closeMobileMenu();
    setIsOpen(true);
    setSp({
      productName: 'getQuoteFromHeader',
      productId: '99',
    });
    blockScroll();
  };

  const ClickedLink = (e) => {
    const parentEl = e.currentTarget.parentElement?.parentElement;
    if (parentEl) {
      parentEl.classList.add('clicked');
      setTimeout(() => {
        parentEl.classList.remove('clicked');
      }, 500);
    }
  };

  return (
    <>
      {/* ============ MOBILE HEADER (visible ≤ 991px) ============ */}
      <div className="hutaib-mobile-header">
        <Link href="/" className="navbar-brand mobile-brand">
          <img className="logo" src="/assets/logo/logoe.png" title="Hutaib" alt="Hutaib" />
        </Link>

        {/* Only show hamburger when menu is NOT open */}
        {!isMobileMenuOpen && (
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Open navigation menu"
            onClick={openMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}

        {/* Mobile fullscreen overlay menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-backdrop" onClick={closeMobileMenu} />
        )}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <div className="mobile_nav_wrap">
            <button
              className="close_btn"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
              <IoCloseSharp />
            </button>
            <div className="logo_area">
              <img className="logo" src="/assets/logo/logo.png" title="Hutaib" alt="Hutaib" />
            </div>

            <div className="nav_area">
              <ul className="navbar-mob">
                <li className="mob-item">
                  <Link href="/" className="mob-link" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="mob-item">
                  <Link href="/about" className="mob-link" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>

                <li className="mob-item">
                  <span
                    className="mob-link dropdown-toggle"
                    role="button"
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  >
                    Products
                  </span>
                  <div
                    className={`dropdown-menu dropdown-menu-mob ${isProductsDropdownOpen ? 'show' : ''}`}
                  >
                    <div className="inner">
                      <ul className="mobileUl">
                        <li>
                          <Link
                            href="/product-category/construction-chemicals"
                            className="dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            Construction Chemicals
                          </Link>
                          <ul className="navSubCategory">
                            <li>
                              <Link href="/product-category/epoxy-resin" className="dropdown-item" onClick={closeMobileMenu}>
                                Epoxy Resin
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/admixture" className="dropdown-item" onClick={closeMobileMenu}>
                                Admixture
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/rdp-grades" className="dropdown-item" onClick={closeMobileMenu}>
                                RDP Grades
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/sbr-grades" className="dropdown-item" onClick={closeMobileMenu}>
                                SBR Grades
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/styrene-acrylic" className="dropdown-item" onClick={closeMobileMenu}>
                                Styrene Acrylic
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            href="/product-category/textile-chemical"
                            className="dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            Textile Chemical
                          </Link>
                          <ul className="navSubCategory">
                            <li>
                              <Link href="/product-category/momentive-amino-functional-fluid" className="dropdown-item" onClick={closeMobileMenu}>
                                Amino Functional Fluids
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/silicone-oil" className="dropdown-item" onClick={closeMobileMenu}>
                                Block Silicone Fluids
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/hydrophilic-oil" className="dropdown-item" onClick={closeMobileMenu}>
                                Hydrophilic
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/polydimethylsiloxane" className="dropdown-item" onClick={closeMobileMenu}>
                                PDMS Emulsion
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/softeners-for-textile" className="dropdown-item" onClick={closeMobileMenu}>
                                Softener
                              </Link>
                            </li>
                            <li>
                              <Link href="/product-category/surfactants" className="dropdown-item" onClick={closeMobileMenu}>
                                Surfactants
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            href="/product-category/other-portfolio"
                            className="dropdown-item"
                            onClick={closeMobileMenu}
                          >
                            Other Chemicals
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mob-item">
                  <Link href="/contact" className="mob-link" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </li>
                <li className="mob-item">
                  <Link href="/career" className="mob-link" onClick={closeMobileMenu}>
                    Career
                  </Link>
                </li>
                <li className="mob-item">
                </li>
              </ul>
                  <button onClick={miniForm} className="get_quote mob-link">
                    Get Query
                  </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============ DESKTOP HEADER (visible ≥ 992px) ============ */}
      <nav className="hutaib-desktop-header navbar navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>

          <li
            className="nav-item dropdown"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <Link
              href="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
            >
              Products
            </Link>

            <div className={`dropdown-menu ${isDesktopDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <div className="inner">
                <ul className="navLinks">
                  <li>
                    <Link
                      href="/product-category/construction-chemicals"
                      className="dropdown-item"
                      onClick={ClickedLink}
                    >
                      Construction Chemicals <FaAngleRight />
                    </Link>
                    <ul className="navSubCategory">
                      <li>
                        <Link href="/product-category/epoxy-resin" className="dropdown-item">
                          Epoxy Resin
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/admixture" className="dropdown-item">
                          Admixture
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/rdp-grades" className="dropdown-item">
                          RDP Grades
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/sbr-grades" className="dropdown-item">
                          SBR Grades
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/styrene-acrylic" className="dropdown-item">
                          Styrene Acrylic
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      href="/product-category/textile-chemical"
                      className="dropdown-item"
                      onClick={ClickedLink}
                    >
                      Textile Chemical <FaAngleRight />
                    </Link>
                    <ul className="navSubCategory">
                      <li>
                        <Link href="/product-category/momentive-amino-functional-fluid" className="dropdown-item">
                          Amino Functional Fluids
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/silicone-oil" className="dropdown-item">
                          Block Silicone Fluids
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/hydrophilic-oil" className="dropdown-item">
                          Hydrophilic
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/polydimethylsiloxane" className="dropdown-item">
                          PDMS Emulsion
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/softeners-for-textile" className="dropdown-item">
                          Softener
                        </Link>
                      </li>
                      <li>
                        <Link href="/product-category/surfactants" className="dropdown-item">
                          Surfactants
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/product-category/other-portfolio" className="dropdown-item" onClick={ClickedLink}>
                      Other Chemicals
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/career" className="nav-link">
              Career
            </Link>
          </li>
        </ul>

        <Link className="navbar-brand" href="/">
          <img className="logo" src="/assets/logo/logo.png" title="Hutaib" alt="Hutaib" />
        </Link>

        <div className="right_side_area">
          <div className="contact_details">
            <div className="phone">
              <a href="tel:+92 309 7772468"> Call Now: 0309 7772468</a>
            </div>
          </div>

          <div className="socail_icons">
            <div className="social">
              <a href="https://api.whatsapp.com/send?phone=3097772468&text=Start%20Chatting" title="Hutaib Whatsapp" role="img" aria-label="Hutaib Whatsapp">
                <ImWhatsapp />
              </a>
            </div>
            <div className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/HutaibIndustrialSolutions" title="Hutaib Facebook" role="img" aria-label="Hutaib Facebook">
                <RiFacebookFill />
              </a>
            </div>
            <div className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hutaibindustrialsolutions/" title="Hutaib Instagram" role="img" aria-label="Hutaib Instagram">
                <FaInstagram />
              </a>
            </div>

            <div className="social">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/82427342" title="Hutaib Linkedin" role="img" aria-label="Hutaib Linkedin">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <button onClick={miniForm} className="get_quote">
            Get Query
          </button>
        </div>
      </nav>

      {/* PopupQuoote shared by both headers */}
      <PopupQuoote
        hedi="Get Query"
        open={isOpen}
        allowScroll={allowScroll}
        onClose={() => {
          setIsOpen(false);
        }}
        product={sp}
      />
    </>
  );
}
