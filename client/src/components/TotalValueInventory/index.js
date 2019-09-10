import React from "react";
import "./style.css";

function totalValue(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.price, 0);
}

function TotalValueInventory({ props }) {
  return (
    <div className="totalValueCard">
      <h5>Total Value of Inventory</h5>
        <div id="total-value">${totalValue(props).toLocaleString()}</div>
    </div>
  );
}

export default TotalValueInventory;