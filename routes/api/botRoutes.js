const router = require ("express").Router();
const stockCheck = require ("../../bots/stockCheck/index")

router.get("/stockCheck", stockCheck);

module.exports = router