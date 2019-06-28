import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
// import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import "./style.css";
// import axios from "axios";
import jsonp from 'jsonp'

class Inventory extends Component {
  state = {
    search: "",
    results: [],
    listings: [],
    books: [],
    id: "",
    disabled: false
  };


  componentDidMount() {

    this.returnEtsyListings();
  }

  returnEtsyListings () {
    let term = "SilverandGoldGallery"; // need to put in env
    let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=10&includes=Images:1&api_key=" + api_key, null, (err, data) => {
      console.log("Making Etsy API call");
        if (err) {
          console.error(err.message);
        }
        else {
          console.log("data is", data);
          this.setState({
            results: data.results
          })
          // console.log("state is", this.state)
        }
      });
  }


  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", authors: "", description: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  saveItem = item => {
    // console.log("Saving book");
    // console.log(book);
    alert(item.title + " saved!");
    API.saveItem(item)
      .then(res => {
        this.setState({
          items: item
        });
      })
      .catch(err => console.log(err));
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log("Key clicked!");
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted!");
    // if (this.state.search) {
    // API.searchItems(this.state.search)
    API.searchItems()
    // .then(res => {
    // console.log(res.data);
    // this.setState({ results: res.data.items })
    // this.loadBooks()
    // console.log(this.state.results);
    // console.log(this.state.results[0].id);
    // })
    // .catch(err => console.log(err))
    // })
    // }
  };

  render() {
   
    return (
      <div className="container1">
        <Nav>
        </Nav>
        {/* <Container fluid> */}

        <Col size="md-12 sm-12">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h1>Inventory</h1>
                <div>Summary table of inventory and search for items</div>
                {/* <h1>{data.results[0].title}</h1> */}
              </Jumbotron>

              {/* <Wrapper> */}
              <div>
                <form>
                  <h2>Item Search</h2>
                  <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Silver ring (required)"
                  />
                  <FormBtn
                    disabled={!this.state.search}
                    onClick={this.handleFormSubmit}
                  >
                    Search
                </FormBtn>
                </form>
              </div>
              {/* </Wrapper> */}


              {/* <Wrapper> */}
              <div>
                {this.state.results.length ? (
                  <List>
                    {this.state.results.map(item => {
                      return (
                        <ListItem key={item.id}>
                          {/* <a rel="noreferrer noopener" target="_blank" href={item.volumeInfo.infoLink}> */}
                          
                            {/* <strong style={{ fontSize: "24px" }}> */}
                              {/* {item.volumeInfo.title} */}
                              {/* {item.title}
                              {item.description} */}
                              <ul>
                                <img src={item.Images[0].url_170x135} alt="item"/>
                                <li><a rel="noreferrer noopener" target="_blank" href={item.url}>{item.title}</a></li>
                                {/* <li>{item.description}</li> */}
                                <li>${item.price}</li>
                                <li>Quantity: {item.quantity}</li>
                                <li>Listing ID: {item.listing_id}</li>
                                <li>SKU: {item.sku}</li>
                                
                                <li>Views: {item.views}</li>
                              </ul>

                            {/* </strong> */}
                          {/* </a> */}

                          




                          <br />
                          {/* by {(item.volumeInfo.authors).join(", ")} */}
                          {/* {const submitDisabled = this.state.search !== this.state.search} */}
                          {/* <button disabled={submitDisabled}>hello</button> */}
                          {/* <button {disabled}>Test-button</button> */}
                          <SaveBtn
                            // {window.location.pathname === "/" ? "disabled: true" : " "}
                            // disabled = "true"
                            onClick={() => {
                              this.saveItem({
                                title: item.volumeInfo.title,
                                authors: (item.volumeInfo.authors).join(", "),
                                description: item.volumeInfo.description,
                                thumbnail: item.volumeInfo.imageLinks.thumbnail,
                                link: item.volumeInfo.infoLink,
                                previewLink: item.volumeInfo.previewLink,
                                _id: item.id
                              }
                              )
                            }}
                          // onChange={this.state.disabled= true}
                          />
                          <a rel="noreferrer noopener" target="_blank" href={item.url}>
                            <ViewBtn /></a>
                          
                          <Row>
                            <Col size="xs-1 sm-1">
                              {/* <Thumbnail src={item.volumeInfo.imageLinks.thumbnail} /> */}
                            </Col>
                            <Col size="xs-11 sm-11">
                              {/* {item.volumeInfo.description} */}
                            </Col>
                          </Row>
                        </ListItem>
                      );
                    }
                    )}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
              </div>
              {/* </Wrapper> */}

            </Col>
          </div>
        </Col>

        {/* </Container> */}
      </div>
    );
  }


}

export default Inventory;







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