import React, { Component } from "react";
import "./style.css";

class NavSide extends Component {
  state = {
    key: "landing",
  };

  render() {
    return (
      <div>
        <div className="row makeFixed">
          <div className="col nav-col" activekey={this.state.key} onSelect={key => this.setState({ key})}>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"} eventkey="dashboard" id="v-pills-dashboard-tab" data-toggle="pill" href="/dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
              <a className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"} eventkey="inventory" id="v-pills-inventory-tab" data-toggle="pill" href="/inventory" role="tab" aria-controls="v-pills-inventory" aria-selected="false">Inventory</a>
              <a className={window.location.pathname === "/productdetails" ? "nav-link active" : "nav-link"} eventkey="productdetails" id="v-pills-productdetails-tab" data-toggle="pill" href="/productdetails" role="tab" aria-controls="v-pills-productdetails" aria-selected="false">Product Details</a>
              <a className={window.location.pathname === "/channels" ? "nav-link active" : "nav-link"} eventkey="channels" id="v-pills-channels-tab" data-toggle="pill" href="/channels" role="tab" aria-controls="v-pills-channels" aria-selected="false">Storefront Channels</a>
              <a className={window.location.pathname === "/support" ? "nav-link active" : "nav-link"}  eventkey="support" id="v-pills-support-tab" data-toggle="pill" href="/support" role="tab" aria-controls="v-pills-support" aria-selected="false">Support</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavSide;
