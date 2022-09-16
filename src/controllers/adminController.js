const globalServices = require("../services/index");
const Modals = require("../models/index");
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const path = require("path");
// *************************************************************************
module.exports = {
  getAllNfts: async (req, res) => {
    try {
      const { id } = req.params;
      if (parseInt(id) === 0 || parseInt(id) < 1) {
        return res.status(201).json({
          error: true,
          msg: "Proporcione una identificación apropiada.",
        });
      }
      let startPoint = parseInt(id) * 1000;
      let endPoint = startPoint + 999;

      let nfts = await globalServices.admin.findNfts(startPoint, endPoint);
      if (nfts.length > 0) {
        return res.status(200).json({
          error: false,
          msg: "nfts...",
          data: nfts,
        });
      } else {
        return res.status(200).json({
          error: true,
          msg: "Datos no encontrados...",
          data: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  // **********************************************************************
  // Ipload Images from Folder to IPFS and GET ipfhash
  pinFileToIPFSLocal: async (req, res) => {
    try {
      const { body: payload } = req;
      const url = `${process.env.PINATA_BACKEND_URL}/pinning/pinFileToIPFS`;
      if (payload.length > 0) {
        let ipfsHashArray = [];
        let count = 1;
        let startValue = 1000;
        for (let nft of payload) {
          let tokenId = nft.tokenId;
          try {
            // Convert image into binaries
            const coolPath = path.join(__dirname, `../public/files/${nft.url}`);
            let formData = new FormData();
            formData.append(
              "file",
              fs.readFileSync(coolPath),
              coolPath.split("/").pop()
            );
            // Send image to ipfs
            const data = await axios.post(url, formData, {
              maxContentLength: -1,
              headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                pinata_api_key: process.env.PINATA_API_KEY,
                pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
                path: "somename",
              },
            });
            let token = tokenId * startValue + count;

            // console.log(data.data);
            // Create an object with data, token id & ipfs hash
            ipfsHashArray.push({
              name: nft.name,
              properties: nft.properties,
              url: nft.url,
              ipfs_img_hash: data.data.IpfsHash,
              token_id: token,
              description: nft.description,
            });

            console.log(coolPath);
            fs.unlinkSync(coolPath);
            count = count + 1;
          } catch (error) {
            console.log("error", error);
          }
        }
        // push data into database without file hash
        for (let nftData of ipfsHashArray) {
          let nftDataFromDb = await globalServices.nft.addNFT(nftData);
          if (nftDataFromDb) {
            // Create JSON file for IPFS
            // create meta data
            const name = nftData.name;
            const description = nftData.description;
            const imageHash = "ipfs://" + nftData.ipfs_img_hash;
            const properties =
              typeof nftData.properties !== "undefined"
                ? JSON.parse(nftData.properties)
                : [];

            const jsonData = {
              attributes: properties,
              description: description ? description : "",
              image: imageHash,
              name: name,
            };
            // set file to temp folder
            let baseDir = path.join(__dirname, "../temp/");
            // fs.readdir(baseDir, (err, files) => {
            //   if (err) throw err;

            //   for (const file of files) {
            //     console.log(file);
            //     fs.unlink(path.join(baseDir, file), (err) => {
            //       if (err) throw err;
            //     });
            //   }
            // });
            const fileName = nftData.token_id;
            const promise = new Promise((resolve, reject) => {
              fs.writeFile(
                `${baseDir + fileName + ".json"}`,
                JSON.stringify(jsonData),
                { encoding: "utf8" },
                (error) => {
                  if (error) {
                    console.log("error", error);
                    reject();
                  } else {
                    resolve();
                  }
                }
              );
            });
            await promise;
            // upload filr to pfs
            const ipfsJsonData = await globalServices.nft.uploadJsonFile(
              baseDir,
              fileName
            );
            // Check File status and unlink from temp folder
            if (
              ipfsJsonData.status === 200 &&
              ipfsJsonData.statusText === "OK"
            ) {
              let lazyNft = await globalServices.nft.updateNFT(
                { _id: nftDataFromDb._id },
                {
                  ipfs_file_hash: ipfsJsonData.data.IpfsHash,
                }
              );

              fs.unlinkSync(`${baseDir + fileName + ".json"}`);
            }
          }
        }
        return res.status(201).json({
          error: false,
          msg: "NFTs uploaded",
        });
      }
    } catch (error) {
      next(error);
    }
  },

  // **********************************************************************
  // Upload Images to Local Server
  uploadImages: async (req, res) => {
    try {
      console.log(req);
      const { body: payload } = req;
      return res.status(200).json({
        error: false,
        msg: "Image upload",
      });
    } catch (error) {
      console.log(error);
    }
  },
  // **********************************************************************

  login: async (req, res) => {
    let { email, password } = req.body;
    let adminAccount = await globalServices.admin.findAdminAccount({
      email: email,
    });
    if (adminAccount) {
      let verifyPassword = await globalServices.global.verifyPassword(
        adminAccount.password,
        password
      );
      if (verifyPassword) {
        let jwtToken = await globalServices.global.JwtToken({
          _id: adminAccount._id,
        });
        let adminUpdatedResult =
          await globalServices.admin.updateAdminAccountById(adminAccount._id, {
            token: jwtToken,
          });
        return res.status(200).json({
          error: false,
          msg: "Acceso de administrador completado.",
          profile: adminUpdatedResult,
          token: jwtToken,
        });
      } else {
        return res.status(401).json({
          error: true,
          msg: "Contraseña incorrecta.",
          data: {},
        });
      }
    } else {
      return res.status(404).json({
        error: true,
        msg: "Email incorrecto.",
        data: {},
      });
    }
  },
  // **********************************************************************
  adminSettings: async (req, res) => {
    let result = await globalServices.admin.getAdminSettings();
    if (result) {
      return res.status(201).json({
        error: false,
        msg: "admin setting",
        data: result,
      });
    } else {
      return res.status(201).json({
        error: true,
        msg: "No hay configuración disponible.",
      });
    }
  },
  // **********************************************************************
  whiteListCheck: async (req, res) => {
    let metaMask_address = req.body.address;
    metaMask_address = metaMask_address.toLowerCase();
    console.log(metaMask_address);
    let result = await globalServices.metaMask.getWhiteListMetaMaskByObject({
      metaMask_address,
    });
    globalServices.global.returnResponse(
      res,
      200,
      false,
      "metaMask found.",
      result
    );
  },
  // **********************************************************************
  sendEmailToEmailMintedError: async (req, res) => {
    let metaMask_address = req.body.address;
    metaMask_address = metaMask_address.toLowerCase();
    globalServices.global.returnResponse(
      res,
      200,
      false,
      "send test email to client."
    );
  },

  // **********************************************************************
  // Category | Add
  // **********************************************************************
  addCategory: async (req, res) => {
    try {
      let { category_name, count, matic_price, euro_price, transaction_hash } =
        req.body;
      let checkName = await globalServices.admin.checkCategoryName(
        category_name
      );

      if (checkName && Object.keys(checkName).length > 0) {
        return res.status(201).json({
          error: true,
          msg: "Categoría ya agregada",
          data: {},
        });
      }
      let result = await globalServices.admin.addCategoryData(
        category_name,
        count,
        matic_price,
        euro_price,
        transaction_hash
      );
      if (result) {
        return res.status(201).json({
          error: false,
          msg: "Categoría añadida.",
          data: result,
        });
      } else {
        return res.status(400).json({
          error: true,
          msg: " Categoría no agregada",
          data: result,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Solicitud incorrecta.",
      });
    }
  },

  // **********************************************************************
  // Category | Update
  // **********************************************************************
  updateCategory: async (req, res) => {
    try {
      let {
        category_name,
        count,
        matic_price,
        euro_price,
        transaction_hash,
        isLastCategory,
      } = req.body;
      let { id } = req.params;
      console.log(matic_price, euro_price, transaction_hash, id);

      let result = await globalServices.admin.updateCategoryData(
        category_name,
        count,
        matic_price,
        euro_price,
        transaction_hash,
        id,
        isLastCategory
      );

      if (result) {
        return res.status(201).json({
          error: false,
          msg: "Actualizar categoría.",
          data: result,
        });
      } else {
        return res.status(400).json({
          error: true,
          msg: "La categoría no está actualizada.",
          data: result,
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Solicitud incorrecta.",
      });
    }
  },
  // **********************************************************************
  // Category | List
  // **********************************************************************
  getCategoryList: async (req, res) => {
    try {
      let result = await globalServices.admin.getCategoriesData();
      if (result.length > 0) {
        return res.status(201).json({
          error: false,
          msg: "Lista categoría...",
          data: result,
        });
      } else {
        return res.status(201).json({
          error: true,
          msg: "No se encontraron categorías",
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Solicitud incorrecta.",
      });
    }
  },
  // **********************************************************************
  // Category | Remove
  // **********************************************************************
  removeCategory: async (req, res) => {
    try {
      let { id } = req.params;
      let result = await globalServices.admin.removeCategoryById(id);
      if (result.deletedCount === 1) {
        return res.status(201).json({
          error: false,
          msg: "Categoría...",
          data: {},
        });
      } else {
        return res.status(201).json({
          error: true,
          msg: "No se ha encontrado ninguna categoría.",
        });
      }
    } catch (error) {
      return res.status(400).json({
        error: true,
        msg: "Solicitud incorrecta.",
      });
    }
  },
  // **********************************************************************
  addEmailWhiteList: async (req, res) => {
    let list = req.body.email_white_list;
    let emailWhiteList = list.map((data) => {
      return { ...data, metaMask_address: data.metaMask_address.toLowerCase() };
    });

    let whitlistData = await Modals.emailWhitelist.find();

    const uniqueWhiteList = emailWhiteList.filter(
      (item) =>
        !whitlistData.find(
          (dbItem) =>
            item.metaMask_address.toLowerCase() ===
            dbItem.metaMask_address.toLowerCase()
        )
    );

    if (Array.isArray(uniqueWhiteList)) {
      if (uniqueWhiteList.length > 0) {
        let result = await globalServices.admin.addMultiEmailWhiteList(
          uniqueWhiteList
        );
        console.log(result);
        return res.status(201).json({
          error: false,
          msg: "Se ha registrado con éxito.",
          data: result,
        });
      } else {
        return res.status(201).json({
          error: false,
          msg: "Se encontraron datos duplicados!",
          data: [],
        });
      }
    } else {
      return res.status(201).json({
        error: true,
        msg: "No se ha registrado.",
      });
    }
  },

  // **********************************************************************
  getWhiteList: async (req, res) => {
    let result = await globalServices.admin.getWhiteLists();
    console.log(result);
    if (result.length > 0) {
      return res.status(201).json({
        error: false,
        msg: "Lista blanca...",
        data: result,
      });
    } else {
      return res.status(201).json({
        error: true,
        msg: "No se encontró ninguna lista blanca.",
      });
    }
  },
  // Remove Single
  removeFromWhiteList: async (req, res) => {
    let { id } = req.params;
    let result = await globalServices.admin.removeDataFromWhiteList(id);
    console.log(result);
    if (result.deletedCount === 1) {
      return res.status(201).json({
        error: false,
        msg: "Lista blanca...",
        data: {},
      });
    } else {
      return res.status(201).json({
        error: true,
        msg: "No se encontró ninguna lista blanca.",
      });
    }
  },
  // Remove Bulk
  removeMultipleFromWhiteList: async (req, res) => {
    let data = req.body;
    console.log(data);
    if (data.length > 0) {
      let result = await globalServices.admin.removeBulkDataFromWhiteList(data);
      console.log(result);
      if (result.deletedCount > 0) {
        let data = await Modals.emailWhitelist.find();
        return res.status(201).json({
          error: false,
          msg: "Datos de la lista blanca",
          data: data,
        });
      } else {
        return res.status(201).json({
          error: true,
          msg: "no se eliminó ninguna lista blanca",
        });
      }
    } else {
      return res.status(201).json({
        error: true,
        msg: "No se encontraron direcciones",
      });
    }
  },
  // **********************************************************************
  signUpAdmin: async (req, res) => {
    let data = {
      email: req.body.email,
      password: req.body.password,
    };
    let result = await globalServices.admin.createAdminAccount(data);
    if (result && result._id) {
      return res.status(201).json({
        error: false,
        msg: "Admin signUp successfully.",
        data: result,
      });
    } else {
      return res.status(409).json({
        error: true,
        msg: "Account already exist in record.",
        data: {},
      });
    }
  },
  // **********************************************************************
  updatePassword: async (req, res) => {
    let { email, otp, password } = req.body;
    let result = await globalServices.admin.findAdminAccount({ email });
    if (result && result._id) {
      if (result.otp == otp) {
        let encryptedPassword = await globalServices.global.encryptedPassword(
          password
        );
        let updateResult = await globalServices.admin.updateAdminAccountById(
          result._id,
          { password: encryptedPassword, otp: "" }
        );
        globalServices.global.returnResponse(
          res,
          200,
          false,
          "Contraseña actualizada correctamente.Redirigiendo al panel de control.",
          updateResult
        );
      } else {
        globalServices.global.returnResponse(
          res,
          406,
          true,
          "La verificación ha fallado.",
          {}
        );
      }
    } else {
      globalServices.global.returnResponse(
        res,
        404,
        true,
        "No hay ninguna cuenta con este email.",
        {}
      );
    }
  },
  // **********************************************************************
  verifyOpt: async (req, res) => {
    let { email, otp } = req.body;
    let result = await globalServices.admin.findAdminAccount({ email });
    if (result && result._id) {
      if (result.otp == otp) {
        globalServices.global.returnResponse(
          res,
          200,
          false,
          "La verificación se ha completado.",
          { otp_verification: true }
        );
      } else {
        globalServices.global.returnResponse(
          res,
          406,
          true,
          "La verificación ha fallado.",
          { otp_verification: false }
        );
      }
    } else {
      globalServices.global.returnResponse(
        res,
        409,
        true,
        "No hay ninguna cuenta con este email.",
        {}
      );
    }
  },
  // **********************************************************************
  resetPassword: async (req, res) => {
    let email = req.body.email;
    let otp = await globalServices.global.createOtp();
    if (otp) {
      console.log(otp);
      let result = await globalServices.admin.updateAdminAccountByObjects(
        { email },
        { otp }
      );
      if (result && result._id) {
        let emailResult = await globalServices.email.resetPassword(email, {
          otp,
        });
        console.log("emailResult", emailResult);
        if (emailResult) {
          globalServices.global.returnResponse(
            res,
            200,
            false,
            "Email de restablecimiento de contraseña enviado con éxito.",
            {}
          );
        } else {
          globalServices.global.returnResponse(
            res,
            401,
            false,
            "Error al enviar el email. Por favor, inténtalo en unos minutos.",
            {}
          );
        }
      } else {
        globalServices.global.returnResponse(
          res,
          404,
          true,
          "No hay ninguna cuenta con este email.",
          {}
        );
      }
    } else {
      globalServices.global.returnResponse(
        res,
        409,
        true,
        "Error en la creación.",
        {}
      );
    }
  },
  // **********************************************************************
  updateSettings: async (req, res) => {
    if (req.body) {
      let result = await globalServices.settings.updateAdminSettings(req.body); //updating settings from admin with protected routing.
      if (result && result._id) {
        globalServices.global.returnResponse(
          res,
          200,
          false,
          "Configuración guardada correctamente.",
          { result }
        ); //return response
      } else {
        globalServices.global.returnResponse(
          res,
          500,
          true,
          "Error del servidor mientras se actualizaba la configuración.",
          {}
        ); //return response
      }
    } else {
      globalServices.global.returnResponse(
        res,
        500,
        true,
        "La cantidad no puede ser igual a 0.",
        {}
      ); //return response
    }
  },
  // **********************************************************************
  stripeUnMintedList: async (req, res) => {
    let result = await globalServices.stripe.findPaidFailedBlochChainList();
    globalServices.global.returnResponse(
      res,
      200,
      false,
      "Payment done but blochChain error found list.",
      { total: result.length, list: result }
    ); //return response
  },
  // **********************************************************************
  stripeMintByAdmin: async (req, res) => {
    let faitResult = "";
    let stripePayment = await globalServices.stripe.findStripePaymentByID(
      req.body.payment_id
    );
    if (stripePayment && stripePayment.block_chain_error == true) {
      console.log(stripePayment);
      let data = {
        metaMaskAddress: stripePayment.metaMask_id.metaMask_address,
        total_nft: stripePayment.total_nft,
      };
      let email = stripePayment.payment_email;
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
            globalServices.global.returnResponse(
              res,
              500,
              true,
              `BlockChain job run successfully done.Payment id:${stripePayment._id}`,
              { email, stripePayment, mintedImagesUrls, TransactionHash, data }
            ); //return response
          } else {
            console.log("No listing found.");
          }
        } else {
          console.log("blockchain job failed", faitResult);
          globalServices.email.blockChainMintingError(email, stripePayment);
          globalServices.email.submitEmail(
            process.env.NODE_APP_SERER_ISSUE_EMAIL,
            `BlockChain job run failed.Payment id:${
              stripePayment._id
            } and faitResult error is:${JSON.stringify(faitResult, null, 2)}`,
            "Nftes server"
          );
          globalServices.global.returnResponse(
            res,
            500,
            true,
            `BlockChain job run failed.Payment id:${stripePayment._id}`,
            { faitResult }
          ); //return response
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
        globalServices.global.returnResponse(
          res,
          404,
          true,
          "BlockChain error job not completed.",
          { error }
        ); //return response
      }
    } else {
      globalServices.global.returnResponse(
        res,
        404,
        true,
        "No record found.",
        {}
      ); //return response
    }
  },
  // **********************************************************************
  mintNftsByAdmin: async (req, res) => {
    let {
      receiver_address,
      tokenIds,
      nft_type,
      payment_type,
      transactionHash,
    } = req.body;
    console.log(req.body);
    if (tokenIds.length > 0) {
      globalServices.minted.saveMintingRecords(
        receiver_address,
        0,
        tokenIds,
        payment_type,
        transactionHash,
        nft_type
      );

      return res.status(201).json({
        error: false,
        msg: `${req.body.tokenIds.length} items minted successfully.`,
      });
    } else {
      return res.status(401).json({
        error: true,
        msg: `Algunos errores de validación.`,
      });
    }
  },
};
