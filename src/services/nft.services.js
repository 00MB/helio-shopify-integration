const Modals = require("../models/index");
const AppServices = require("./global.services");
const axios = require("axios");
const path = require("path");
const fs = require("fs");
const FormData = require("form-data");
// *************************************************************************
let nftService = (module.exports = {
  addNFT: async (payload) => {
    try {
      let result = await Modals.nfts.create(payload);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  tokenDetails: async (payload) => {
    try {
      let result = await Modals.nfts.findOne({ token_id: payload });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  updateNFT: async (id, payload) => {
    try {
      let result = await Modals.nfts.findOneAndUpdate(id, payload, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  uploadJsonFile: async (baseDir, fileName) => {
    try {
      const url = `${process.env.PINATA_BACKEND_URL}/pinning/pinFileToIPFS`;
      const coolPath = path.join(baseDir, `${fileName + ".json"}`);
      let formData = new FormData();
      formData.append(
        "file",
        fs.readFileSync(coolPath),
        coolPath.split("/").pop()
      );
      return await axios.post(url, formData, {
        maxContentLength: -1,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
          path: "somename",
        },
      });
    } catch (error) {
      throw createError(500);
    }
  },
});
