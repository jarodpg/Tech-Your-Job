const express = require("express");
const router = express.Router();
const { auth } = require("../Middleware");

router.get("/logout", auth, (req, res) => {
	res.clearCookie("token");
	res.redirect('/');
});

module.exports = router;