// const nodeCron = require("node-cron");
const jobsController = require('../controllers/jobsController')
// 0 */1 * * * *
// nodeCron.schedule("0 */3 * * * *", async () => {
// console.log("*************************************")
// console.log(result);
// }).start();

setTimeout(async () => {
    let result = await jobsController.completeFailedStripePaymentMinting();
    console.log(result)
}, 5000);
setInterval(() => {
    console.log("job run at:", new Date());
    console.log("*************************************")

    console.log("*************************************")
}, 3000);
// 600000
