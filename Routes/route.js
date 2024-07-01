const express = require("express");
const route = express.Router();
const mailController = require("../controller/mail")
const gmailController = require("../controller/gmail")
const registerController = require("../controller/registerController")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

route.get("/mail", mailController)
route.get("/gmail", gmailController)
route.post("/saveData",upload.single('userimage'), registerController);

 module.exports = route;