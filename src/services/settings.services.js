const Modals = require('../models/index');
const AppServices = require("./global.services")
// *************************************************************************
let settingsServices = module.exports = {
  updateAdminSettings: (updating_objects) => Modals.adminSettings.findOneAndUpdate({}, { $set: updating_objects }, { new: true }).then(result => result).catch(error => {
    console.log("error while updating admin settings:", error)
    return ""
  }),
  // *************************************************************************

}