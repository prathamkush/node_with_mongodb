const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

// API Paths 
router.get("/add-user", controller.addUser)

module.exports = router