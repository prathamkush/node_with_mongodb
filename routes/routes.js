const express = require("express")

const router = express.Router()

const controller = require("../controller/UserController")

// API Paths 
router.post("/add-user", controller.addUser)
router.get("/get-users", controller.getUsers)
router.get("/get-by-name/:fname", controller.getByName)
router.get("/get-name-and-age", controller.getNameAndAge)
router.put("/update-age-by-name/:fname/:age", controller.updateAgeByName)
router.delete("/delete-by-name/:fname", controller.deleteByName)

module.exports = router