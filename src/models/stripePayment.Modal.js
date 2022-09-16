const mongoose = require("mongoose");
var Schema = mongoose.Schema
const stripePaymentSchema = mongoose.Schema(
  {
    metaMask_id: {
      type: Schema.Types.ObjectId, ref: 'metaMask',
      required: [true, 'MataMask address id is required.'],
    },
    payment_id: {
      type: String,
      required: [true, 'Payment id is required.'],
    },
    payment_intent: {
      type: String,
      required: [true, 'payment intent id is required.'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount is required.'],
      default: 0
    },
    payment_email: {
      type: String,
      default: ""
    },
    raw_data: {
      type: String,
      default: ''
    },
    payment_status: {
      type: String,
      default: ''
    },
    total_nft: {
      type: Number,
      default: 0
    },
    payment_url: {
      type: String,
      default: ""
    },
    block_chain_error: {
      type: Boolean,
      default: false
    },
    block_chain_error_raw: {
      type: String,
      default: "false"
    },
  },
  {
    timestamps: true,
  }
);


const stripePayment = mongoose.model('stripePayment', stripePaymentSchema);

module.exports = stripePayment;
