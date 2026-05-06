const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.cookies["token"];
    if (!token) {
        return res.status(401).json({msg: "Not allowed"});
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({msg: "Not allowed"});
        }
        req.token = decoded;
        next();
    });
}

module.exports = { auth };