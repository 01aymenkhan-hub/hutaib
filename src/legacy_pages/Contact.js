import React, { useEffect } from "react";
import ContactusMianArea from "../components/ContactusMianArea";
import { Helmet } from "react-helmet";

function Contact() {
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
        <title>Contact Us | Hutaib Industrial Solutions</title>
        <meta
          name="description"
          content="Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office."
          data-react-helmet="true"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* data */}

        <meta
          data-react-helmet="true"
          property="twitter:image"
          content="https://hutaib.org/assets/logo/logo.png"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office."
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="Contact Us | Hutaib Industrial Solutions"
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
          content="https://hutaib.org/assets/logo/logo.png"
        />
        <meta
          data-react-helmet="true"
          property="og:url"
          content="https://hutaib.org/contact"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Contact Hutaib Industrial Solutions in Pakistan for inquiries, support, or business details. Reach our team via phone, email, or visit our office."
        />

        <meta
          data-react-helmet="true"
          property="og:title"
          content="Contact Us | Hutaib Industrial Solutions"
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
          href="https://hutaib.org/contact"
        />
      </Helmet>
      {/* <ContactusBanner /> */}
      <ContactusMianArea />
    </div>
  );
}

export default Contact;
