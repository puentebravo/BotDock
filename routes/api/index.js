const router = require("express").Router();
const userRoutes = require("./routes");
const botRoutes = require("./botRoutes")


router.use("/user", userRoutes, botRoutes);

module.exports = router;
