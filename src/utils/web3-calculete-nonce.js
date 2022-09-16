var Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');

var address = process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS;
var privatekey = process.env.META_MASK_ADMIN_ACCOUNT_PRIVATE_KEY;
var rp_curl = process.env.SMART_CONTRACT_RPC_URL;
console.log("rp_curl", rp_curl);

var provider = new Provider(privatekey, rp_curl);
var nonceConnection =  new Web3(provider);

module.exports = nonceConnection
