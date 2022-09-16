const mongoose = require("mongoose");

const errorSchema = mongoose.Schema(
  {
    account_id: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    error_description: {
      type: String,
      default: '',
    },
    error_message: {
      type: String,
      default: '',
    },
    error_type: {
      type: String,
      default: 'general'
    },
  },
  {
    timestamps: true,
  }
);


const Error = mongoose.model('error', errorSchema);

module.exports = Error;
