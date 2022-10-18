// importing express module (as a const)
const express = require("express")
// importing mongoose
const mongoose = require("mongoose")
// importing the router
const routes = require("./routes/routes")

// initializing express app
const app = express()

// for creating the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000")
})

// default route ("/") with response of a string
app.use("/", (req,res) => { res.send("Welcome to node application here") })

app.use("/user", routes)

// connecting to a database with mongoose library (mongoose.connect())
const uri = "mongodb+srv://pratham520:451228@cluster0.pe7oqtx.mongodb.net/employeeNodejs?retryWrites=true&w=majority" 
mongoose.
        connect(uri, {useNewUrlParser:true}).
        then(() => {console.log("Database connected")}).
        catch((error) => {console.log(error)})
