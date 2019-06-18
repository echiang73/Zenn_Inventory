import React, { Component } from "react";
// import React from "react";
import "./style.css";
// import logo from "../assets/images/ZENNlogo.png";

class NavSide extends Component {
  state = {
    books: []
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // function NavSide() {
  render() {
    return (
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="row">
          <div className="col nav-col">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-dashboard-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
              <a className="nav-link" id="v-pills-inventory-tab" data-toggle="pill" href="/inventory" role="tab" aria-controls="v-pills-inventory" aria-selected="false">Inventory</a>
              <a className="nav-link" id="v-pills-channels-tab" data-toggle="pill" href="/channels" role="tab" aria-controls="v-pills-channels" aria-selected="false">Storefront Channels</a>
              <a className="nav-link" id="v-pills-support-tab" data-toggle="pill" href="/support" role="tab" aria-controls="v-pills-support" aria-selected="false">Support</a>
            </div>
          </div>
          {/* <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...Dashboard</div>
              <div className="tab-pane fade show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...Inventory</div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...Storefront Channels</div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...Support</div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default NavSide;
