const router = require ("express").Router();
const stockCheck = require ("../../bots/stockCheck/index")

router.get("/stockCheck", (req, res) => {
    stockCheck();
    res.send("Deployment initiated.")
})

module.exports = router