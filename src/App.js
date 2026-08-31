import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./Nav";
import Footer from "./Footer";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import ProductDetailContainer from "./Pages/ProductDetailContainer";
import SearchProduct from "./Pages/SearchProduct";
import Copyright from "./components/Copyright";
import Career from "./Pages/Career";
import { FaWhatsapp } from "react-icons/fa";
import Pagenotfound from "./components/Pagenotfound";
import Blog from "./Pages/Blog";
import Blogdetailpage from "./Pages/Blogdetailpage";
import ConstructionChemicals from "./Pages/ConstructionChemicals";
import TextileChemical from "./Pages/TextileChemical";


function App() {


  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Home />} path="/home" exact />
          <Route path="/about" element={<About />} />
          {/* <Route path="/products" exact element={<Products />} /> */}
          {/* <Route
            path="/product-category/construction-chemicals"
            exact
            element={<Products />}
          /> */}
          <Route
            path="/product-category/construction-chemicals"
            exact
            element={<ConstructionChemicals />}
          />
          <Route
            path="/product-category/textile-chemical"
            exact
            element={<TextileChemical />}
          />
          <Route
            path="/product-category/other-portfolio"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/epoxy-resin"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/admixture"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/momentive-amino-functional-fluid"
            exact
            element={<Products />}
          />

          <Route
            path="/product-category/silicone-oil"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/hydrophilic-oil"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/polydimethylsiloxane"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/softeners-for-textile"
            exact
            element={<Products />}
          />   <Route
            path="/product-category/surfactants"
            exact
            element={<Products />}
          />

          <Route
            path="/product-category/styrene-acrylic"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/sbr-grades"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/rdp-grades"
            exact
            element={<Products />}
          />


          {/* <Route
            path="/product-category/silicone-oil"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/momentive-amino-functional-fluid"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/hydrophilic-oil"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/softeners-for-textile"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/textile-chemical"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/other-portfolio"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/epoxy-flooring"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/surfactant-chemicals"
            exact
            element={<Products />}
          />
          <Route
            path="/product-category/polydimethylsiloxane"
            exact
            element={<Products />}
          /> */}
          <Route path="/*" element={<Pagenotfound />} />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetailContainer />}
          />
          <Route path="/products/search/" element={<SearchProduct />} />
          <Route path="/career/" element={<Career />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blogdetailpage />} />


        </Routes>
        <Footer />
        <Copyright />
      </Router>

      <div className="floatingicon">
        <a
          href="https://wa.link/v4unuc"
          target={"_blank"}
          title="Hutaib Whatsapp"
          role="img"
          aria-label="Hutaib Whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default App;
