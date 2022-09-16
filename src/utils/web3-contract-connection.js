var Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const ContractKeysDev = require('../config/contract-dev.config.json')
const ContractKeysProd = require('../config/contract-prod.config.json')

let ContractKeys = ""
if (process.env.NODE_ENV == "develop" || process.env.NODE_ENV == "local") {
    ContractKeys = ContractKeysDev
} else {
    ContractKeys = ContractKeysProd
}
var SmartContractAddress = ContractKeys.contract.SMART_CONTRACT_ADDRESS;
var SmartContractABI = ContractKeys.contract.SMART_CONTRACT_ABI;
var address = process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS
var privatekey = process.env.META_MASK_ADMIN_ACCOUNT_PRIVATE_KEY;
var rp_curl = process.env.SMART_CONTRACT_RPC_URL;
var provider = new Provider(privatekey, rp_curl);
var web3 = new Web3(provider);


module.exports = new web3.eth.Contract(SmartContractABI, SmartContractAddress);
