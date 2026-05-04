const express = require("express");
const connection = require("../DB");
const router = express.Router();

router.post("/user", async (req, res) => {
    try {

    } catch {
        console.error("Internal server error:", err);
        return res.status(500).json({msg: "Internal server error"});
    }
});

module.exports = router;