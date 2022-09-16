const Modals = require('../models/index');
const packages = require('../global-package')
const MetaMaskServices = require('./metaMask.services')
const GlobalService = require('./global.services')
const MintedService = require('./minted.services')
const emailServices = require('./email.services')


// *************************************************************************
let stripeServices = module.exports = {
  stripePaymentLink: (payLoad) => {
    return packages.stripe.checkout.sessions.create({
      line_items: [{
        quantity: 1,
        amount: parseInt(payLoad.payment_amount * 100),
        currency: "eur",
        name: `You are buying random ${payLoad.total_nfts} NFT-ES.`,
      }],
      metadata: {
        product_details: "following are the product details.",
      },
      mode: 'payment',
      success_url: `${process.env.REACT_APP_URL}/stripe/success`,
      cancel_url: `${process.env.REACT_APP_URL}/stripe/failed`,
      // payment_intent_data: {
      //   application_fee_amount: 0,
      //   transfer_data: {
      //     destination: product_data.created_by.stripe_account.id,
      //   },
      // },
    }).catch(error => {
      console.log(error.message)
      return error.message
    })
  },
  // **********************************************************************
  savePaymentLink: async (payLoad) => {
    let data = new Modals.stripePayment(payLoad)
    return data.save().then(result => result).catch(error => "")
  },
  // **********************************************************************
  findPaymentByPaymentIntent: async (payLoad) => {
    let data = await Modals.stripePayment.findOne({ payment_intent: payLoad }).then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  findPaidFailedPayments: async () => {
    let data = await Modals.stripePayment.findOne({ block_chain_error: true }).populate("metaMask_id").then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  findPaidFailedBlochChainList: async () => {
    let data = await Modals.stripePayment.find({ block_chain_error: true }).populate("metaMask_id").then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  updatePaymentByPaymentPaidStatus: async (payLoad) => {
    let data = await Modals.stripePayment.findByIdAndUpdate({ _id: payLoad }, { $set: { payment_status: "Paid" } }, { new: true }).then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  findStripePaymentByID: async (payLoad) => {
    let data = await Modals.stripePayment.findById({ _id: payLoad }).populate('metaMask_id').then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  updateStripePaymentObjectRecords: async (id, payLoad) => {
    let data = await Modals.stripePayment.findByIdAndUpdate({ _id: id }, { $set: payLoad }, { new: true }).then(data => data).catch(error => error.message)
    return data
  },
  // **********************************************************************
  faitStripeMinting: async (payload) => {
    let result = await stripeServices.findPaymentByPaymentIntent(payload.id);
    console.log("payment mongoose id", result._id)
    if (result && result._id) {
      let payment_result = await stripeServices.updatePaymentByPaymentPaidStatus(result._id);
      console.log(payment_result)
      let metaMaskDetails = await MetaMaskServices.getMetaMaskAccountByID(result.metaMask_id);
      let metaMaskAddress = metaMaskDetails.metaMask_address
      let email = result.payment_email;
      let data = {
        total_nft: result.total_nft,
        metaMaskAddress: metaMaskAddress
      }
      let faitResult = await MintedService.stripeMinting(data);
      console.log("stripe payments blockChain changes.", faitResult)
      if (faitResult.events.Transfer) {
        let list = []
        let blockChainList = faitResult.events.Transfer
        if (Array.isArray(faitResult.events.Transfer)) {
          console.log("result is array")
          let ids = blockChainList.map(data => data.returnValues.tokenId)
          list = ids
        } else {
          let id = blockChainList.returnValues.tokenId
          list.push(id)
          console.log("result is not array")
        }
        console.log("ides", list)
        console.log("address", metaMaskAddress)
        let account_address = metaMaskAddress;
        let nftes_list = list
        let amount = result.amount / 100 / result.total_nft;
        let TransactionHash = faitResult.transactionHash;
        console.log("TransactionHash", TransactionHash)
        if (nftes_list.length > 0) {
          MintedService.saveMintingRecords(account_address, amount, nftes_list, "stripe_payment", TransactionHash)
          console.log("email sending to:", email);
          let mintedImagesUrls = await MintedService.mintedImagesUrls(nftes_list);
          console.log("mintedImagesUrls", mintedImagesUrls)
          emailServices.stripeFatMintSuccess(email, result, mintedImagesUrls, TransactionHash)
          emailServices.submitEmail(process.env.NODE_APP_SERER_ISSUE_EMAIL, `New stripe mint successfully done. id:${result._id} and success record:${JSON.stringify(faitResult, null, 2)}`, "New mint success.")
        } else {
          console.log("No listing found.")
          emailServices.submitEmail(process.env.NODE_APP_SERER_ISSUE_EMAIL, `New stripe mint found some error. id:${result._id} and error:${JSON.stringify(faitResult, null, 2)}`, "New mint failed.")
        }
      } else {
        emailServices.submitEmail(process.env.NODE_APP_SERER_ISSUE_EMAIL, `New stripe mint failed id:${result._id} and error:${JSON.stringify(faitResult, null, 2)}`, "New mint failed.")
        let emailError = {
          account_id: result.metaMask_id,
          email: email,
          error_description: "block chain minting error after stripe payment done.",
          error_message: JSON.stringify(faitResult),
          error_type: "minting_error",
        }
        GlobalService.saveErrors(emailError)
        let payment_result = await stripeServices.updateStripePaymentObjectRecords(result._id, { block_chain_error: true, block_chain_error_raw: JSON.stringify(faitResult) });
        console.log("payment_result", payment_result)
        if (payment_result._id && payment_result.block_chain_error == true) {
          console.log("BlockChain error found and update.");
          emailServices.blockChainMintingError(payment_result.payment_email, payment_result);
        } else {
          console.log("Block chain error found and can not updated.");
          emailServices.blockChainErrorAndRecordError(result.payment_email, result);
        }
      }
    }
  },

}