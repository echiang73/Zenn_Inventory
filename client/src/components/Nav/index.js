import React from "react";
import "./style.css";
import logo from "../assets/images/ZENN.logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary sticky-top">
      <h2 id="logoText">ZENN<br/>Inventory</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="btn-group" role="group" aria-label="Basic example">
      <a href="/"><button type="button" className="btn btn-secondary btn-logoutPage">Logout</button></a>
      </div>
    </nav>
  );
}

export default Nav;
