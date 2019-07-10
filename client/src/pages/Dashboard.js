import React, { Component } from "react";
// import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
// import DisplayContainer from "../components/DisplayContainer";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
// import ProductCard from "../components/ProductCard";
import { FormBtn, ClearBtn } from "../components/Form";
import jsonp from 'jsonp';
import Summary from "../components/Summary";
import TotalValueInventory from "../components/TotalValueInventory";
// import TopStockedList from "../components/TopStockedList";
// import TopStockedItem from "../components/TopStockedItem";
import TotalStockItems from "../components/TotalStockItems";
import TopStockedList from "../components/TopStockedList";
import TopStockedItem from "../components/TopStockedItem";
import TotalViewsChannel from "../components/TotalViewsChannel";
import TopViewedList from "../components/TopViewedList";
import TopViewedItem from "../components/TopViewedItem";
import './DashboardStyle.css';
import AveragePriceListing from "../components/AveragePriceListing";

// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

// function topViewsFirst(items) {
//   return items.filter(item => item).sort((a, b) => {
//     if (a.views < b.views) {
//       return 1;
//     } else if (a.views > b.views) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// }

// function TopViewList({ items }) {

//   return (
//     <ol>
//       <h5>Top Viewed Products</h5>
//       {topViewsFirst(items).slice(0, 5).map(item => (
//         <li key={item.id}>
//           {item.name} {item.views} views: {item.title}
//         </li>
//       ))}
//     </ol>
//   );
// }

// let items = [
//   { id: 0, name: "Cup", views: 5, isNew: true },
//   { id: 1, name: "Piano", views: 500, isNew: true },
//   { id: 2, name: "T-Shirt", views: 10, isNew: true },
//   { id: 3, name: "Rescue Bots", views: 7, isNew: true }
// ];

// function Dashboard() {
class Dashboard extends Component {
  state = {
    results: [],
    isloading: false
  };
  finalResult = [];
  offsetMultiples = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  // const [results, setResults] = useState('[]');

  componentDidMount() {
    this.loadListings();
  }

  // useEffect(() => {
  // loadListings();
  // setInterval(() => {
  //   setUsername('MJ');
  //   setFirstname('Mary');
  //   setLastname('Jane');
  // }, 0);
  // });


  loadListings = () => {
    // const loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ results: res.data }, console.log(res.data))
        // setResults(res.data, console.log(res.data))
        // setResults(res.data)
      )
      .catch(err => console.log(err));
  };

  getResults = (i) => {

    console.log("Call " + i);
    let term = "SilverandGoldGallery"; // need to put in env
    let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&offset=" + this.offsetMultiples[i] + "&includes=Images:1&api_key=" + api_key, null, (err, data) => {
      if (err) {
        console.error(err.message);
      }
      else {

        for (let value of data.results) {
          let callbackResult = {
            image: value.Images[0].url_570xN,
            title: value.title,
            price: value.price,
            etsy_quantity: value.quantity,
            listing_id: value.listing_id,
            sku: value.sku[0],
            etsy_views: value.views,
            url: value.url,
            description: value.description,
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

          this.setState({ results: this.finalResult, isloading: false});
          
        }
      }

    });

  }

  handleEtsySearch = event => {
    // const handleEtsySearch = event => {
    event.preventDefault();
    // let term = "SilverandGoldGallery"; // need to put in env
    // let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    //let offsetMultiples = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]; // saves up to 1000 item listings
    this.finalResult = [];
    this.setState({ isloading: true });
    this.getResults(0);




    // for (let i = 0; i < offsetMultiples.length; i++) {
    //   jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&offset=" + offsetMultiples[i] + "&includes=Images:1&api_key=" + api_key, null, (err, data) => {
    //     if (err) {
    //       console.error(err.message);
    //     }
    //     else {

    //       for (let value of data.results) {
    //         let callbackResult = {
    //           image: value.Images[0].url_570xN,
    //           title: value.title,
    //           price: value.price,
    //           etsy_quantity: value.quantity,
    //           listing_id: value.listing_id,
    //           sku: value.sku[0],
    //           views: value.views,
    //           url: value.url,
    //           description: value.description,
    //           state: value.state,
    //           channel: "Etsy"
    //         }
    //         finalResult.push(callbackResult);
    //       }
    //       this.setState({ results: finalResult });
    //       // setResults(finalResult);
    //       // saveEtsyListing(results);
    //       this.saveEtsyListing(this.state.results);
    //     }
    //   });
    // }
  }

  handleEbaySearch = event => {
    event.preventDefault();
    console.log("Handling Ebay API Call!");
  }

  saveEtsyListing = results => {
    // const saveEtsyListing = results => {
    API.saveListing(results)
      .then(res => {
        console.log("Saved in Mongo!");
        // this.componentDidMount();
      })
      .catch(err => console.log(err));
  };

  clearDatabase = results => {
    // const clearDatabase = results => {
    API.clearListings(results)
      .then(res => {
        console.log("Cleared Mongo!");
      })
      .catch(err => console.log(err));
  };

  // let items = [
  //   { id: 0, name: "Cup", views: 5, isNew: true },
  //   { id: 1, name: "Piano", views: 500, isNew: true },
  //   { id: 2, name: "T-Shirt", views: 10, isNew: true },
  //   { id: 3, name: "Rescue Bots", views: 7, isNew: true }
  // ];


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
                    {/* onClick={handleEtsySearch}> */}
                    Manual Etsy API Call
                  </FormBtn>
                </form>
                <form style={{ float: 'left', marginRight: "5px" }}>
                  <FormBtn
                    onClick={this.handleEbaySearch}>
                    {/* onClick={handleEbaySearch}> */}
                    Manual Ebay API Call
                  </FormBtn>
                </form>
                <form>
                  <ClearBtn
                    onClick={this.clearDatabase}>
                    {/* onClick={clearDatabase}> */}
                    Clear Database
                  </ClearBtn>
                </form>
              </div>


              {/* <TopViewList props={this.state.results} /> */}

              <Summary>

                {/* <h1>My name is {this.state.results[0].title}</h1> */}
                {/* {this.state.results.map(item => {
                      return (
                        <SummaryCard
                        title={item.title}
                        />
                      );
                    }
                    )} */}





                {/* <div className="dashboardWrapper"> */}

                <div className="row">
                  <div className="col-lg-3">
                    <TotalValueInventory props={this.state.results} />
                  </div>
                  <div className="col-lg-3">
                    <AveragePriceListing props={this.state.results} />
                  </div>
                  <div className="col-lg-auto">
                    {/* <TopStockedList props={this.state.results} /> */}
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

                {/* </div> */}
              </Summary>

              {/* {this.state.results.length ? (
                <DisplayContainer>
                  {this.state.results.map(item => {
                    return (
                      <ProductCard
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        listing_id={item.listing_id}
                        sku={item.sku}
                        key={item.listing_id}
                        views={item.views}
                        url={item.url}
                        description={item.description}
                        state={item.state}
                        channel={item.channel} />
                    );
                  }
                  )}
                </DisplayContainer>
              ) : (
                  <h3>No Results to Display</h3>
                )} */}
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default Dashboard;
