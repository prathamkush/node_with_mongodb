const UserModel = require("../models/UserModel")

exports.addUser = (req,res) => {
    const user = new UserModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        age:req.body.age       
    })   
    user.
        save().
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

// getAll
exports.getUsers = (req,res) => {
    const users = UserModel.find()
    users.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

// getByName (q1)
exports.getByName = (req,res) => {
    const users = UserModel.find({fname:req.params.fname})
    users.
        then( (data) => {
            res.send(data)
        }).
        catch( (error) => {
            res.send(error)
        })
}

// show custom fields (q2)
exports.getNameAndAge = (req,res) => {
    const users = UserModel.find({},{fname:1, age:1})
    users.
        then( (data) => {
            res.status(200).json({
                message:"Successfully got name and age",
                data:data,
            })
        }).
        catch( (error) => {
            res.send(error)
        })
}

// updateByName
exports.updateAgeByName = (req,res) => {
    UserModel.updateOne({fname:req.params.fname}, { $inc : {age : req.params.age}}, () => {
        res.status(200).json({
            message : "Successfully incremented "+req.params.fname+"'s age by "+req.params.age
        })
    })
}

// deleteUser
exports.deleteByName = (req,res) => {
    UserModel.deleteOne({fname:req.params.fname}, () => {
        res.status(200).json({
            message : "Successfully Deleted "+req.params.fname+"'s Data"
        })
    })
}





