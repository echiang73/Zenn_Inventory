// "use strict";

import React from "react";
// import React, { Component } from "react";
import "./style.css";
// import { render } from "react-dom";
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-enterprise';
// import 'ag-grid-enterprise/chartsModule';

// const logoImages = require.context('../assets/images/logos', true);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

function totalEtsyItems(props) {
  return props.reduce((accumulator, prop) =>
    accumulator + prop.etsy_quantity, 0);
}

function totalEbayItems(props) {
  return props.reduce((accumulator, prop) =>
    accumulator + prop.ebay_quantity, 0);
}

function TotalStockItems({ props }) {
  return (
    <div className="totalProductsCard">
      <h5>Total Number of Items</h5>
      <ul>
        <strong>Total Items: {totalEtsyItems(props)+totalEbayItems(props)}</strong>
        <li>Total # Etsy Items: {totalEtsyItems(props)}</li>
        <li>Total # Ebay Items: {totalEbayItems(props)}</li>
      </ul>
    </div>
  );
}

// class TotalStockItems extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       columnDefs: [
//         {
//           field: "channel",
//           width: 50,
//           chartDataType: "category"
//         },
//         {
//           field: "quantity",
//           enableValue: true
//         }
//       ],
//       defaultColDef: {
//         width: 50,
//         resizable: true
//       },
//       popupParent: document.body,
//       processChartOptions: function (params) {
//         var opt = params.options;
//         opt.title = { text: "Total Items" };
//         opt.legendPosition = "bottom";
//         if (params.type === "groupedBar") {
//           opt.xAxis.labelRotation = 0;
//         }
//         opt.seriesDefaults.tooltipRenderer = function (params) {
//           var value = params.datum[params.yField];
//           return `<b>${params.yField}</b>: ${value}`;
//         };
//         return opt;
//       },
//       rowData: []
//     };
//   }

//   onGridReady = params => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//   //   const httpRequest = new XMLHttpRequest();
//   //   const updateData = data => {
//   //     this.setState({ rowData: data });
//   //   };

//   //   httpRequest.open(
//   //     "GET",
//   //     "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/wideSpreadOfSports.json"
//   //   );
//   //   httpRequest.send();
//   //   httpRequest.onreadystatechange = () => {
//   //     if (httpRequest.readyState === 4 && httpRequest.status === 200) {
//   //       updateData(JSON.parse(httpRequest.responseText));
//   //     }
//   //   };
//   };

//   onFirstDataRendered(params) {
//     var chartRangeParams = {
//       cellRange: {
//         rowStartIndex: 0,
//         rowEndIndex: 79,
//         columns: ["channel", "quantity"]
//       },
//       chartType: "groupedBar",
//       chartContainer: document.querySelector("#myChart"),
//       aggregate: true
//     };
//     params.api.chartRange(chartRangeParams);
//   }

//   render(props) {
//     return (
//       <div style={{ width: "100%", height: "100%" }}>
//         <div class="wrapper totalProductsCard">
//           <div
//             id="myGrid"
//             style={{
//               height: "100%",
//               width: "100%"
//             }}
//             className="ag-theme-balham my-grid"
//           >
//             <AgGridReact
//               columnDefs={this.state.columnDefs}
//               defaultColDef={this.state.defaultColDef}
//               popupParent={this.state.popupParent}
//               enableRangeSelection={true}
//               enableCharts={true}
//               processChartOptions={this.state.processChartOptions}
//               onGridReady={this.onGridReady}
//               onFirstDataRendered={this.onFirstDataRendered.bind(this)}
//               rowData={this.state.rowData}
//             />
//           </div>
//             <h5>Total Number of Items</h5>
//               <ul>
//                 <strong>Total Items: {totalEtsyItems(props)+totalEbayItems(props)}</strong>
//                 <li>Total # Etsy Items: {totalEtsyItems(props)}</li>
//                 <li>Total # Ebay Items: {totalEbayItems(props)}</li>
//               </ul>
//           <div id="myChart" class="ag-theme-balham my-chart" />
//         </div>
//       </div>
//     );
//   }
// }

export default TotalStockItems;