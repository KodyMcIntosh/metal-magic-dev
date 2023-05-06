import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="footerBlock">
  <p><FontAwesomeIcon icon={faCopyright} /> 2023 Metal Magic Piercings - All Rights Reserved | <Link to={"/privacy"}>Privacy Policy</Link> | Website by <Link to="https://www.kodymcintosh.com/">Kody McIntosh</Link></p>
  </div>
  );
};

export default Footer;
