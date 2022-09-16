const Modals = require("../models/index");
const AppServices = require("../services/global.services");
const nftesServices = require("../services/nftes.services");
const nftServices = require("../services/nft.services");
const emailServices = require("../services/email.services");
const adminServices = require("../services/admin.services");
// const web3ContractConnection = require('../utils/web3-contract-connection');
// const nonceConnection = require('../utils/web3-calculete-nonce');
// *************************************************************************
var Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");
const ContractKeysDev = require("../config/contract-dev.config.json");
const ContractKeysProd = require("../config/contract-prod.config.json");
let ContractKeys = "";
if (process.env.NODE_ENV == "develop" || process.env.NODE_ENV == "local") {
  ContractKeys = ContractKeysDev;
} else {
  ContractKeys = ContractKeysProd;
}
var SmartContractAddress = ContractKeys.contract.SMART_CONTRACT_ADDRESS;
var SmartContractABI = ContractKeys.contract.SMART_CONTRACT_ABI;
var address = process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS;
var privatekey = process.env.META_MASK_ADMIN_ACCOUNT_PRIVATE_KEY;
var rp_curl = process.env.SMART_CONTRACT_RPC_URL;
// *************************************************************************
let MintService = (module.exports = {
  getMetaMaskAccountByObject: (payLoad) =>
    Modals.minted
      .findOne(payLoad)
      .then((result) => result)
      .catch((error) => error.message),
  getMetaMaskAccountByID: (payLoad) =>
    Modals.minted
      .findById(payLoad)
      .then((result) => result)
      .catch((error) => error.message),
  updateMetaMaskAccountById: (id, updating_objects) =>
    Modals.minted
      .findByIdAndUpdate({ _id: id }, { $set: updating_objects }, { new: true })
      .then((result) => result)
      .catch((error) => ""),
  // **********************************************************************
  createMintRecord: async (payLoad) => {
    let data = new Modals.minted(payLoad);
    return data
      .save()
      .then((result) => result)
      .catch((error) => "");
  },
  // **********************************************************************
  saveMintingRecords: async (
    account_address,
    amount,
    nftes_list,
    payment_type,
    transactionHash,
    nft_type
  ) => {
    nftes_list.forEach(async (data) => {
      // ******************************************************************
      if (data) {
        let nft_block_chain_id = data;
        let saving_object = {
          metaMask_address: account_address.toLowerCase(),
          nft_block_chain_id: nft_block_chain_id,
          paid_amount: amount,
          payment_type: payment_type,
          transactionHash: transactionHash,
          nft_type,
        };
        console.log("saving_object", saving_object);
        let mintedRecord = await MintService.createMintRecord(saving_object);
        if (mintedRecord._id) {
          console.log("minted record saved successfully.");
        } else {
          console.log("minted record not saved.");
        }
      }
      // *********************************************************
    });
  },
  // **********************************************************************
  mintedImagesUrls: async (nftes_list) => {
    let MintedNFTData = [];
    console.log(nftes_list);
    for (let i = 0; i < nftes_list.length; i++) {
      let result = await nftServices.tokenDetails(nftes_list[i]);
      if (result && result._id) {
        let IpfsHash = result.IpfsHash;
        MintedNFTData.push(result);
      }
    }
    return MintedNFTData;
  },
  // **********************************************************************
  stripeMinting: async (payLoad) => {
    let categoriesList = await adminServices.getCategoriesData();
    let categoryId = categoriesList.length;
    console.log("data for minting", payLoad);
    console.log(
      "admin metaMask acccount",
      process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS
    );
    try {
      let web3ContractConnection = "";
      let web3 = "";
      var provider = await new Provider(privatekey, rp_curl);
      web3 = new Web3(provider);
      web3ContractConnection = await new web3.eth.Contract(
        SmartContractABI,
        SmartContractAddress
      );
      if (web3ContractConnection) {
        let gasPrice = await new Promise((resolve, reject) => {
          web3.eth
            .getGasPrice()
            .then((result) => resolve(web3.utils.fromWei(result, "wei") * 10))
            .catch((error) => reject({ error }));
        });
        console.log("gasPrice", gasPrice);
        let nonce = await new Promise((resolve, reject) => {
          web3.eth
            .getTransactionCount(process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS)
            .then((data) => resolve(data))
            .catch((error) => reject({ error }));
        });
        console.log("nonce", nonce);
        let faitResult = await new Promise((resolve, reject) => {
          web3ContractConnection.methods
            .fiatRandomMint(
              payLoad.metaMaskAddress,
              payLoad.total_nft,
              categoryId
            )
            .send({
              from: process.env.META_MASK_ADMIN_ACCOUNT_ADDRESS,
              nonce,
              gasPrice,
            })
            .on("receipt", function (data) {
              resolve(data);
            })
            .catch((error) => {
              reject({ errors: error.message, blockHash: "" });
            });
        });
        console.log("faitResult", faitResult);
        return faitResult;
      } else {
        emailServices.submitEmail(
          process.env.NODE_APP_SERER_ISSUE_EMAIL,
          `Minting Error from stripe:${JSON.stringify(error, null, 2)}`,
          "Minting stripe error."
        );
        return { errors: error.message, blockHash: "" };
      }
    } catch (error) {
      console.log("block chain stripe error", error);
      emailServices.submitEmail(
        process.env.NODE_APP_SERER_ISSUE_EMAIL,
        `Minting Error from strip catch block:${JSON.stringify(
          error,
          null,
          2
        )}`,
        "Minting stripe error."
      );
      return { errors: error.message, blockHash: "" };
    }
  },
  // **********************************************************************
});
