import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DisplayContainer from "../components/DisplayContainer";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
import ProductCard from "../components/ProductCard";
import { FormBtn } from "../components/Form";
import jsonp from 'jsonp';

class ProductDetail extends Component {
  state = {
    results: []
  };

  // componentDidMount() {
  //   this.loadListings();
  // }

  // loadListings = () => {
  //   API.getListings()
  //     .then(res =>
  //       this.setState({ results: res.data})
  //     )
  //     .catch(err => console.log(err));
  // };

  handleEtsySearch = event => {
    event.preventDefault();
    let term = "SilverandGoldGallery"; // need to put in env
    let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    let offsetMultiples = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]; // saves up to 1000 item listings
    for (let i=0; i < offsetMultiples.length; i++){
      jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&offset="+offsetMultiples[i]+"&includes=Images:1&api_key=" + api_key, null, (err, data) => {
        if (err) {
          console.error(err.message);
        }
        else {
          let finalResult = [];
          for (let value of data.results) {
            let callbackResult = {
              image: value.Images[0].url_570xN,
              title: value.title,
              price: value.price,
              quantity: value.quantity,
              listing_id: value.listing_id,
              sku: value.sku[0],
              views: value.views,
              url: value.url,
              description: value.description,
              state: value.state,
              channel: "Etsy"
              }
              finalResult.push(callbackResult);
          }
          this.setState({results: finalResult});
          this.saveEtsyListing(this.state.results);
        }
      });
    }
  }

  saveEtsyListing = results => {
    API.saveListing(results)
      .then(res => {
        console.log("Saved in Mongo!");
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="container1">
        <Nav>
        </Nav>

        <Col size="md-12 sm-12">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h2>Products Currently For Sale</h2>
              </Jumbotron>

              <div>
                <form style={{float: 'left', marginRight: "5px"}}>
                  <FormBtn
                    onClick={this.handleEtsySearch}>
                    Etsy API Call
                </FormBtn>
                </form>
                <form>
                  <FormBtn onClick={this.handleEbaySearch}>
                    Ebay API Call
                </FormBtn>
                </form>
              </div>
                {this.state.results.length ? (
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
                          channel={item.channel}/>
                      );
                    }
                    )}
                    </DisplayContainer>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProductDetail;