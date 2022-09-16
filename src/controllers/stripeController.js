const GlobalServices = require("../services/index")
// *************************************************************************
module.exports = {
  createPaymentLink: async (req, res) => {
    let NFT_ES = req.body.total_nft;
    let adminSettings = await GlobalServices.admin.getAdminSettings()
    let NFT_es_value = adminSettings.minting_euro_fee;
    let discountPercentage = adminSettings.discount_percentage;
    let metaMask_address = req.jwt_account.metaMask_address.toLowerCase();
    let UserData = await GlobalServices.minted.getMetaMaskAccountByObject({ metaMask_address: metaMask_address });
    let discount = 0;
    if (UserData) {
      discount = (discountPercentage / 100) * (NFT_ES * NFT_es_value);
    }
    if (NFT_ES && NFT_es_value > 0) {
      let data = {
        total_nfts: NFT_ES,
        payment_amount: (NFT_ES * NFT_es_value) - discount
      }
      if (data.payment_amount > 0) {
        let paymentData = await GlobalServices.stripe.stripePaymentLink(data);
        if (paymentData) {
          const paymentInfo = {
            metaMask_id: req.jwt_account._id,
            payment_id: paymentData.id,
            raw_data: JSON.stringify(paymentData),
            payment_status: paymentData.payment_status,
            payment_url: paymentData.url,
            payment_intent: paymentData.payment_intent,
            total_nft: NFT_ES,
            amount: NFT_es_value * 100 * NFT_ES,
            payment_email: req.body.email
          }
          let result = await GlobalServices.stripe.savePaymentLink(paymentInfo)
          if (result) {
            return res.status(201).json({
              error: false,
              msg: 'stripe payment link',
              data: { url: result.payment_url, discount: discount },
            });
          } else {
            return res.status(406).json({
              error: true,
              msg: 'Error en el pago con Stripe.',
              data: { url: "" },
            });
          }
        } else {
          return res.status(401).json({
            error: true,
            msg: 'Error en la creación del link de pago en Stripe.',
            data: {},
          });
        }
      } else {
        return res.status(406).json({
          error: true,
          msg: 'El total de NFTs es necesario o no se ha establecido aún.',
          data: { url: "" },
        });
      }
    } else {
      return res.status(406).json({
        error: true,
        msg: 'El total de NFTs es necesario o no se ha establecido aún.',
        data: { url: "" },
      });
    }
  },
  // ************************************************
}