import React, { Component } from "react";
import "./style.css";

class StoreFrontCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    let storeIcon = `fab fa-${this.props.storeFront.toLocaleLowerCase()}`;
    let authRoute = `http://localhost:3001/auth/${this.props.storeFront}`;

    return (
      <div className="continer-fuild">
        <div className="card StoreFrontCard">
          <div className="card-body">
            <h5 className="card-title">{this.props.storeFront} Store front</h5>
            <p className="card-text">
              Connect your {this.props.storeFront} Store Front with Zenn
              Inventory
            </p>
            <a className="btn btn-primary" href={authRoute}>
              Connect to
              <i className={storeIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default StoreFrontCard;
