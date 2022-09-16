const mongoose = require("mongoose");

const nftsSchema = mongoose.Schema(
  {
    ipfs_img_hash: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    properties: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    token_id: {
      type: Number,
      default: 0,
    },
    ipfs_file_hash: {
      type: String,
      default: "",
    },
    trnsaction_hash: {
      type: String,
      default: "",
    },
    royalties: {
      type: Number,
      default: 0,
    },
    copy_count: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Nfts = mongoose.model("nfts", nftsSchema);

module.exports = Nfts;
