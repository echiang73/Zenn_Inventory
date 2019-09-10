import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './InventoryStyle.css';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';

class Inventory extends Component {
  state = {
    results: [],
    columnDefs: [],
    rowData: [],
    quickFilterText: null,
  };

  componentDidMount() {
    this.loadTableData();
  }

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

  static titleCellRenderer(params) {
    if (params.value) {
      return `${params.value.replace("&#39;","'")} `;
    } else {
      return null;
    }
  }

  static descriptionCellRenderer(params) {
    if (params.value) {
      return `${params.value.replace("&#39;","'")} `;
    } else {
      return null;
    }
  }

  static priceCellRenderer(params) {
    if (params.value) {
      return `$${params.value.toFixed(2)} `;
    } else {
      return null;
    }
  }

  onQuickFilterText = (event) => {
    this.setState({quickFilterText: event.target.value});
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
                <h2>Inventory</h2>
              </Jumbotron>

              <div style={{ width: "100%", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ overflow: "hidden", flexGrow: "1" }}>
                    <div id="myGrid" style={{ height: "750px", width: "100%" }} className="ag-theme-balham" >
                        <div>
                            <label htmlFor="quickFilter" id="quickFilterLabel">Quick Filter:&nbsp;</label>
                            <input type="text" id="quickFilter" onChange={this.onQuickFilterText} placeholder="Type text to filter..."/>
                        </div>

                      <AgGridReact
                        quickFilterText={this.state.quickFilterText}
                        rowData={this.state.rowData}>
                        <AgGridColumn field="image" width={85} headerName="Image" pinned editable
                          cellRenderer={Inventory.itemCellRenderer}>
                        </AgGridColumn>
                        <AgGridColumn field="title" width={300} headerName="Title" pinned resizable
                          cellRenderer={Inventory.titleCellRenderer}
                          filter="text" sortable filterParams={{ cellRenderer: Inventory.titleCellRenderer, cellHeight: 20 }}>
                        </AgGridColumn>
                        <AgGridColumn field="channel" width={105} headerName="Storefront" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="listing_id" width={105} headerName="Listing ID" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="sku" width={85} headerName="SKU" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="etsy_views" width={105} headerName="Etsy Views" filter="text" sortable resizable cellRendererFramework={ProficiencyCellRenderer}></AgGridColumn>
                        <AgGridColumn field="etsy_quantity" width={120} headerName="Etsy Quantity" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="price" width={85} headerName="Price" resizable
                          cellRenderer={Inventory.priceCellRenderer}
                          filter="text" sortable filterParams={{ cellRenderer: Inventory.priceCellRenderer, cellHeight: 20 }}></AgGridColumn>
                        <AgGridColumn field="url" width={210} headerName="URL" editable resizable
                          cellRenderer={Inventory.urlCellRenderer}
                          filter="set" sortable filterParams={{ cellRenderer: Inventory.urlCellRenderer, cellHeight: 20 }}>
                        </AgGridColumn>
                        <AgGridColumn field="state" width={85} headerName="State" filter="text" sortable resizable></AgGridColumn>
                        <AgGridColumn field="description" width={500} headerName="Description" resizable
                          cellRenderer={Inventory.descriptionCellRenderer}
                          filter="text" sortable filterParams={{ cellRenderer: Inventory.descriptionCellRenderer, cellHeight: 20 }}>
                        </AgGridColumn>
                      </AgGridReact>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </div>
    );
  }
}

export default Inventory;