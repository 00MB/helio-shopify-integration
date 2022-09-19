const Modals = require("../models/index");
module.exports = {
  createOrderService: async (body) => {
    console.log(body);
    return await Modals.order.create(body);
  },
};
