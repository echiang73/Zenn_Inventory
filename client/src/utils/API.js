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
  },
  clearListings: function(itemsData) {
    return axios.delete("/api/items", itemsData);
  }
};
