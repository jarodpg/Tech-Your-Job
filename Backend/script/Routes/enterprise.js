const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.get("/enterprise/:id", async (req, res) => {
  try {
    const id = req.params.id;
  } catch (err) {
    console.error("Internal server error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }
});
