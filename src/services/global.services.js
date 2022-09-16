const Modals = require('../models/index');
const packages = require('../global-package')
const DateDifference = require('../utils/dateDiff')
const adminService = require("./admin.services")
// *************************************************************************
module.exports = {
  JwtToken: (payLoad) => packages.jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: '90d', }),
  returnResponse: (res, status, error, msg, data) => res.status(status).json({ error, msg, data }),
  // **********************************************************************
  verifyPassword: (encryptedPass, simplePassword) => packages.bcrypt.compare(simplePassword, encryptedPass),
  createOtp: () => {
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';
    for (let i = 0; i < 8; i++) {
      OTP += digits[Math.floor(Math.random() * 36)];
    }
    return OTP;
  },
  encryptedPassword: async (password) => {
    const salt = await packages.bcrypt.genSalt(10);
    password = await packages.bcrypt.hash(password, salt);
    return password
  },
  userCanMint: async (serverTime, metaMaskAddress, userTime) => {
    let dif = await DateDifference(serverTime, userTime);
    console.log("date difference", dif);
    if (dif < 0) {
      return true
    } else {
      let result = await adminService.getWhiteListMetaMaskAccount({ metaMask_address: metaMaskAddress });
      console.log("whiteList ", result)
      if (result && result._id) {
        return true
      } else {
        return false
      }
    }
  },
  // **********************************************************************
  saveErrors: async (payload) => {
    let data = new Modals.error(payload);
    let result = await data.save().then(data => data).catch(error => error.message);
    return result;
  },
}