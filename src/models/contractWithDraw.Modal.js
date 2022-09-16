const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    transfer_address: {
      type: String,
      required: [true, 'MetaMask transfer address is required.'],
    },
    admin_account: {
      type: String,
      required: [true, 'MetaMask transfer address is required.'],
    },
    matic_amount: {
      type: Number,
      required: [true, 'Matic amount is required.'],
    },
  },
  {
    timestamps: true,
  }
);


const schemaObject = mongoose.model('contract_withdraw', schema);

module.exports = schemaObject;
