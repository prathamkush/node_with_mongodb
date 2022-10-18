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
router.get("/query3/:str", controller.query3)
router.get("/query4", controller.query4)
router.get("/query5", controller.query5)
router.get("/query8", controller.query8)

module.exports = router