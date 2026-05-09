const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const userRoutes = require("./user");
const grouped_postsRoutes = require("./grouped_posts");
const logoRoutes = require("./logo");

router.use("/", registerRoutes);
router.use("/", loginRoutes);
router.use("/", logoutRoutes);
router.use("/", userRoutes);
router.use("/", grouped_postsRoutes);
router.use("/", logoRoutes);

module.exports = router;
