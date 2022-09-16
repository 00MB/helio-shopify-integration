const Modals = require('../models/index');
const AppServices = require("../services/global.services")
// *************************************************************************
let MetaServices = module.exports = {
  getMetaMaskAccountByObject: (payLoad) => Modals.MetaMask.findOne(payLoad).then(result => result).catch(error => error.message),
  getWhiteListMetaMaskByObject: (payLoad) => Modals.emailWhitelist.findOne(payLoad).then(result => result).catch(error => error.message),
  getMetaMaskAccountByID: (payLoad) => Modals.MetaMask.findById(payLoad).then(result => result).catch(error => error.message),
  updateMetaMaskAccountById: (id, updating_objects) => Modals.MetaMask.findByIdAndUpdate({ _id: id }, { $set: updating_objects }, { new: true }).then(result => result).catch(error => ""),
  // **********************************************************************
  createMetaMaskAccount: async (payLoad) => {
    let data = new Modals.MetaMask(payLoad)
    return data.save().then(result => result).catch(error => "")
  },
  // **********************************************************************
  findOrCreateMetaMaskAccount: async (metaMask_address, email) => {
    if (metaMask_address) {
      let metaMaskAccount = await MetaServices.getMetaMaskAccountByObject({ metaMask_address });//metaMask address
      if (metaMaskAccount) {
        let token = await AppServices.JwtToken({ _id: metaMaskAccount._id })//(object_to_add_jwt)
        let updateResult = await MetaServices.updateMetaMaskAccountById(metaMaskAccount._id, { token, email }) //(document_id,updating_objects)
        return updateResult
      } else {
        let result = await MetaServices.createMetaMaskAccount({ metaMask_address, email });
        let token = await AppServices.JwtToken({ _id: result._id })//(object_to_add_jwt)
        let updateResult = await MetaServices.updateMetaMaskAccountById(result._id, { token }) //(document_id,updating_objects)
        return updateResult
      }
    }
  },
  // **********************************************************************


}