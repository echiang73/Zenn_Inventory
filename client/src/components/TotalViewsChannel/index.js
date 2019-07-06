import React from "react";
import "./style.css";
// const logoImages = require.context('../assets/images/logos', true);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

function totalViews(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.views, 0);
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
        <strong>All Views: {totalViews(props)+(totalViews(props)/2)}</strong>
        <li>Total Etsy Views: {totalViews(props)}</li>
        <li>Total Ebay Views: </li>
      </ul>
    </div>
  );


    

 
  // );
}

export default TotalViewsChannel;