import React, { useState } from 'react';
import { useEffect } from 'react';
import './NavAlt.scss';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function NavAlt() {

  const [isMobile, setIsMobile] =  useState(false);

  useEffect(() => {

    if(window.screen.width < 768){
      setIsMobile(true);



    }
  }, [])
  return (
    <>
    <Link    to="/" className="navbar-brand mobile-brand" href="#">
    <img className='logo' src='../assets/logo/logo-white.png' />
    </Link>
    
    <nav className={`navbar navbar-alt ${isMobile?'navbar-dark':'navbar-light'} navbar-expand-lg `}>
    {!isMobile &&  
    <Link    to="/" className="navbar-brand" href="#">
            <img className='logo' src='../assets/logo/logo.png' />
    </Link>
    }
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {isMobile &&
  <div className="collapse navbar-collapse mobile-menu" id="navbarSupportedContent" >

    <div className='mobile_nav_wrap'>
      <div className='close_btn'>
          <IoCloseSharp/>
      </div>
      <div className='logo_area'>
        <img className='logo' src='../assets/logo/logo.png' />

      </div>

      <div className='nav_area'>
        <ul className="navbar-mob">
          <li className="mob-item ">
            <Link    to="/" className="mob-link">Home</Link>
          </li>

          <li className="mob-item ">
            <Link    to="/about" className="mob-link">About Us</Link>
          </li>

          <li className="mob-item ">
            <Link    to="/products" className="mob-link">Products</Link>
          </li>
{/*           
          <li className="mob-item dropdown">
            <a className="mob-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
          
        </ul>
      </div>

    </div>



   
  </div>

}

{!isMobile &&

  <div className="collapse navbar-collapse" >
    <ul className="navbar-nav">
      <li className="nav-item ">
        <Link    to="/" className="nav-link" >Home</Link>
      </li>
      <li className="nav-item ">
        <Link    to="/about" className="nav-link" >About Us</Link>
      </li>

      <li className="nav-item">
        <Link   to="/products" className="nav-link" >Products</Link>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>

  
      <button className="get_quote" >Get Quote</button>
   
  </div>

}
</nav>

</>


  );
}

export default NavAlt;
