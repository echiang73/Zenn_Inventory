import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <button type="button" className="btn btn-primary view-btn" {...props} tabIndex="0">
      View
    </button>
  );
}

export default ViewBtn;
