import React from "react";
import "./style.css";

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
  return (
    <div className="viewCard">
      <ol>
        <h5>Top Viewed Products</h5>
        {topViewsFirst(props).slice(0, 5).map(props => (
          <li key={props._id}>
            <div className="row">
              <div className="col">
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
}

export default TopViewedList;
