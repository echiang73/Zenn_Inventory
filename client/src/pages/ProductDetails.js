import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DisplayContainer from "../components/DisplayContainer";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
import ProductCard from "../components/ProductCard";
import "./ProductDetails.css";

class ProductDetail extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ results: res.data})
      )
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
                <h2>Products Currently For Sale</h2>
              </Jumbotron>
                {this.state.results.length ? (
                  <DisplayContainer>
                    {this.state.results.map(item => {
                      return (
                        <ProductCard 
                          image={item.image}
                          title={item.title.replace("&#39;","'")}
                          price={item.price.toFixed(2)}
                          quantity={item.etsy_quantity+item.ebay_quantity}
                          listing_id={item.listing_id}
                          sku={item.sku}
                          key={item.listing_id}
                          views={item.views}
                          url={item.url}
                          description={item.description.replace("&#39;","'")} 
                          state={item.state}
                          channel={item.channel}/>
                      );
                    }
                    )}
                    </DisplayContainer>
                ) : (
                    <h5>No Results to Display</h5>
                  )}
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProductDetail;