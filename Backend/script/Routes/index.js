const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");

router.use("/", registerRoutes)
router.use("/", loginRoutes)

module.exports = router;