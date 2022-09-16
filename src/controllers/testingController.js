const GlobalServices = require("../services/index")
const emailServices = require("../services/email.services")
const mailchimpClient = require('../utils/send-email-mailchip');
const emailTemplate = require('../emailTemplates/EmailTemplate')
// *************************************************************************
module.exports = {
  // **********************************************************************
  testEmail: async (req, res) => {
    let email = req.body.email
    let emailTemp = await emailTemplate.testHtmlEmail()
    let result = await emailServices.submitEmail(email, emailTemp);
    console.log(result)
    return res.status(200).json({
      msg: "email send successfully."
    })
  },
  // **********************************************************************
  mailChimpEmail: async (req, res) => {
    let emailTemp = await emailTemplate.testHtmlEmail()
    const message = {
      from_email: "noreply@nftes.es",
      subject: "Hello world",
      html: emailTemp,
      to: [
        {
          email: "rehman@nftes.es",
          type: "to"
        }
      ]
    };
    const response = await mailchimpClient.messages.send({
      message
    });
    console.log(response);
    GlobalServices.global.returnResponse(res, 200, false, "mailChimp sent", response)
  },
  // **********************************************************************
  mintingList: async (req, res) => {
    let mintedImagesUrls = req.body.mintedImagesUrls;
    let result = await GlobalServices.minted.mintedImagesUrls(mintedImagesUrls)
    GlobalServices.global.returnResponse(res, 200, false, "mailChimp sent", result);
  },
  // **********************************************************************
}

