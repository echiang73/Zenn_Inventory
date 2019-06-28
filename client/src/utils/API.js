import axios from "axios";
// import jsonp from 'jsonp'

export default {
  // Gets all items
  getListings: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getListing: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteListing: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveListing: function(itemsData) {
    return axios.post("/api/items", itemsData);
  // },
  // searchListings: function(){
    // console.log("https://www.googleapis.com/books/v1/volumes?q="+itemData+"&key=AIzaSyC4yUBg31kDKaWRNAiIhxhglEMEl0BmPdU");
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q="+itemData+"&key=AIzaSyC4yUBg31kDKaWRNAiIhxhglEMEl0BmPdU");
    // return axios.get("https://openapi.etsy.com/v2/shops/SilverandGoldGallery/listings/active?api_key=xv3l1bj1g4cwg1ihrprejjce");
    // return axios.get("https://openapi.etsy.com/v2/shops/SilverandGoldGallery/listings/active?api_key=xv3l1bj1g4cwg1ihrprejjce", {
    //   headers: {
    //     "Access-Control-Allow-Origin" : "*",
    //     "Content-Type" : "application/json",
    //     "dataType" : "application/json"
    //   }
    // });

    // jsonp("https://openapi.etsy.com/v2/shops/SilverandGoldGallery/listings/active.js?callback=getData&limit=10&includes=Images:1&api_key=xv3l1bj1g4cwg1ihrprejjce", null, (err, data) => {
    //   console.log("Data" + data.ok);
    //   console.log(data.results[0]);
    //   if (err) {
    //     console.error(err.message);
    //   }
    //   else {
    //     console.log("data is", data);
    //     return data;
    //     // this.setState({
    //     //   listing: data.results[0],
    //   }
    // });
  }
};
