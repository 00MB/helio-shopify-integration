const GlobalServices = {};

GlobalServices.global = require("./global.services");
GlobalServices.stripe = require("./stripe.services");
GlobalServices.metaMask = require("./metaMask.services");
GlobalServices.admin = require("./admin.services");
GlobalServices.nftes = require("./nftes.services");
GlobalServices.minted = require("./minted.services");
GlobalServices.email = require("./email.services");
GlobalServices.settings = require("./settings.services");
GlobalServices.nft = require("./nft.services");

module.exports = GlobalServices;
