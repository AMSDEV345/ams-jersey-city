const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, enum: ["home", "away"], default: "home" },
  description: String,
  image: String,
  badge: String,
  stock: { type: Number, default: 10 },
  sizes: { type: [String], default: ["S", "M", "L", "XL"] },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);