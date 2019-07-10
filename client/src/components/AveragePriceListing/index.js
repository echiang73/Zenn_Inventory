import React from "react";
import "./style.css";

function totalValue(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.price, 0);
}

function totalEtsyItems(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.etsy_quantity, 0);
}

function totalEbayItems(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.ebay_quantity, 0);
}

function AveragePriceListing({ props }) {



  return (
    <div className="averagePriceCard">
      <h5>Average Price/Item</h5>
        <div id="average-price">${(totalValue(props)/(totalEtsyItems(props)+totalEbayItems(props))).toFixed(2).toLocaleString()}</div>
    </div>
  );
}

export default AveragePriceListing;