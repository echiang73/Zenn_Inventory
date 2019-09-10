import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
import { FormBtn, ClearBtn } from "../components/Form";
import jsonp from 'jsonp';
import Summary from "../components/Summary";
import TotalValueInventory from "../components/TotalValueInventory";
import TotalStockItems from "../components/TotalStockItems";
import TopStockedList from "../components/TopStockedList";
import TopStockedItem from "../components/TopStockedItem";
import TotalViewsChannel from "../components/TotalViewsChannel";
import TopViewedList from "../components/TopViewedList";
import TopViewedItem from "../components/TopViewedItem";
import './DashboardStyle.css';
import AveragePriceListing from "../components/AveragePriceListing";

class Dashboard extends Component {
  state = {
    results: [],
    isloading: false
  };
  finalResult = [];
  offsetMultiples = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ results: res.data }, console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  getResults = (i) => {

    console.log("Call " + i);
    let term = "SilverandGoldGallery";
    // let term = "CUSTOMIZEDFORYOUuk";
    let api_key = "xv3l1bj1g4cwg1ihrprejjce";
    jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&offset=" + this.offsetMultiples[i] + "&includes=Images:1&api_key=" + api_key, null, (err, data) => {
      if (err) {
        console.error(err.message);
      }
      else {

        for (let value of data.results) {
          let callbackResult = {
            image: value.Images[0].url_570xN,
            title: value.title.replace("&#39;", "'").replace('&quot;', '"').replace('&quot;', '"').substr(0, 75),
            price: value.price,
            etsy_quantity: value.quantity,
            listing_id: value.listing_id,
            sku: value.sku[0],
            etsy_views: value.views,
            url: value.url,
            description: value.description.replace("&#39;", "'").replace('&quot;', '"').replace('&quot;', '"'),
            state: value.state,
            channel: "Etsy"
          }
          this.finalResult.push(callbackResult);
          this.saveEtsyListing([callbackResult]);
          this.componentDidMount();
        }


        if (i < this.offsetMultiples.length - 1) {
          this.getResults(i + 1);
        }
        else {

          this.setState({ results: this.finalResult, isloading: false });

        }
      }

    });

  }

  handleEtsySearch = event => {
    event.preventDefault();
    this.finalResult = [];
    this.setState({ isloading: true });
    this.getResults(0);
  }

  handleEbaySearch = event => {
    event.preventDefault();
    console.log("Handling Ebay API Call!");
  }

  saveEtsyListing = results => {
    API.saveListing(results)
      .then(res => {
        console.log("Saved in Mongo!");
      })
      .catch(err => console.log(err));
  };

  clearDatabase = results => {
    API.clearListings(results)
      .then(res => {
        console.log("Cleared Mongo!");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container1">
        <Nav>
        </Nav>

        <Col size="md-12 sm-12" className="noPadding">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h2>Summary of Inventory</h2>
              </Jumbotron>

              <div>
                <form style={{ float: 'left', marginRight: "5px" }}>
                  <FormBtn
                    onClick={this.handleEtsySearch}>
                    Manual Etsy API Call
                  </FormBtn>
                </form>
                <form style={{ float: 'left', marginRight: "5px" }}>
                  <FormBtn
                    onClick={this.handleEbaySearch}>
                    Manual Ebay API Call
                  </FormBtn>
                </form>
                <form>
                  <ClearBtn
                    onClick={this.clearDatabase}>
                    Clear Database
                  </ClearBtn>
                </form>
              </div>
              <Summary>
                <div className="row">
                  <div className="col-lg-3">
                    <TotalValueInventory props={this.state.results} />
                  </div>
                  <div className="col-lg-3">
                    <AveragePriceListing props={this.state.results} />
                  </div>
                  <div className="col-lg-auto">
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-3">
                    <TotalStockItems props={this.state.results} />
                  </div>
                  <div className="col-lg-3">
                    <TopStockedItem props={this.state} />
                  </div>
                  <div className="col-lg-auto">
                    <TopStockedList props={this.state.results} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-3">
                    <TotalViewsChannel props={this.state.results} />
                  </div>
                  <div className="col-lg-3">
                    <TopViewedItem props={this.state} />
                  </div>
                  <div className="col-lg-auto">
                    <TopViewedList props={this.state.results} />
                  </div>
                </div>
              </Summary>
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default Dashboard;
