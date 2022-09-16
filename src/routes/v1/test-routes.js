const GlobalPackages = require('../../global-package');
const router = GlobalPackages.express.Router();
const testingController = require('../../controllers/testingController');






// ******************************************** 
router.post('/testEmail', testingController.testEmail);
router.get('/mailchimp', testingController.mailChimpEmail);
router.get('/mintingList', testingController.mintingList);





module.exports = router;