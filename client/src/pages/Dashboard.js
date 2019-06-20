import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Summary from "../components/Summary";
// import Wrapper from "../components/Wrapper";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

class Dashboard extends Component {
  state = {
    items: [],
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
                <h1>Dashboard</h1>
                <div>Summary of Sales and Inventory</div>
              </Jumbotron>
              
              <div className="row">
                <Col size="md-12 sm-12">
                  <Summary>
                    <h1>Summary</h1>
                    <div>Pie and Bar graphs</div>
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

export default Dashboard;