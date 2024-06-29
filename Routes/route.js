const express = require("express");
const route = express.Router();
const mailController = require("../controller/mail")
route.get("/mail", mailController)


 module.exports = route;