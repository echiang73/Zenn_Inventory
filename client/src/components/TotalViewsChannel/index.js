import React from "react";
import "./style.css";
// const logoImages = require.context('../assets/images/logos', true);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

function totalEtsyViews(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.etsy_views, 0);
}

function totalEbayViews(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.ebay_views, 0);
}

function TotalViewsChannel({ props }) {
  // 
  // let channelLogo = logoImages(`./${props.channel}.png`);
  // console.log(props.name);
  // console.log();

  return (
    <div className="totalViewsCard">
      <h5>Total Views</h5>
      <ul>
        <strong>All Views: {totalEtsyViews(props)+totalEbayViews(props)}</strong>
        <li>Total Etsy Views: {totalEtsyViews(props)}</li>
        <li>Total Ebay Views: {totalEbayViews(props)}</li>
      </ul>
    </div>
  );


    

 
  // );
}

export default TotalViewsChannel;