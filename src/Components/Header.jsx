import React from "react";
import logo from "../assets/Opay-Logo.svg";
import "../StyleSheets/Header.css";

export default function Header() {
  return (
    <div className="mainContainer">
      <img src={logo} alt="Opay Logo" className="siteLogo"/>
      <div className="buttonContainer">
        <button className="homeButton">Home</button>
        <button className="Business">Business</button>
        <button className="installAppButton">Get The App</button>
      </div>
    </div>
  );
}
