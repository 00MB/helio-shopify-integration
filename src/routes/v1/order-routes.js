const GlobalPackages = require("../../global-package");
const router = GlobalPackages.express.Router();
const orderController = require("../../controllers/orderController");

router.get("/:id", orderController.getShopifyOrder);

module.exports = router;
