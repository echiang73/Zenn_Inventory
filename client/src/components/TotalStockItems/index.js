import React from "react";
import "./style.css";

function totalEtsyItems(props) {
  return props.reduce((accumulator, prop) =>
    accumulator + prop.etsy_quantity, 0);
}

function totalEbayItems(props) {
  return props.reduce((accumulator, prop) =>
    accumulator + prop.ebay_quantity, 0);
}

function TotalStockItems({ props }) {
  return (
    <div className="totalProductsCard">
      <h5>Total Number of Items</h5>
      <ul>
        <strong>Total Items: {totalEtsyItems(props)+totalEbayItems(props)}</strong>
        <li>Total # Etsy Items: {totalEtsyItems(props)}</li>
        <li>Total # Ebay Items: {totalEbayItems(props)}</li>
      </ul>
    </div>
  );
}

export default TotalStockItems;