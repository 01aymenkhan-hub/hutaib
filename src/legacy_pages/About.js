import React, { useEffect } from "react";
import AboutBanner from "../components/AboutBanner";
import AboutMainArea from "../components/AboutMainArea";
import Concare from "../components/Concare";

import ApplicationForm from "../components/ApplicationForm";
import Discover from "../components/Discover";
import Features from "../components/Features";
import OurSkills from "../components/OurSkills";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";

function About() {
  useEffect(() => {
    let sttop = () => {
      window.scrollTo(0, 0);
    }
    sttop()
  }, [])
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Hutaib Industrial Solutions</title>
        <meta
          name="description"
          content="Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships."
          data-react-helmet="true"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* og */}

        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://hutaib.org/assets/images/aboutdesktop.png"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships."
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="About Us | Hutaib Industrial Solutions"
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
          content="https://hutaib.org/assets/images/aboutdesktop.png"
        />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://hutaib.org/about"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Hutaib Industrial Solutions is a Pakistan-based company providing reliable industrial and chemical solutions, focused on quality and long-term partnerships."
        />

        <meta
          data-react-helmet="true"
          property="og:title"
          content="About Us | Hutaib Industrial Solutions"
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
        <link
          data-react-helmet="true"
          rel="canonical"
          href="https://hutaib.org/about"
        />

        {/* og */}
      </Helmet>
      <AboutBanner />
      <Features />
      {/* <AboutMainArea /> */}
      <Concare />
      {/* <ApplicationForm /> */}
    </div>
  );
}

export default About;
