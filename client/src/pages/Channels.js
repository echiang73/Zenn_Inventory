import React, { Component } from "react";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import { Col } from "../components/Grid";
import StoreFrontCard from '../components/StoreFrontCard';

class Channels extends Component {
  static defaultProps = {
    store: [
      {
        name: 'Amazon'
      }, {
        name: 'Ebay'
      }, {
        name: 'Etsy'
      }
    ]
  };

  render() {
    return (<div>
      <Nav />
      <Col size="md-12 sm-12">
        <div className="row">
          <Col size="md-2">
            <NavSide />
          </Col>
          <Col size="md-10">
            <div className="row">
              <Col size="md-12 sm-12">
                {this.props.store.map((store) => (<StoreFrontCard storeFront={store.name} />))}
              </Col>
            </div>
          </Col>
        </div>
      </Col>
    </div>);
  }
}

export default Channels;
