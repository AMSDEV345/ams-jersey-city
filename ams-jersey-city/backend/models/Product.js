const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String,
  type: String,
  badge: String,
});

module.exports = mongoose.model("Product", ProductSchema);