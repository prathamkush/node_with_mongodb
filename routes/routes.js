const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

// API Paths 
router.post("/add-user", controller.addUser)
router.get("/get-users", controller.getUsers)
router.get("/get-by-name/:fname", controller.getByName)
router.get("/get-name-and-age", controller.getNameAndAge)

module.exports = router