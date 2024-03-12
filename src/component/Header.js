import React from "react";
import logo from "../assets/logo.svg";
import "../styles/components/header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo}></img>
      <span>웹사이트 번역</span>
    </div>
  );
};

export default Header;
