const mongoose = require("mongoose");

const nftSchema = mongoose.Schema(
  {
    nftes_file: {
      type: String,
      default: '',
    },
    nft_type: {
      type: String,
      default: ""
    },
    collection_type: {
      type: String,
      default: ''
    },
    royalties: {
      type: Number,
      default: 0
    },
    copy_count: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ""
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

const Nft = mongoose.model('nft', nftSchema);

module.exports = Nft;
