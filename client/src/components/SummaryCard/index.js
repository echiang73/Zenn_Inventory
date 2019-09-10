import React from "react";
import "./style.css";

function SummaryCard(props) {
  console.log();

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title}</a></li>
          <li>${props.price}</li>
          <li>Quantity: {props.quantity}</li>
          <li>Listing ID: {props.listing_id}</li>
          <li>SKU: {props.sku}</li>
          <li>Views: {props.views}</li>
          <li>State: {props.state}</li>
          <li>Channel: {props.channel}</li>
        </ul>
      </div>
    </div>
  );
}

export default SummaryCard;
