const GlobalPackages = require('../../global-package');
const router = GlobalPackages.express.Router();
const validateController = require("../../validators/validationController");
const userController = require('../../controllers/userController')
const nftController = require('../../controllers/nftController')
const { metaMaskprotectRoute } = require('../../middleware/metaMask-auth-middleware.js');





// ******************************************** 
router.post('/metamaskAccount', validateController.getMetaAccount, userController.getMetaMaskAccount);
router.post('/mintNft', metaMaskprotectRoute, nftController.mintPolygonNft);
router.post('/user/nft-token-details', nftController.nftTokenDetails);





module.exports = router;