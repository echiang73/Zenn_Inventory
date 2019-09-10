import React from "react";
import "./style.css";
const loadingImage = require.context('../assets/images', true);

function topViewsFirst(props) {
  return props.filter(prop => prop).sort((a, b) => {
    if (a.etsy_views < b.etsy_views) {
      return 1;
    } else if (a.etsy_views > b.etsy_views) {
      return -1;
    } else {
      return 0;
    }
  });
}

function TopViewedItem({ props }) {
  let processing = loadingImage(`./loading3.gif`);
  return (
    <div className="viewTopCard">
        <h5>Top Viewed Item</h5>
        {props.isloading ? (
              <div>
                <img alt="processing" src={processing} id="processingImage"/>
                <h5 id="loadingMessage">Loading, please wait!</h5>
              </div>
              ) : (
        topViewsFirst(props.results).slice(0, 1).map(props => (
          <div className="img-container" key={props._id}>
            <img alt={props.sku} src={props.image} />
          <div className="content">
            <ul>
              <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title.replace("&#39;","'")}</a></li>
              <li>${parseInt(props.price).toFixed(2)}</li>
              <li>Quantity: {props.etsy_quantity}</li>
              <li>Listing ID: {props.listing_id}</li>
              <li>SKU: {props.sku}</li>
              <li>Views: <strong>{props.etsy_views}</strong></li>
              <li>Storefront: {props.channel}</li>
            </ul>
          </div>
        </div>
        ) 
        ))}
    </div>
  );
}

export default TopViewedItem;