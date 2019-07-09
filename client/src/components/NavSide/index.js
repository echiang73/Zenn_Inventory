import React, { Component } from "react";
// import React from "react";
import "./style.css";
// import logo from "../assets/images/ZENNlogo.png";

// function NavSide() {

//   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//     <Row>
//       <Col sm={3}>
//         <Nav variant="pills" className="flex-column">
//           <Nav.Item>
//             <Nav.Link eventKey="first">Tab 1</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="second">Tab 2</Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Col>
//       <Col sm={9}>
//         <Tab.Content>
//           <Tab.Pane eventKey="first">
//             <Sonnet />
//           </Tab.Pane>
//           <Tab.Pane eventKey="second">
//             <Sonnet />
//           </Tab.Pane>
//         </Tab.Content>
//       </Col>
//     </Row>
//   </Tab.Container>
// }



// class NavSide extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       key: 'dashboard',
//     };
//   }

//   render() {
//     return (
//       <Tabs
//         id="controlled-tab-example"
//         activeKey={this.state.key}
//         onSelect={key => this.setState({ key })}
//       >
//         <Tab eventKey="dashboard" title="Dashboard">
//           <Sonnet />
//         </Tab>
//         <Tab eventKey="inventory" title="Inventory">
//           <Sonnet />
//         </Tab>
//         <Tab eventKey="channels" title="Channels">
//           <Sonnet />
//         </Tab>
//       </Tabs>
//     );
//   }
// }

// render(<NavSide />);


class NavSide extends Component {
  state = {
    key: "landing",
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
        <div className="row makeFixed">
          <div className="col nav-col" activekey={this.state.key} onSelect={key => this.setState({ key})}>
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              {/* <a className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} eventkey="landing" id="v-pills-landing-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-landing" aria-selected="true">Landing</a> */}
              <a className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"} eventkey="dashboard" id="v-pills-dashboard-tab" data-toggle="pill" href="/dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">Dashboard</a>
              <a className={window.location.pathname === "/inventory" ? "nav-link active" : "nav-link"} eventkey="inventory" id="v-pills-inventory-tab" data-toggle="pill" href="/inventory" role="tab" aria-controls="v-pills-inventory" aria-selected="false">Inventory</a>
              <a className={window.location.pathname === "/productdetails" ? "nav-link active" : "nav-link"} eventkey="productdetails" id="v-pills-productdetails-tab" data-toggle="pill" href="/productdetails" role="tab" aria-controls="v-pills-productdetails" aria-selected="false">Product Details</a>
              <a className={window.location.pathname === "/channels" ? "nav-link active" : "nav-link"} eventkey="channels" id="v-pills-channels-tab" data-toggle="pill" href="/channels" role="tab" aria-controls="v-pills-channels" aria-selected="false">Storefront Channels</a>
              <a className={window.location.pathname === "/support" ? "nav-link active" : "nav-link"}  eventkey="support" id="v-pills-support-tab" data-toggle="pill" href="/support" role="tab" aria-controls="v-pills-support" aria-selected="false">Support</a>
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
