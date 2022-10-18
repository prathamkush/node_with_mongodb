const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

// API Paths 
router.post("/add-user", controller.addUser)

module.exports = router