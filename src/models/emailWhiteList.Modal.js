const mongoose = require("mongoose");

const emailWhiteListSchema = mongoose.Schema(
  {
    metaMask_address: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);


const emailWhitelist = mongoose.model('emailwhitelist', emailWhiteListSchema);

module.exports = emailWhitelist;
