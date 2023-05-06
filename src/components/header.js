import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/img/logoLarge.png"
import logosmall from "../../src/img/metalmagiclogosmall.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  //function to handle the mobile menu appearance
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return <>
  { <div className="headerBlock">
    <div className="navigation">
  <ul>
    <Link to="https://www.facebook.com/metalmagicpiercings" target="_blank"><li><FontAwesomeIcon icon={faFacebook} /></li></Link>
    <Link to="https://www.instagram.com/metal_magic_piercings/" target="_blank"><li><FontAwesomeIcon icon={faInstagram} /></li></Link>
    <Link to="bookings">
      <li>Bookings</li>
    </Link>
    <Link to="piercings">
      <li>Piercings</li>
    </Link>
    <Link to="jewellery">
      <li>Jewellery</li>
    </Link>
    <Link to="faq">
      <li>FAQ</li>
      </Link>
      <Link to="about">
        <li>About Us</li>
      </Link>
    <Link to="contact">
      <li>Contact</li>
    </Link>
    
  </ul>
  </div>

    <div className="headerFeatureLeft">
      <p className="largeLogo"><Link to="/" ><img src={logo} alt="Metal Magic Logo" /></Link></p>
      <p className="smallLogo"><Link to="/"><img src={logosmall} alt="Metal Magic Logo" /></Link></p>
    </div>
    <div className="headerFeatureRight">
    
    <div className="mobileNavigation">
      <div className="dropdown" onClick={toggleHamburger}>
<FontAwesomeIcon icon={faBars} />

<style jsx="true">{`
        .mobileNavigation {
          background-color: rgba(160, 141, 94, 1);
          padding:0.5rem;
          width:1rem;
        }

        .mobileNavigation ul {
          display: ${hamburgerOpen ? "inline" : "none"};
          background-color: rgba(0, 0, 0, 0.8);
          margin-top: 2rem;
          padding-left: 1rem;
          padding-right: 1rem;
          margin-left:-8rem;
        }

        .mobileNavigation ul li,
        .mobileNavigation ul a:visited {
          list-style-type: none;
          padding: 1rem;
          color: #fff;
          font-weight: bold;
          text-align: right;
          border-bottom: 1px solid #a08d5e;
        }
      `}</style>

<ul className="dropdown-content" >
    <Link to="https://www.facebook.com/metalmagicpiercings" target="_blank"><li><FontAwesomeIcon icon={faFacebook} /></li></Link>
    <Link to="https://www.instagram.com/metal_magic_piercings/" target="_blank"><li><FontAwesomeIcon icon={faInstagram} /></li></Link>
    <Link to="bookings">
      <li>Bookings</li>
    </Link>
    <Link to="piercings">
      <li>Piercings</li>
    </Link>
    <Link to="jewellery">
      <li>Jewellery</li>
    </Link>
    <Link to="faq">
      <li>FAQ</li>
      </Link>
      <Link to="about">
        <li>About Us</li>
      </Link>
    <Link to="contact">
      <li>Contact</li>
    </Link>
  </ul>
  </div>
</div>
</div>
    </div> }
  </>; }


export default Header;
