const GlobalServices = {};

GlobalServices.global = require("./global.services");
GlobalServices.email = require("./email.services");
GlobalServices.order = require("./order.services");
module.exports = GlobalServices;
