const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  sku: { type: String, required: true},
  title: { type: String, required: true, unique: true },
  price: { type: String, required: false },
  quantity: { type: String, required: false },
  listing_id: { type: String, required: false },
  views: { type: String, required: false },
  image: { type: String, required: false },
  url: { type: String, required: false}, 
  description: { type: String, required: false },
  state: { type: String, required: false },
  channel: { type: Array, required: false  }
});

const Item = mongoose.model("Item", itemSchema);
// const items = mongoose.model("items", itemSchema);

module.exports = Item;
// module.exports = items;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   imageurl: { type: String, required: true },
//   link: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now },
//   saved: { type: Boolean, default: false }
// });
