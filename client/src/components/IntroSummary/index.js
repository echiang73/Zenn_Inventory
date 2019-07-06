import React, { Component } from 'react';
import logo from "../assets/images/Summarybg.png";
// import logo2 from "../assets/images/ZENN.logo.white.png";
import "./style.css";





class IntroSummary extends Component {
  render(){
    return (
     <> 


      <div className="summary-container">
        <div className="row">
        <main className="col-6">

            <img src={logo} alt="logo" />
              <div className="p col-12">
              The e-Commerce industry is growing rapidly and many small business
              are expanding their sales opportunities by selling physical goods
              through popular online selling channels such as Amazon, Etsy, Ebay,
              and Shopify. The problem arises when you lose sales from one channel
              due to untimely stock depletion from another channel. Our solution is
              ZENN Inventory, which provides a centralized inventory to streamline
              operations so you can easily manage your inventory stock. Any change
              made in one channel will be reflected across in all other channels. Be
              at one with your storefront channels and sync your inventory with
              ZENN Inventory.
              </div>
          </main>
          </div>
        </div>
       </> 

    );
  }
}

export default IntroSummary;

