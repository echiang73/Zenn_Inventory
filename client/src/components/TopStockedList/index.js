import React from "react";
import "./style.css";

function topQuantityFirst(props) {
  return props.filter(prop => prop).sort((a, b) => {
    if (a.etsy_quantity < b.etsy_quantity) {
      return 1;
    } else if (a.etsy_quantity > b.etsy_quantity) {
      return -1;
    } else {
      return 0;
    }
  });
}

function TopStockedList({ props }) {
  return (
    <div className="viewCard">
      <ol>
        <h5>Top Stocked Products</h5>
        {
          topQuantityFirst(props).slice(0, 5).map(props => (
            <li key={props._id}>
              <div className="row">
                <div className="col">
                  <a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title.replace("&#39;", "'")}</a>
                </div>
                <div className="col-3">
                  Quantity: <strong>{props.etsy_quantity}</strong>
                </div>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default TopStockedList;
