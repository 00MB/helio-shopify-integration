const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    category_name: {
      type: String,
      default: "",
    },
    count: {
      type: Number,
      default: "",
    },
    matic_price: {
      type: Number,
      default: "",
    },
    euro_price: {
      type: Number,
      default: "",
    },
    transaction_hash: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const category = mongoose.model("category", categorySchema);

module.exports = category;
