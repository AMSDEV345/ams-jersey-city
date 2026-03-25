const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String },
  items: [{
    productId: String,
    name: String,
    price: Number,
    size: String,
    quantity: { type: Number, default: 1 },
    image: String,
  }],
  total: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["whatsapp", "bank"], default: "whatsapp" },
  status: { type: String, enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"], default: "pending" },
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);