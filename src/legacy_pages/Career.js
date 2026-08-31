import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import CareerBanner from "../components/CareerBanner";
import Careerform from "../components/Careerform";

function Career() {
  useEffect(() => {
    let sttop = () => {
      window.scrollTo(0, 0);
    }
    sttop()
  })
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Join Our Team | Careers at Hutaib Industrial Solutions</title>
        <meta
          name="description"
          content="Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development."
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
          content="https://hutaib.org/static/media/join.f4e197a2.jpg"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development."
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="Join Our Team | Careers at Hutaib Industrial Solutions"
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
          content="https://hutaib.org/static/media/join.f4e197a2.jpg"
        />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://hutaib.org/career"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Join Hutaib Industrial Solutions in Pakistan and build your career with a team focused on growth, responsibility, and professional development."
        />

        <meta
          data-react-helmet="true"
          property="og:title"
          content="Join Our Team | Careers at Hutaib Industrial Solutions"
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
          href="https://hutaib.org/career"
        />

        {/* og */}
      </Helmet>
      <CareerBanner />
      {/* <Careeraccordian /> */}
      <Careerform />
    </div>
  );
}

export default Career;
