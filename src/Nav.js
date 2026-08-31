import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "./Nav.scss";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleDoubleRight, FaAngleRight, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

import PopupQuoote from "./components/PopupQuoote";
import ScrollLock from "./ScrollLock";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const mob_close = useRef("");
  useEffect(() => {
    if (window.screen.width < 992) {
      setIsMobile(true);
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const miniForm = () => {
    if (isMobile) {
      mob_close.current.click();
      setIsOpen(true);
      console.log(mob_close);
      setSp({
        productName: "getQuoteFromHeader",
        productId: "99",
      });
    } else {
      setIsOpen(true);
      // console.log(mob_close);
      setSp({
        productName: "getQuoteFromHeader",
        productId: "99",
      });

      blockScroll();
    }
  };
  const [sp, setSp] = useState({});
  const [blockScroll, allowScroll] = ScrollLock();
  const ClickedLink = (e) => {
    e.target.parentElement.parentElement.classList.add('clicked')
    setTimeout(() => {
      e.target.parentElement.parentElement.classList.remove('clicked')
    }, 500);
  }
  return (
    <>
      <Link to={"/home"} className="navbar-brand mobile-brand">
        <img className="logo" src="../assets/logo/logoe.png" title="Hutaib" alt="Hutaib" />
      </Link>
      <nav
        className={`navbar ${isMobile ? "navbar-dark" : "navbar-light"
          } navbar-expand-lg `}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isMobile && (
          <>
            <div
              className="collapse navbar-collapse mobile-menu"
              id="navbarSupportedContent"
            >
              <div className="mobile_nav_wrap">
                <div
                  className="close_btn "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  ref={mob_close}
                >
                  <IoCloseSharp />
                </div>
                <div className="logo_area">
                  <img className="logo" src="../assets/logo/logo.png" title="Hutaib" alt="Hutaib" />
                </div>

                <div className="nav_area">
                  <ul className="navbar-mob">
                    <li className="mob-item ">
                      <Link to="/" className="mob-link"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#navbarSupportedContent"
                      >
                        Home{" "}
                      </Link>
                    </li>

                    <li className="mob-item ">
                      <Link to="/about" className="mob-link"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#navbarSupportedContent"
                      >
                        About{" "}
                      </Link>
                    </li>

                    <li className="mob-item ">
                      <Link
                        to="#"
                        className="mob-link dropdown-toggle"
                        id="navbarDropdownMob"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Products
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-mob "
                        aria-labelledby="navbarDropdownMob"
                      >
                        <div className="inner">
                          <ul className="mobileUl">
                            <li>
                              <Link
                                to="/product-category/construction-chemicals"
                                className="dropdown-item"
                                href="#"
                                type="button"
                                data-toggle="collapse"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                data-target="#navbarSupportedContent"
                              >
                                Construction Chemicals
                              </Link>
                              <ul className="navSubCategory">
                                <li> <Link
                                  to="/product-category/epoxy-resin"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Epoxy Resin
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/admixture"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Admixture
                                </Link> </li>

                                <li> <Link
                                  to="/product-category/rdp-grades"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  RDP Grades
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/sbr-grades"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  SBR Grades
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/styrene-acrylic"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Styrene Acrylic
                                </Link> </li>

                              </ul>
                            </li>

                            <li>
                              <Link
                                to="/product-category/textile-chemical"
                                className="dropdown-item"
                                href="#"
                                type="button"
                                data-toggle="collapse"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                data-target="#navbarSupportedContent"
                              >
                                Textile Chemical
                              </Link>
                              <ul className="navSubCategory">
                                <li> <Link
                                  to="/product-category/momentive-amino-functional-fluid"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Amino Functional Fluids
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/silicone-oil"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Block Silicone Fluids
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/hydrophilic-oil"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Hydrophilic
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/polydimethylsiloxane"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  PDMS Emulsion
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/softeners-for-textile"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Softener
                                </Link> </li>
                                <li> <Link
                                  to="/product-category/surfactants"
                                  className="dropdown-item"
                                  href="#"
                                  type="button"
                                  data-toggle="collapse"
                                  aria-controls="navbarSupportedContent"
                                  aria-expanded="false"
                                  aria-label="Toggle navigation"
                                  data-target="#navbarSupportedContent"
                                >
                                  Surfactants
                                </Link> </li>
                              </ul>
                            </li>
                            <li>
                              <Link
                                to="/product-category/other-portfolio"

                                className="dropdown-item"
                                href="#"
                                type="button"
                                data-toggle="collapse"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                data-target="#navbarSupportedContent"
                              >
                                Other Chemicals
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="mob-item ">
                      <Link to="/contact" className="mob-link"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#navbarSupportedContent"
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="mob-item  ">
                      <Link to="/career" className="mob-link"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        data-target="#navbarSupportedContent"
                      >
                        Career
                      </Link>
                    </li>
                    <li className="mob-item  ">
                      <button
                        onClick={() => miniForm()}
                        className="get_quote mob-link"
                      >
                        Get Query
                      </button>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            {/* asdasdfasdf */}
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
        )}

        {!isMobile && (
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">

              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </Link>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="inner">
                    <ul className="navLinks">
                      <li>
                        <Link
                          to="/product-category/construction-chemicals"
                          className="dropdown-item"

                          onClick={ClickedLink}
                        >
                          Construction Chemicals <FaAngleRight />
                        </Link>
                        <ul className="navSubCategory">
                          <li> <Link
                            to="/product-category/epoxy-resin"
                            className="dropdown-item"
                          >
                            Epoxy Resin
                          </Link> </li>
                          <li> <Link
                            to="/product-category/admixture"
                            className="dropdown-item"
                          >
                            Admixture
                          </Link> </li>
                          <li> <Link
                            to="/product-category/rdp-grades"
                            className="dropdown-item"
                          >
                            RDP Grades
                          </Link> </li>
                          <li> <Link
                            to="/product-category/sbr-grades"
                            className="dropdown-item"
                          >
                            SBR Grades
                          </Link> </li>
                          <li> <Link
                            to="/product-category/styrene-acrylic"
                            className="dropdown-item"
                          >
                            Styrene Acrylic
                          </Link> </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          to="/product-category/textile-chemical"
                          className="dropdown-item"

                          onClick={ClickedLink}
                        >
                          Textile Chemical  <FaAngleRight />
                        </Link>
                        <ul className="navSubCategory">
                          <li> <Link
                            to="/product-category/momentive-amino-functional-fluid"
                            className="dropdown-item"
                          >
                            Amino Functional Fluids
                          </Link> </li>
                          <li> <Link
                            to="/product-category/silicone-oil"
                            className="dropdown-item"
                          >
                            Block Silicone Fluids
                          </Link> </li>
                          <li> <Link
                            to="/product-category/hydrophilic-oil"
                            className="dropdown-item"
                          >
                            Hydrophilic
                          </Link> </li>
                          <li> <Link
                            to="/product-category/polydimethylsiloxane"
                            className="dropdown-item"
                          >
                            PDMS Emulsion
                          </Link> </li>
                          <li> <Link
                            to="/product-category/softeners-for-textile"
                            className="dropdown-item"
                          >
                            Softener
                          </Link> </li>
                          <li> <Link
                            to="/product-category/surfactants"
                            className="dropdown-item"
                          >
                            Surfactants
                          </Link> </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to="/product-category/other-portfolio"
                          className="dropdown-item"

                          onClick={ClickedLink}
                        >
                          Other Chemicals
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item ">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/career" className="nav-link">
                  Career
                </Link>
              </li>

              {/* brand area  */}
            </ul>

            <a className="navbar-brand" href="/">
              <img className="logo" src="../assets/logo/logo.png" title="Hutaib" alt="Hutaib" />
            </a>

            <div className="right_side_area">
              <div className="contact_details">
                <div className="phone">
                  <a href="tel:+92 309 7772468"> Call Now: 0309 7772468</a>
                </div>
              </div>

              <div className="socail_icons">
                <div className="social">
                  <a href="https://api.whatsapp.com/send?phone=3097772468&text=Start%20Chatting" title="Hutaib Whatsapp" role="img" aria-label="Hutaib Whatsapp" >
                    <ImWhatsapp />
                  </a>
                </div>
                <div className="social">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/HutaibIndustrialSolutions"
                    title="Hutaib Facebook" role="img" aria-label="Hutaib Facebook"
                  >
                    <RiFacebookFill />
                  </a>
                </div>
                <div className="social">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/hutaibindustrialsolutions/"
                    title="Hutaib Facebook" role="img" aria-label="Hutaib Facebook"
                  >
                    <FaInstagram />
                  </a>
                </div>


                <div className="social">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/82427342"
                    title="Hutaib Linkedin" role="img" aria-label="Hutaib Linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <button onClick={() => miniForm()} className="get_quote">
                Get Query
              </button>
            </div>

            <PopupQuoote
              hedi="Get Query"
              open={isOpen}
              allowScroll={allowScroll}
              onClose={() => {
                setIsOpen(false);
              }}
              product={sp}
            />
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
