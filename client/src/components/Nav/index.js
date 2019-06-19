import React from "react";
import "./style.css";
import logo from "../assets/images/ZENN.logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary sticky-top">
      <h1>ZENN Inventory</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="btn-group" role="group" aria-label="Basic example">
      <a href="/"><button type="button" className="btn btn-secondary btn-logoutPage">Logout</button></a>
      {/* <a href="/"><button type="button" className="btn btn-secondary btn-dashboardPage">Dashboard</button></a>
      <a href="/inventory"><button type="button" className="btn btn-secondary btn-inventoryPage">Inventory</button></a>
      <a href="/support"><button type="button" className="btn btn-secondary btn-supportPage">Support</button></a> */}
      </div>
    </nav>
  );
}

export default Nav;
