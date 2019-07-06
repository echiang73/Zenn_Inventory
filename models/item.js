const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  sku: { type: String, required: false},
  title: { type: String, required: true},
  price: { type: Number, required: false },
  etsy_quantity: { type: Number, required: false, default: 0 },
  ebay_quantity: { type: Number, required: false, default: 0 },
  listing_id: { type: Schema.Types.String, required: true, unique: true },
  views: { type: Number, required: false },
  image: { type: String, required: false },
  url: { type: String, required: false}, 
  description: { type: String, required: false },
  state: { type: String, required: false },
  channel: { type: Array, required: false  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;