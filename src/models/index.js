const Modals = {};

Modals.MetaMask = require("./metaMask.Modal");
Modals.Admin = require("./admin.Modal");
Modals.stripePayment = require("./stripePayment.Modal");
Modals.nftes = require("./nftes.Modal");
Modals.minted = require("./minted.Modal");
Modals.error = require("./error.Modal");
Modals.adminSettings = require("./adminsSettings.Modal");
Modals.emailWhitelist = require("./emailWhiteList.Modal");
Modals.contractWithDraw = require("./contractWithDraw.Modal");
Modals.category = require("./category.Modal");
Modals.nfts = require("./nft.Modal");

module.exports = Modals;
