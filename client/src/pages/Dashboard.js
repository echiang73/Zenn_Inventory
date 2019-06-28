import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import DisplayContainer from "../components/DisplayContainer";
import Summary from "../components/Summary";
// import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col } from "../components/Grid";
import { List } from "../components/List";
import ProductCard from "../components/ProductCard";
// import { FormBtn } from "../components/Form";

class Dashboard extends Component {
  state = {
    items: [],
    title: "",
    price: "",
    synopsis: "",
    search: "",
    results: []
  };

  componentDidMount() {
    this.loadListings();
    this.loadGraphs();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        // {console.log("Got data from MongoDB!!!");
        // console.log(res)}
        this.setState({ results: res.data, title: "", price: res.data.price, synopsis: "" })
      )
      .catch(err => console.log(err));
  };



  loadGraphs = () => {
    function Chart() {
      this.type= "";
      this.data= "";
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Amazon', 'Etsy', 'Ebay'],
        datasets: [{
          label: ['monthly sales'],
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales:
        {
          yAxes: [{
            ticks: { beginAtZero: true },
            scaleLabel: { display: true, labelString: 'Number of Orders/Month' }
          }],
          xAxes: [{
            ticks: { beginAtZero: true },
            scaleLabel: { display: true, labelString: 'Storefront', fontSize: 12, fontColor: '#666' }
          }]
        },

        legend: { display: false, labels: { fontColor: 'rgb(255, 99, 132)' } },

        // layout: {padding: {left: 50, right: 50, top: 0, bottom: 0}}
      }
    });



    // var ctx = document.getElementById('myChart2').getContext('2d');
    // var myPieChart = new Chart(ctx, {
    //   // type: 'bar',
    //   type: 'pie',
    //   data: {
    //     labels: ['Amazon', 'Etsy', 'Ebay'],
    //     datasets: [{
    //       label: ['monthly sales'],
    //       data: [12, 19, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         // 'rgba(255, 206, 86, 0.2)',
    //         // 'rgba(75, 192, 192, 0.2)',
    //         // 'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         // 'rgba(255, 206, 86, 1)',
    //         // 'rgba(75, 192, 192, 1)',
    //         // 'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     // scales:
    //     // {
    //     // yAxes: [{ticks: {beginAtZero: true, callback: function(value, index, values) {return '$' + value;}}, 
    //     //         scaleLabel: {display: true, labelString: 'Y-axis Title'}}],
    //     // xAxes: [{ticks: {beginAtZero: true}, 
    //     //         scaleLabel: {display: true, labelString: 'X-axis Title', fontSize: 16, fontColor: 'green'}}]
    //     // },

    //     legend: { display: true, labels: { fontColor: '#666' } },

    //     layout: { padding: { left: 0, right: 0, top: 0, bottom: 50 } }
    //   }
    // });



  }




render() {

  const items = this.state.results.map((product) => {
    // return (<List title={product.title} image={product.Images[0].url_75x75} price={product.price} key={product.listing_id} id={product.listing_id} />)
    return (<List
    // price={product.price}
    // quantity={product.quantity}
    // title={product.title}
    // description={product.description}
    // listing_id={product.listing_id}
    // sku={product.sku}
    // url={product.url}
    // views={product.views}
    // images={product.Images[0].url_fullxfull}
    />)
  })


  return (
    <div className="container1">
      {/* <Container fluid> */}
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
              <h2>Summary of Sales and Inventory</h2>
              {/* <div>Summary table of inventory and search for items</div> */}
              {/* <h1>{data.results[0].title}</h1> */}
            </Jumbotron>


            <Summary>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    Order Trend
                        <canvas id="myChart" width="400" height="400"></canvas>
                  </div>
                  <div class="col-sm">
                    Revenue: Total=$?
                        <canvas id="myChart2" width="400" height="400"></canvas>
                  </div>
                </div>
              </div>
            </Summary>






            {/* <Wrapper> */}
            <div>
             
            </div>
            {/* </Wrapper> */}


            {/* <Wrapper> */}
            {/* <Wrapper> */}
            {/* <div> */}
            {this.state.results.length ? (
              // <List>
              <DisplayContainer>
                {this.state.results.map(item => {
                  return (
                    // <ListItem key={item.id}>
                    <ProductCard
                      // _id={item._id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                      listing_id={item.listing_id}
                      sku={item.sku}
                      views={item.views}
                      url={item.url}
                      description={item.description}
                      state={item.state}
                      channel={item.channel} />
                  );
                }
                )}
              </DisplayContainer>
              // </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
            {/* </div> */}
            {/* </Wrapper> */}
            {/* </Wrapper> */}

          </Col>
        </div>
      </Col>

      {/* </Container> */}
    </div>
  );
}
}

export default Dashboard;