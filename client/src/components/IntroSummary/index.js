import React, { Component } from 'react';
import logo from "../assets/images/Summarybg.png";
import "./style.css";





class IntroSummary extends Component {
  render(){
    return (
      <div>
        <main className="summary">
          <div className="col-lg-6 Summarybg">
            <img src={logo} className="App-logo" alt="logo" />
              <div className="p">
              The e-Commerce industry growing rapidly and many small business
              are expanding their sales opportunities by selling physical goods
              through popular online selling channels such as Amazon, Etsy, Ebay,
              and Shopify. The problem arise when you lose sale from one channel
              due to untimely stock depletion from another channel. Our solution is
              ZENN Inventory, which provides a centralized inventory to streamline
              operations so you can easily manage your inventory stock. Any change
              made in one channel will be reflected across in all other channels. Be
              at one with your storefront channels and sync your inventory with
              ZENN Inventory.
              </div>
          </div>
        </main>
      </div>

    );
  }
}

export default IntroSummary;

