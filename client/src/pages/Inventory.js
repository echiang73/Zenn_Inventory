import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import DisplayContainer from "../components/DisplayContainer";
// import Summary from "../components/Summary";
// import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col } from "../components/Grid";
// import { List } from "../components/List";
// import ProductCard from "../components/ProductCard";
import { FormBtn } from "../components/Form";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './InventoryStyle.css';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import BootBox from 'react-bootbox';

class Inventory extends Component {
  state = {
    results: [],
    columnDefs: [],
    // columnDefs: [{
    //   headerName: "Title", field: "title"
    // }, {
    //   headerName: "Storefront", field: "channel"
    // }, {
    //   headerName: "Listing ID", field: "listing_id"
    // }, {
    //   headerName: "SKU", field: "sku"
    // }, {
    //   headerName: "Views", field: "views"
    // }, {
    //   headerName: "Quantity", field: "quantity"
    // }, {
    //   headerName: "Price", field: "price"
    // }, {
    //   headerName: "URL", field: "url"
    // }],
    rowData: [],
    // rowData: [{
    //   make: "Toyota", model: "Celica", price: 35000
    // }, {
    //   make: "Ford", model: "Festiva", price: 32000
    // }, {
    //   make: "Porsche", model: "Boxster", price: 72000
    // }]
    show: false
  };

  componentDidMount() {
    this.loadListings();
    this.loadTableData();
    // this.loadGraphs();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ results: res.data }, console.log(res.data))
      )
      .catch(err => console.log(err));
  };
  loadTableData = () => {
    API.getListings()
      .then(res =>
        this.setState({ rowData: res.data }, console.log(res.data))
      )
      .catch(err => console.log(err));
  };

  static itemCellRenderer(params) {
    if (params.value) {
      return `<img border='0' width='45' height='30' style='margin-bottom: 2px' src='${params.value}'> `;
    } else {
      return null;
    }
  }

  static urlCellRenderer(params) {
    if (params.value) {
      return `<a href='${params.value}' target="_blank">${params.value}</a> `;
    } else {
      return null;
    }
  }

  // onQuickFilterChanged() {
  //   this.gridApi.setQuickFilter(document.getElementById("quickFilter").value);
  // }

  handleArticleNotes = (event) => {
    event.preventDefault();
    // alert("Bingo");
    this.setState({ show: true }) 
    // var currentArticle = $(this).parents(".panel").data();
    // $.get("/api/notes/" + currentArticle._id).then(function(data) {
    //     console.log(currentArticle);
    // var modalText = [
      // "<div class='container-fluid text-center'>",
      // "<h4>Notes For Selected Article: ",
      // currentArticle._id,
      // "</h4>",
      // "<hr />",
      // "<ul class='list-group note-container'>",
      // "</ul>",
      // "<br>",
      // "<textarea placeholder='Type New Note' rows='4' cols='50'></textarea>",
      // "<button class='btn btn-success save'>Save Note</button>",
      // "</div>"
    // ].join("");
    // BootBox.dialog({
      // message: modalText,
      // closeButton: true
    // });
    // var noteData = {
    //     _id: currentArticle._id,
    //     notes: data || []
    // };
    // $(".btn.save").data("article", noteData);
    // renderNotesList(noteData);
    // alert(modalText);
  };

  showAlert = () => {
    alert('Yes is clicked');
    this.handleClose();
  }

  handleClose = () => {
    this.setState({ show: false })
  }

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
                <h2>Inventory</h2>
              </Jumbotron>




              {/* <div>
                <form>
                  <FormBtn onClick={this.handleArticleNotes}>
                    Article Notes
              </FormBtn>
                </form>
              </div>

              <button onClick={() => { this.setState({ show: true }) }}>Click me to open BootBox</button>
              <BootBox
                // message="Do you want to Continue?"
                message={<div>Notes For Selected Article: {this.state.results.price}</div>}
                show={this.state.show}
                onYesClick={this.showAlert}
                onNoClick={this.handleClose}
                onClose={this.handleClose} /> */}





              {/* {this.state.results.length ? ( */}
                <div style={{ width: "100%", height: "600px" }}>
                  <div style={{ height: "100%", paddingTop: "35px", boxSizing: "border-box" }}>
                    <div className="ag-theme-balham">

                      {/* <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                    <input
                      type="text"
                      onInput={this.onQuickFilterChanged.bind(this)}
                      id="quickFilter"
                      placeholder="quick filter..."
                    />
                  </div> */}

                      <AgGridReact
                        // columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                        <AgGridColumn field="image" width={85} headerName="Image" pinned editable
                          cellRenderer={Inventory.itemCellRenderer}
                          filter="set" sortable filterParams={{ cellRenderer: Inventory.itemCellRenderer, cellHeight: 20 }}>
                        </AgGridColumn>
                        <AgGridColumn field="title" width={300} headerName="Title" filter="text" pinned sortable resizable></AgGridColumn>
                        <AgGridColumn field="channel" width={105} headerName="Storefront" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="listing_id" width={105} headerName="Listing ID" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="sku" width={85} headerName="SKU" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="views" width={105} headerName="Views" filter="text" sortable resizable cellRendererFramework={ProficiencyCellRenderer}></AgGridColumn>
                        <AgGridColumn field="quantity" width={100} headerName="Quantity" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="price" width={85} headerName="Price" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="url" width={210} headerName="URL" editable resizable
                          cellRenderer={Inventory.urlCellRenderer}
                          filter="set" sortable filterParams={{ cellRenderer: Inventory.urlCellRenderer, cellHeight: 20 }}>
                        </AgGridColumn>
                        <AgGridColumn field="state" width={85} headerName="State" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="description" width={500} headerName="Description" filter="text" sortable resizable></AgGridColumn>
                      </AgGridReact>
                    </div>
                  </div>
                </div>
              {/* ) : ( */}
                  {/* <h3>No Results to Display</h3> */}
                {/* )} */}

            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default Inventory;