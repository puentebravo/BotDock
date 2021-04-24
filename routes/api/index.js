const router = require("express").Router();
const userRoutes = require("./routes");


router.use("/user", userRoutes);

module.exports = router;
