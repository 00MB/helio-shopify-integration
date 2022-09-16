const GlobalServices = require("../services/index");
const pinFileToIPFS = require("../utils/upload-file-ipfs");
const unLinkFile = require("../utils/unLinkFile");

module.exports = {
  // *************************************************************************

  createNft: async (req, res) => {
    if (req.files.nftes_file) {
      req.body.nftes_file = req.files.nftes_file[0].path;
    }
    if (req.body.nftes_file) {
      let ipfsResult = await pinFileToIPFS(req.body.nftes_file);
      if (ipfsResult.IpfsHash) {
        req.body.IpfsHash = ipfsResult.IpfsHash;
        let result = await GlobalServices.nftes.createNft(req.body);
        if (result && result._id) {
          unLinkFile(result.nftes_file);
          return res.status(201).json({
            error: false,
            msg: "Creado con éxito.",
            data: result,
          });
        } else {
          return res.status(401).json({
            error: true,
            msg: "Error creando el NFT.",
            data: {},
          });
        }
      } else {
        return res.status(401).json({
          error: true,
          msg: "Error subiendo el NFT.",
          data: {},
        });
      }
    } else {
      return res.status(401).json({
        error: true,
        msg: "Error subiendo el archivo a s3.",
        data: {},
      });
    }
  },
  // **********************************************************************
  mintPolygonNft: async (req, res) => {
    let account_address = req.body.addr;
    let nftes_list = req.body.ids;
    let email = req.body.email;
    let amount = req.body.amount / req.body.total_nft;
    let transactionHash = req.body.transactionHash;
    if (nftes_list.length > 0) {
      GlobalServices.minted.saveMintingRecords(
        account_address,
        amount,
        nftes_list,
        "matic",
        transactionHash,
        req.body.nft_type,
      );
      console.log("email sending to:", email);
      let result = {
        total_nft: req.body.total_nft,
        amount: req.body.amount * 100,
        payment_type: "matic",
        transactionHash: transactionHash,
      };

      // GlobalServices.metaMask.findOrCreateMetaMaskAccount(account_address, email);
      let mintedImagesUrls = await GlobalServices.minted.mintedImagesUrls(
        nftes_list
      );
      GlobalServices.email.stripeFatMintSuccess(
        email,
        result,
        mintedImagesUrls,
        transactionHash
      );
      GlobalServices.email.submitEmail(
        process.env.NODE_APP_SERER_ISSUE_EMAIL,
        `New stripe mint successfully done.success record is:${JSON.stringify(
          {
            account_address,
            amount,
            nftes_list,
            payment_type: "matic",
            transactionHash,
          },
          null,
          2
        )}`,
        "New mint success."
      );
      return res.status(201).json({
        error: false,
        msg: `${req.body.total_nft} items minted successfully.`,
        mintedImagesUrls,
      });
    } else {
      return res.status(401).json({
        error: true,
        msg: `Algunos errores de validación.`,
      });
    }
  },
  nftTokenDetails: async (req, res) => {
    let result = await GlobalServices.nft.tokenDetails(req.body.token_id);
    if (result) {
      return res.status(200).json({
        error: false,
        msg: "Record found.",
        data: result,
      });
    } else {
      return res.status(201).json({
        error: true,
        msg: "No record found.",
        data: {},
      });
    }
  },
};
