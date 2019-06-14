const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageurl: { type: String, required: true }, // added
  link: { type: String, required: true }, // added
  synopsis: String,
  date: { type: Date, default: Date.now },
  saved: { type: Boolean, default: false } // added
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   imageurl: { type: String, required: true },
//   link: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now },
//   saved: { type: Boolean, default: false }
// });
