const GlobalPackages = require("../../global-package");
const router = GlobalPackages.express.Router();
const { adminProtectRoute } = require("../../middleware/admin-auth-middleware");
// const got = require('got');
const validateController = require("../../validators/validationController");
const adminController = require("../../controllers/adminController");
const nftController = require("../../controllers/nftController");
const uploadsPublic = require("../../utils/upload-file-assets");

// ********************************************
// admin account api
router.post("/login", validateController.adminLogin, adminController.login);
router.post(
  "/signUpAdmin",
  validateController.adminLogin,
  adminController.signUpAdmin
);
router.post(
  "/reset-password",
  validateController.resetPassword,
  adminController.resetPassword
);
router.post(
  "/verify-otp",
  validateController.otpVerification,
  adminController.verifyOpt
);
router.post(
  "/update-password-otp",
  validateController.updatePassword,
  adminController.updatePassword
);
// admin setting api
router.get("/adminSettings", adminController.adminSettings);
router.put(
  "/updateSettings",
  adminProtectRoute,
  adminController.updateSettings
);
// white list routes
router.post(
  "/addEmailWhiteList",
  adminProtectRoute,
  adminController.addEmailWhiteList
);
router.get("/getWhiteLists", adminProtectRoute, adminController.getWhiteList);
router.delete(
  "/removeWhiteList/:id",
  adminProtectRoute,
  adminController.removeFromWhiteList
);
router.delete(
  "/removeWhiteList",
  adminProtectRoute,
  adminController.removeMultipleFromWhiteList
);
router.post(
  "/whiteListCheck",
  adminProtectRoute,
  adminController.whiteListCheck
);
// Category routes
router.post(
  "/category/add",
  adminProtectRoute,
  validateController.categoryValidator,
  adminController.addCategory
);
router.put(
  "/category/update/:id",
  adminProtectRoute,
  adminController.updateCategory
);
router.get("/category/list", adminController.getCategoryList);
router.delete(
  "/category/delete/:id",
  adminProtectRoute,
  adminController.removeCategory
);
router.post(
  "/sendEmailToEmailMintedError",
  adminProtectRoute,
  adminController.sendEmailToEmailMintedError
);
// stripe un-minted
router.get(
  "/stripeUnMintedList",
  adminProtectRoute,
  adminController.stripeUnMintedList
);
router.post(
  "/stripeMintByAdmin",
  adminProtectRoute,
  validateController.stripeMintByAdmin,
  adminController.stripeMintByAdmin
);
// admin other settings
router.post(
  "/createNft",
  adminProtectRoute,
  uploadsPublic.fields([{ name: "nftes_file", maxCount: 1 }]),
  nftController.createNft
);
router.post(
  "/attachments/upload",
  adminProtectRoute,
  adminController.pinFileToIPFSLocal
);
router.post(
  "/images/upload",
  adminProtectRoute,
  upload.single("file"),
  adminController.uploadImages
);
router.get("/nfts/list/:id", adminProtectRoute, adminController.getAllNfts);
router.post("/mint-nft", adminProtectRoute, adminController.mintNftsByAdmin);
module.exports = router;
