import React from "react";
import ReactDOM from "react-dom";
import Logo from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <div className="mainLogoContainer">
        <div className="logoContainer">
          <FontAwesomeIcon icon={faHourglassHalf} className="logo" />
        </div>
        <p className="number-minus">-</p>
        <p className="number-eleven">11</p>
      </div>
      <div className="display-name">
        <p className="ecommerce companyName">ELEVENTH HOUR</p>
        <p className="ecommerce tagline">- e-commerce -</p>
      </div>
    </>
  );
};

export default navbar;
