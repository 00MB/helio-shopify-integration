const Modals = require('../models/index');
const AppServices = require("./global.services")
// *************************************************************************
let adminServices = module.exports = {
  createNft: async (payLoad) => {
    let data = new Modals.nftes(payLoad)
    return data.save().then(result => result).catch(error => error.message)
  },
  getNftByObject: async (payLoad) => {
    let result = await Modals.nftes.findOne(payLoad).then(data => data).catch(error => error)
    return result
  },

}