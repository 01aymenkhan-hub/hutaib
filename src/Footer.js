import React from "react";
import "./Footer.scss";
import { MdLocationOn } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaMobile } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">

      <div className="inner">
        <div className="footer_row">
          <div className="logo_col">
            <a href="/">
              <img src="../assets/logo/logo-white.png" alt="Hutaib Industrial Solutions " title="Hutaib Industrial Solutions " />
            </a>
            <div className="line"> </div>
            <div className="socail_icons">

              <div className="social">
                <a
                  target="_blank"
                  href="https://www.facebook.com/HutaibIndustrialSolutions"
                >
                  <FaFacebookF title="Facebook" role="img" aria-label="Facebook" />
                </a>
              </div>

              <div className="social">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/82427342"
                >
                  <FaLinkedinIn title="Linkedin" role="img" aria-label="Linkedin" />
                </a>
              </div>
              <div className="social">
                <a
                  target="_blank"
                  href="https://www.instagram.com/hutaibindustrialsolutions/"
                >
                  <FaInstagram title="Instagram" role="img" aria-label="Instagram" />
                </a>
              </div>

            </div>
          </div>

          <div className="nav_col">
            <nav className="footer_nav">
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact </Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="addr_col">
            <div className="addr_row">
              <div className="icon_box">
                <MdLocationOn title="Location" role="img" aria-label="Location" />
              </div>
              <div className="content_box">
                <h4>Where to find us</h4>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/9fbBAsBQCZKSAdMb9"
                > Suit 309, 3rd floor, Progressive Plaza, Beaumont Road, Karachi, Pakistan, 75530.</a>
              </div>
            </div>

            <div className="addr_row">
              <div className="icon_box">
                <BsFillTelephoneFill title="Phone No." role="img" aria-label="Phone No." />
              </div>
              <div className="content_box">
                <h4>Phone No.</h4>
                <a href="tel:(021) 35661603">(021) 35661603</a>
              </div>
            </div>

            <div className="addr_row">
              <div className="icon_box">
                <FaMobile title="Mobile No." role="img" aria-label="Mobile No." />
              </div>
              <div className="content_box">
                <h4>Mobile No.</h4>
                <a href="tel:+92 309 7772468">0309 7772468</a>
              </div>
            </div>

            <div className="addr_row">
              <div className="icon_box">
                <GrMail title="E-mail" role="img" aria-label="E-mail" />
              </div>
              <div className="content_box">
                <h4>Email</h4>
                <a href="mailto:info@hutaib.org">info@hutaib.org</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
