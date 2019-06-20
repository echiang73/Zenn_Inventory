import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Summary from "../components/Summary";
// import Wrapper from "../components/Wrapper";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";

class Channels extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    search: "",
    results: []
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      // <Container fluid>
        <Col size="md-12 sm-12">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h1>Storefront Channels</h1>
                <div>Set up Amazon/Etsy/Ebay/etc</div>
              </Jumbotron>
              
              <div className="row">
                <Col size="md-12 sm-12">
                  <Summary>
                    <h1>Amazon</h1>
                    <div>Account Info</div>
                  </Summary>

                </Col>
              </div>
            </Col>
          </div>
        </Col>
      // </Container >
    );
  }
}

export default Channels;
