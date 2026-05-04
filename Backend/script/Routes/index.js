const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");

router.use("/", registerRoutes)
router.use("/", loginRoutes)
router.use("/", logoutRoutes)

module.exports = router;