const express = require("express");
const router = express.Router();
const { auth } = require("../Middleware");

router.get("/logout", auth, (req, res) => {
  try {
    res.clearCookie("token");
    res.redirect("/");
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});

module.exports = router;
