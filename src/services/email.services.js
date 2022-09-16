const Modals = require('../models/index');
const GlobalServices = require("./global.services");
const transporter = require("../utils/send-email");
const mailchimpClient = require("../utils/send-email-mailchip");
const emailTemp = require('../emailTemplates/EmailTemplate');

// *************************************************************************
let emailServices = module.exports = {
  stripeFatMintSuccess: async (email, payLoad, mintedImagesUrls, transactionHash) => {
    let emailFile = await emailTemp.mintedSuccess(payLoad, mintedImagesUrls, transactionHash);
    emailServices.submitEmail(email, emailFile);
  },
  // **********************************************************************
  resetPassword: async (email, payLoad) => {
    let emailFile = await emailTemp.resetPassword(payLoad);
    let result = await emailServices.submitEmail(email, emailFile, "Email Reset Password.");
    return result
  },
  // **********************************************************************
  blockChainMintingError: async (email, payLoad) => {
    let emailError = {
      account_id: payLoad.metaMask_id,
      email: email,
      error_description: "User have paid his amount but found block chain error.",
      error_message: "",
      error_type: "minting_error",
    }
    GlobalServices.saveErrors(emailError)
    let emailFile = await emailTemp.mintedBlockChainError(payLoad);
    emailServices.submitEmail(email, emailFile);
  },
  blockChainErrorAndRecordError: async (email, payLoad) => {
    let emailError = {
      account_id: payLoad.metaMask_id,
      email: email,
      error_description: "User have paid his amount but found block chain error and also error record is not updated to true state.",
      error_message: "",
      error_type: "minting_error",
    }
    GlobalServices.saveErrors(emailError)
    let emailFile = await emailTemp.mintingBlockChainErrorNoRecord(payLoad);
    emailServices.submitEmail(email, emailFile);
  },
  // **********************************************************************
  submitEmail: async (email, emailFile, subject = "Payment Information") => {
    let emailResult = await transporter.sendMail({
      from: 'NFTespaña <hola@nftes.es>', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: "NFT-es", // plain text body
      html: emailFile, // html body
    }).then(data => {
      if (data.messageId) {
        console.log("Email enviado con éxito.", email, "subject", subject);
        return true
      } else {
        // if (payLoad.metaMask_id) {
        //   let emailError = {
        //     account_id: payLoad.metaMask_id,
        //     email: email,
        //     error_description: `Email not sent properly on user minting.`,
        //     error_message: JSON.stringify(data),
        //     error_type: "email_sending_error",
        //   }
        //   GlobalServices.saveErrors(emailError)
        // }

        console.log("email sending error.", data);
        return false
      }
    }).catch(error => {
      console.log("email sending error", error.message);
      // if (payLoad.metaMask_id) {
      //   let emailError = {
      //     account_id: payLoad.metaMask_id,
      //     email: email,
      //     error_description: error.message,
      //     error_message: JSON.stringify(error),
      //     error_type: "email_sending_error",
      //   }
      //   GlobalServices.saveErrors(emailError)
      // } else {
      //   let emailError = {
      //     account_id: "Admin account error",
      //     email: email,
      //     error_description: error.message,
      //     error_message: "",
      //     error_type: "admin_account",
      //   }
      //   GlobalServices.saveErrors(emailError)
      // }
      return false
    });
    return emailResult
  },
  // **********************************************************************
  submitEmail2: async (email, emailFile, subject = "Payment Information") => {
    const message = {
      from_email: "noreply@nftes.es",
      subject: subject,
      html: emailFile,
      to: [
        {
          email: email,
          type: "to"
        }
      ]
    };
    const response = await mailchimpClient.messages.send({ message });
    console.log("email details", response)
    if (response[0].status == "sent") {
      return true
    } else {
      return false
    }
  },
  // **********************************************************************
}