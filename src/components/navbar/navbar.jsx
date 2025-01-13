import React from "react";
import ReactDOM from "react-dom";
import Logo from "../logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <div className="logo">
        <FontAwesomeIcon icon={faHourglassHalf} className="logo" />
      </div>
      {/* <Logo /> */}
    </>
  );
};

export default navbar;
