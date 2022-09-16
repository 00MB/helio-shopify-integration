const Modals = require('../models/index');
const AppServices = require("./global.services")
// *************************************************************************
let contractWithDrawServices = module.exports = {
  withDrawAmount: async (payLoad) => {
    let data = new Modals.contractWithDraw(payLoad)
    return data.save().then(result => result).catch(error => "");
  },
  // **********************************************************************


}