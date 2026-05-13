const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "/usr/local/app/Cache/temp");
  },

  filename: (req, file, callback) => {
    if (file.fieldname === "doc") {
      return callback(null, `${req.token.id}-${file.fieldname}-${uuidv4()}`);
    }

    callback(null, `${req.token.id}-${file.fieldname}`);
  },
});

const fileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i))
    return callback(new Error("Only image files are allowed"), false);
  callback(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

module.exports = upload;
