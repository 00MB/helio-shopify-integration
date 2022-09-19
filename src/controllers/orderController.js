module.exports = {
  getShopifyOrder: async (req, res) => {
    let { id } = req.params;
    return res.status(200).json({
      msg: "email send successfully.",
    });
  },
};
