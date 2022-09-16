const Modals = require("../models/index");
const AppServices = require("./global.services");
// *************************************************************************
let adminServices = (module.exports = {
  findAdminAccount: (payLoad) =>
    Modals.Admin.findOne(payLoad)
      .then((result) => result)
      .catch((error) => ""),
  // **********************************************************************
  findAdminById: (id) =>
    Modals.Admin.findById({ _id: id })
      .then((result) => result)
      .catch((error) => ""),
  // **********************************************************************
  findNfts: (startPoint, endPoint) => {
    return Modals.nfts.find({ token_id: { $gte: startPoint, $lt: endPoint } });
  },
  // **********************************************************************
  updateAdminAccountById: (id, updating_objects) =>
    Modals.Admin.findByIdAndUpdate(
      { _id: id },
      { $set: updating_objects },
      { new: true }
    )
      .select("-password -tokens")
      .then((result) => result)
      .catch((error) => ""),
  // **********************************************************************
  updateAdminAccountByObjects: (findObject, updatingObject) =>
    Modals.Admin.findOneAndUpdate(
      findObject,
      { $set: updatingObject },
      { new: true }
    )
      .select("-password -tokens")
      .then((result) => result)
      .catch((error) => ""),
  // **********************************************************************
  createAdminAccount: async (payLoad) => {
    let data = new Modals.Admin(payLoad);
    return data
      .save()
      .then((result) => result)
      .catch((error) => "");
  },
  // **********************************************************************
  addMultiEmailWhiteList: async (payLoad) => {
    let data = Modals.emailWhitelist
      .insertMany(payLoad)
      .then((data) => data)
      .catch((error) => error);
    return data;
  },
  // **********************************************************************
  getWhiteListMetaMaskAccount: async (payLoad) => {
    let result = await Modals.emailWhitelist
      .findOne(payLoad)
      .then((res) => res)
      .catch((error) => error);
    return result;
  },
  // **********************************************************************
  // ********* Category
  // **********************************************************************
  addCategoryData: async (
    category_name,
    count,
    matic_price,
    euro_price,
    transaction_hash
  ) => {
    try {
      let result = await Modals.category.create({
        category_name,
        count,
        matic_price,
        euro_price,
        transaction_hash,
      });
      await Modals.adminSettings.findOneAndUpdate(
        {},
        { minting_matic_fee: matic_price, minting_euro_fee: euro_price },
        {
          new: true,
        }
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  updateCategoryData: async (
    category_name,
    count,
    matic_price,
    euro_price,
    transaction_hash,
    id,
    isLastCategory
  ) => {
    try {
      let result = await Modals.category.findOneAndUpdate(
        { _id: id },
        {
          matic_price: matic_price,
          euro_price: euro_price,
          transaction_hash: transaction_hash,
        },
        {
          new: true,
        }
      );
      if (isLastCategory) {
        await Modals.adminSettings.findOneAndUpdate(
          {},
          { minting_matic_fee: matic_price, minting_euro_fee: euro_price },
          {
            new: true,
          }
        );
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  getCategoriesData: async () => {
    try {
      let result = await Modals.category.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  removeCategoryById: async (id) => {
    return await Modals.category.deleteOne({ _id: id });
  },
  checkCategoryName: async (name) => {
    return await Modals.category.findOne({ category_name: name });
  },
  // **********************************************************************
  getWhiteLists: async () => {
    return await Modals.emailWhitelist.find();
  },
  // **********************************************************************
  removeDataFromWhiteList: async (id) => {
    return await Modals.emailWhitelist.deleteOne({ _id: id });
  },
  removeBulkDataFromWhiteList: async (data) => {
    return await Modals.emailWhitelist.deleteMany({
      metaMask_address: { $in: data },
    });
  },
  // **********************************************************************
  getAdminSettings: async (payLoad) => {
    let data = await Modals.adminSettings
      .findOne()
      .then((data) => data)
      .catch((error) => error);
    if (data) {
      return data;
    } else {
      let settingsObject = {
        // minting_time: '2022, 4, 20, 18, 33',
        // default: 1,
      };
      let data = new Modals.adminSettings(settingsObject);
      let result = data
        .save()
        .then((result) => result)
        .catch((error) => "");
      return result;
    }
  },
  // **********************************************************************
});
