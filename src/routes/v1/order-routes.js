const GlobalPackages = require("../../global-package");
const router = GlobalPackages.express.Router();
const orderController = require("../../controllers/orderController");

router.get("/:id", orderController.getShopifyOrder);
router.post("/create", orderController.createOrder);

module.exports = router;
