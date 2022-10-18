// importing express module (as a const)
const express = require("express")

// initializing express app
const app = express()

app.listen(3000, () => {
        console.log("Server running on port 3000")
    })

app.use("/", (req,res) => { res.send("Welcome to node application here") })
