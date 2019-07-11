import React from "react";
import "./style.css";
// const logoImages = require.context('../assets/images/logos', true);

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

function TopViewedList({ props }) {
  // 
  // let channelLogo = logoImages(`./${props.channel}.png`);
  // console.log(props.name);
  // console.log();

  return (
    <div className="viewCard">
      <ol>
        <h5>Top Viewed Products</h5>
        
        {topViewsFirst(props).slice(0, 5).map(props => (
          
          <li key={props._id}>
            <div className="row">
              <div className="col">
                {/* {props.title.replace("&#39;","'")} */}
                <a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title.replace("&#39;","'")}</a>
              </div>
              <div className="col-3">
                <strong>{props.etsy_views}</strong> views
              </div>
            </div>
          </li>
          
        ))}
        
      </ol>
    </div>
  );


    

  // <div className="card">
  //   <div className="img-container">
  //     <img alt={props.name} src={props.image} />
  //   </div>
  //   <div className="content">
  //     <ul>
  //       {/* <li><strong>{props.title}</strong></li> */}
  //       <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title}</a></li>
  //       {/* <li>{props.title}</li> */}
  //       {/* <li>{props.description}</li> */}
  //       <li>${props.price}</li>
  //       <li>Quantity: {props.quantity}</li>
  //       <li>Listing ID: {props.listing_id}</li>
  //       <li>SKU: {props.sku}</li>
  //       <li>Views: {props.views}</li>
  //       <li>State: {props.state}</li>
  //       <li>Channel: {props.channel}</li>
  //       {/* <li><img src='channelLogo' /></li> */}
  //       {/* <li>Logo: <img src={props.channelLogo} alt="logo" /></li> */}
  //     </ul>
  //   </div>

  // </div>
  // );
}

export default TopViewedList;
