const mongoose = require("mongoose");
const adminSettingsSchema = mongoose.Schema(
  {
    drop_site_status: {
      type: Boolean,
      default: false,
    },
    max_mint_count: {
      type: Number,
      default: 0,
    },
    max_nft: {
      type: Number,
      default: 0,
    },
    discount_percentage: {
      type: Number,
      default: 0,
    },
    discount_status: {
      type: Boolean,
      default: false,
    },
    minting_time: {
      type: String,
      default: "",
    },
    minting_matic_fee: {
      type: Number,
      default: 1000000000000000000,
    },
    minting_euro_fee: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);
const AdminSettings = mongoose.model("admin_settings", adminSettingsSchema);

module.exports = AdminSettings;
