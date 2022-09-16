const mongoose = require("mongoose");

const mintedSchema = mongoose.Schema(
  {
    metaMask_address: {
      type: String,
      default: '',
    },
    nft_type: {
      type: String,
      default: ""
    },
    nft_url: {
      type: String,
      default: ''
    },
    nft_block_chain_id: {
      type: String,
      default: ''
    },
    transactionHash: {
      type: String,
      default: ''
    },
    payment_type: {
      type: String,
      default: ""
    },
    paid_amount: {
      type: Number,
      default: 0
    },
    IpfsHash: {
      type: String,
      default: ""
    },
  },
  {
    timestamps: true,
  }
);

const Minted = mongoose.model('minted', mintedSchema);

module.exports = Minted;
