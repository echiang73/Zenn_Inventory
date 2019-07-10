import React from "react";
import "./style.css";
const loadingImage = require.context('../assets/images', true);
// const logoImages = require.context('../assets/images/logos', true);

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

function TopStockedItem({ props }) {
  // 
  let processing = loadingImage(`./loading3.gif`);
  // let channelLogo = logoImages(`./${props.channel}.png`);
  // console.log(props.name);
  // console.log();

  return (
    <div className="viewTopCard">
      
        <h5>Top Stocked Item</h5>
       

        {props.isloading ? (
              <div>
                {/* // alert("Is loading"), */}
                <img alt="processing" src={processing} id="processingImage"/>
                <h5 id="loadingMessage">Loading, please wait!</h5>
              </div>
                
              ) : (
          
        topQuantityFirst(props.results).slice(0, 1).map(props => (
          
          <div className="img-container" key={props._id}>
            <img alt={props.sku} src={props.image} />
          {/* </div> */}
          <div className="content">
            <ul>
              {/* <li><strong>{props.title}</strong></li> */}
              <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title.replace("&#39;","'")}</a></li>
              {/* <li>{props.title}</li> */}
              {/* <li>{props.description}</li> */}
              {/* <li>${props.price}</li> */}
              <li>${parseInt(props.price).toFixed(2)}</li>
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
        )
          
        ))}
        
    </div>
  );


    

 
  // );
}

export default TopStockedItem;