const globalServices = require("../services/index");
// *************************************************************************
module.exports = {
  completeFailedStripePaymentMinting: async () => {
    let faitResult = "";
    let stripePayment = await globalServices.stripe.findPaidFailedPayments();
    if (stripePayment && stripePayment.block_chain_error == true) {
      console.log(stripePayment._id);
      let data = {
        metaMaskAddress: stripePayment.metaMask_id.metaMask_address,
        total_nft: stripePayment.total_nft,
      };
      console.log(data);
      try {
        faitResult = await globalServices.minted.stripeMinting(data);
        if (faitResult && faitResult.events && faitResult.events.isMinted) {
          console.log("ides", faitResult.events.isMinted.returnValues.ids);
          console.log("address", faitResult.events.isMinted.returnValues.addr);
          let account_address = faitResult.events.isMinted.returnValues.addr;
          let nftes_list = faitResult.events.isMinted.returnValues.ids;
          let amount = stripePayment.amount / 100 / stripePayment.total_nft;
          let TransactionHash = faitResult.transactionHash;
          let email = stripePayment.payment_email;
          console.log("TransactionHash", TransactionHash);
          if (nftes_list.length > 0) {
            globalServices.minted.saveMintingRecords(
              account_address,
              amount,
              nftes_list,
              "stripe_payment",
              TransactionHash
            );
            console.log("email sending to:", email);
            let mintedImagesUrls = await globalServices.minted.mintedImagesUrls(
              nftes_list
            );
            console.log("mintedImagesUrls", mintedImagesUrls);
            globalServices.email.stripeFatMintSuccess(
              email,
              stripePayment,
              mintedImagesUrls,
              TransactionHash
            );
            globalServices.stripe.updateStripePaymentObjectRecords(
              stripePayment._id,
              { block_chain_error: false }
            );
            globalServices.email.submitEmail(
              process.env.NODE_APP_SERER_ISSUE_EMAIL,
              `BlockChain job run successfully done.Payment id:${stripePayment._id}`,
              "Nftes server"
            );
          } else {
            console.log("No listing found.");
          }
        } else {
          console.log("blockchain job failed", faitResult);
          globalServices.email.submitEmail(
            process.env.NODE_APP_SERER_ISSUE_EMAIL,
            `BlockChain job run failed.Payment id:${
              stripePayment._id
            } and faitResult error is:${JSON.stringify(faitResult, null, 2)}`,
            "Nftes server"
          );
          return "BlockChain job run failed";
        }
      } catch (error) {
        console.log("faitError", error);
        globalServices.email.submitEmail(
          process.env.NODE_APP_SERER_ISSUE_EMAIL,
          `BlockChain job run failed.Payment id:${
            stripePayment._id
          } and error is:${JSON.stringify(error, null, 2)}`,
          "Nftes server"
        );
        return "BlockChain job run failed";
      }
    } else {
      globalServices.email.submitEmail(
        process.env.NODE_APP_SERER_ISSUE_EMAIL,
        "minting job process done.No un-minted payment found.",
        "Nftes server"
      );
      return "No Failed Record found.";
    }
  },
  // ************************************************
};
