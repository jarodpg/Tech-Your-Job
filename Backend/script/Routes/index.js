const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const userRoutes = require("./user");

router.use("/", registerRoutes)
router.use("/", loginRoutes)
router.use("/", logoutRoutes)
router.use("/", userRoutes)

module.exports = router;