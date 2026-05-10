const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const get_userRoutes = require("./get_user");
const put_userGlobalRoutes = require("./put_userGlobal");
const grouped_postsRoutes = require("./grouped_posts");
const logoRoutes = require("./logo");
const postRoutes = require("./post");

router.use("/", registerRoutes);
router.use("/", loginRoutes);
router.use("/", logoutRoutes);
router.use("/", get_userRoutes);
router.use("/", put_userGlobalRoutes);
router.use("/", grouped_postsRoutes);
router.use("/", logoRoutes);
router.use("/", postRoutes);

module.exports = router;
