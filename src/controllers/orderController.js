let {
  Order,
} = require("@shopify/shopify-api/dist/rest-resources/2021-10/index.js");
const Shopify = require("@shopify/shopify-api").Shopify;
module.exports = {
  getShopifyOrder: async (req, res) => {
    let { id } = req.params;
    console.log(id);
    const test_session = await Shopify.Utils.loadCurrentSession(
      request,
      response
    );
    const data = await Order.find({
      session: test_session,
      id: id,
    });
    return res.status(200).json({
      msg: "email send successfully.",
      data: data,
    });
  },
};
