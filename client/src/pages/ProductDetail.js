import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
// import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import DisplayContainer from "../components/DisplayContainer";
// import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col } from "../components/Grid";
import { List } from "../components/List";
import ProductCard from "../components/ProductCard";
import { FormBtn } from "../components/Form";
// import "./style.css";
// import axios from "axios";
import jsonp from 'jsonp'

class ProductDetail extends Component {
  state = {
    search: "",
    results: [],
    listings: [],
    // books: [],
    // id: "",
    // disabled: false
  };

  componentDidMount() {
    // this.returnEtsyListings();
    // this.loadListings();
  }

  // loadListings = () => {
  //   API.getListings()
  //     .then(res =>
  //       this.setState({ listings: res.data, title: "", price: "", quantity: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // saveItem = item => {
  //   // console.log("Saving book");
  //   // console.log(book);
  //   alert(item.title + " saved!");
  //   API.saveItem(item)
  //     .then(res => {
  //       this.setState({
  //         items: item
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log("Key clicked!");
    this.setState({ search: event.target.value });
  };

  handleEtsySearch = event => {
    event.preventDefault();
    console.log("Submitting Etsy API call!");
    this.returnEtsyListings()
  };

  // handleEtsySave = event => {
  //   event.preventDefault();
  //   console.log("Saving Etsy data to MongoDB!");
  //   this.returnEtsyListings()
  // };

  saveEtsyListing = results => {
    console.log("Saving Etsy listing");
    console.log(results);
    // console.log(results[0].title);
    // var listing = results;
    //         for (var i=0; i < listing.length; i++) {
    //             listing[i].channel = "etsy";
    //         }
    //         console.log(listing[0].channel);
    console.log(this.state.results[0].title);
    for (var i=0; i < this.state.results.length; i++) {
        results[i].channel = "Etsy";
    }
    console.log(results[0].channel);


    API.saveListing(results)
      .then(res => {
        // this.setState({
        //   listings: results
        // });
        console.log("Saved!");
        console.log(res);
        console.log(res.config.data);
        console.log(res.data);
        // 
      })
      .catch(err => console.log(err));
  };

  returnEtsyListings() {
    let term = "SilverandGoldGallery"; // need to put in env
    let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&includes=Images:1&api_key=" + api_key, null, (err, data) => {
      //console.log("Waiting for Etsy API callback...");
      if (err) {
        console.error(err.message);
      }
      else {
        console.log("data is", data);
        let finalResult = [];
        console.log("new loop value")
        for (let value of data.results) {
          console.log(value)
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
        this.setState({results: finalResult})
        //console.log("state is", this.state)
        this.saveEtsyListing(this.state.results);
        // console.log(this.state.results[0].title);
        // for (var i=0; i < this.state.results.length; i++) {
        //     this.state.results[i].channel = "etsy";
        // }
        // console.log(this.state.results[0].channel);
      }
      // this.handleEtsySave();
    });
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log("Form submitted!");
  //   // if (this.state.search) {
  //   // API.searchItems(this.state.search)
  //   API.searchItems()
  //   // .then(res => {
  //   // console.log(res.data);
  //   // this.setState({ results: res.data.items })
  //   // this.loadBooks()
  //   // console.log(this.state.results);
  //   // console.log(this.state.results[0].id);
  //   // })
  //   // .catch(err => console.log(err))
  //   // })
  //   // }
  // };

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
                <h2>Products Currently For Sale</h2>
                {/* <div>Summary table of inventory and search for items</div> */}
                {/* <h1>{data.results[0].title}</h1> */}
              </Jumbotron>

              {/* <Wrapper> */}
              <div>
                <form style={{float: 'left', marginRight: "5px"}}>
                  {/* <h2>Item Search</h2> */}
                  {/* <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Silver ring (required)"
                  /> */}
                  <FormBtn
                    // disabled={!this.state.search}
                    // onClick={this.handleFormSubmit}
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
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          quantity={item.quantity}
                          listing_id={item.listing_id}
                          sku={item.sku}
                          key={item.title}
                          views={item.views}
                          url={item.url}
                          description={item.description} 
                          state={item.state}
                          channel={item.channel}/>
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

export default ProductDetail;







// import React, { Component } from "react";
// // import SaveBtn from "../components/SaveBtn";
// // import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import Wrapper from "../components/Wrapper";
// import NavSide from "../components/NavSide";
// import API from "../utils/API";
// // import { Link } from "react-router-dom";
// // import Thumbnail from "../components/Thumbnail";
// import { Col } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

// class Inventory extends Component {
//   state = {
//     items: [],
//     title: "",
//     author: "",
//     synopsis: "",
//     search: "",
//     results: []
//   };

//   componentDidMount() {

//   }

//   handleInputChange = event => {
//     console.log("Clicked key!");
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     console.log("Submitting form!");

//     if (this.state.title && this.state.author) {

//       API.saveItem({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.synopsis
//       })
//         .then(res => this.loadItems())
//         .catch(err => console.log(err));
//     }
//   };

//   loadItems = () => {
//     API.getItems()
//       .then(res =>
//         this.setState({ items: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteItem = id => {
//     API.deleteItem(id)
//       .then(res => this.loadItems())
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       // <Container fluid>
//         <Col size="md-12 sm-12">
//           <div className="row">
//             <Col size="md-2">
//               <NavSide>
//               </NavSide>
//             </Col>
//             <Col size="md-10">
//               <Jumbotron>
//                 <h1>Inventory</h1>
//                 <div>Summary table of inventory and search for items</div>
//               </Jumbotron>

//               <Wrapper>
//                 <form>
//                   <h2>Item Search</h2>
//                   <Input
//                     value={this.state.search}
//                     onChange={this.handleInputChange}
//                     name="search"
//                     placeholder="Silver ring (required)"
//                   />
//                   <FormBtn
//                     disabled={!this.state.search}
//                     onClick={this.handleFormSubmit}
//                   >Search</FormBtn>
//                 </form>
//               </Wrapper>

//               <div className="row">
//                 <Col size="md-12 sm-12">
//                   <Wrapper>
//                     {this.state.results.length ? (

//                       <List>
//                         {this.state.results.map(book => {
//                           return (
//                             <ListItem key={book.title}>
//                               <strong>
//                                 {book.title} by {book.author}
//                               </strong>
//                               <hr />
//                               {book.synopsis}
//                             </ListItem>
//                           );
//                         }
//                         )}
//                       </List>
//                     ) : (
//                         <h3>No Results to Display</h3>
//                       )}
//                   </Wrapper>

//                 </Col>
//               </div>
//             </Col>
//           </div>
//         </Col>
//       // </Container >
//     );
//   }

//   // render() {
//   //   return (
//   //     <Container fluid>

//   //       <Col size="md-12">
//   //         <Jumbotron>
//   //           <h1>Inventory</h1>
//   //         </Jumbotron>
//   //         <Wrapper>
//   //           <form>
//   //             <h2>Book Search</h2>
//   //             <Input
//   //               value={this.state.search}
//   //               onChange={this.handleInputChange}
//   //               name="search"
//   //               placeholder="A Tale of Two Cities (required)"
//   //             />
//   //             <FormBtn
//   //               disabled={!this.state.search}
//   //               onClick={this.handleFormSubmit}
//   //             >
//   //               Search
//   //               </FormBtn>
//   //           </form>
//   //         </Wrapper>

//   //       </Col>


//   //       <Col size="md-12 sm-12">
//   //         <Wrapper>
//   //           {this.state.results.length ? (

//   //             <List>
//   //               {this.state.results.map(book => {
//   //                 return (
//   //                   // <div style={{ borderTop: "1px solid black", borderLeft: "1px solid black", borderRight: "1px solid black",  }}>
//   //                   <ListItem key={book.title}>
//   //                     <a rel="noreferrer noopener" target="_blank" href="#">
//   //                       <strong style={{ fontSize: "24px" }}>
//   //                         {book.title}
//   //                       </strong>
//   //                     </a>
//   //                     <br />
//   //                     by {book.author}
//   //                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//   //                     <SaveBtn onClick={() => this.saveBook(book._id)} />
//   //                     <hr />
//   //                     <Row>
//   //                       <Col size="xs-1 sm-1">
//   //                         <Thumbnail src={book.thumbnail} />
//   //                       </Col>
//   //                       <Col size="xs-11 sm-11">
//   //                         {book.synopsis}
//   //                       </Col>
//   //                     </Row>

//   //                   </ListItem>
//   //                   // </div>
//   //                 );
//   //               }
//   //               )}
//   //             </List>

//   //           ) : (
//   //               <h3>No Results to Display</h3>
//   //             )}

//   //         </Wrapper>
//   //       </Col>

//   //     </Container>
//   //   );
//   // }
// }

// export default Inventory;


// //  <a rel="noreferrer noopener" target="_blank" href={href}>
// //                     <Link to={"/books/" + book._id}>
// //                       <strong>
// //                         {book.title} by {book.author}
// //                       </strong>
// //                     </Link>
// //                     </a>
// //                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
// //                     <SaveBtn onClick={() => this.saveBook(book._id)} />
// //                   </ListItem>


// // <List>
// //                 {this.state.books.map(book => {
// //                   return (
// //                   <ListItem 
// //                     key={book._id}
// //                     title={book.title}
// //                     // href={book.href}
// //                     synopsis={book.synopsis}
// //                     // thumbnail={book.thumbnail}
// //                     />
// //                 );}
// //                 )}
// //               </List>