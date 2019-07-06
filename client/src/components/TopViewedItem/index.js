import React from "react";
import "./style.css";
// const logoImages = require.context('../assets/images/logos', true);

function topViewsFirst(props) {
  return props.filter(prop => prop).sort((a, b) => {
    if (a.views < b.views) {
      return 1;
    } else if (a.views > b.views) {
      return -1;
    } else {
      return 0;
    }
  });
}

function TopViewedItem({ props }) {
  // 
  // let channelLogo = logoImages(`./${props.channel}.png`);
  // console.log(props.name);
  // console.log();

  return (
    <div className="viewTopCard">
      {/* <ol> */}
        <h5>Top Viewed Item</h5>
        
        {topViewsFirst(props).slice(0, 1).map(props => (
          
          // <li key={props._id}>
          //   <div className="row">
          //     <div className="col">
          //       {props.title.replace("&#39;","'")}
          //     </div>
          //     <div className="col-3">
          //       {props.views} views
          //     </div>
          //   </div>
          // </li>

          // <div className="card">
          <div className="img-container" key={props._id}>
            <img alt={props.sku} src={props.image} />
          {/* </div> */}
          <div className="content">
            <ul>
              {/* <li><strong>{props.title}</strong></li> */}
              <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title.replace("&#39;","'")}</a></li>
              {/* <li>{props.title}</li> */}
              {/* <li>{props.description}</li> */}
              <li>${props.price}</li>
              <li>Quantity: {props.etsy_quantity}</li>
              <li>Listing ID: {props.listing_id}</li>
              <li>SKU: {props.sku}</li>
              <li>Views: {props.views}</li>
              {/* <li>State: {props.state}</li> */}
              <li>Storefront: {props.channel}</li>
              {/* <li><img src='channelLogo' /></li> */}
              {/* <li>Logo: <img src={props.channelLogo} alt="logo" /></li> */}
            </ul>
          </div>
      
        </div>


          
        ))}
        
      {/* </ol> */}
    </div>
  );


    

 
  // );
}

export default TopViewedItem;