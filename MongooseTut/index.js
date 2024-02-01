const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/jayKart')

const UserSchema = mongoose.Schema({
    name: String,
    
})

const UserModel = mongoose.model("items", UserSchema)

app.get("/getUsers", (req, res) => {
    UserModel.find().then(function(items) {
        res.json(items)
    }).catch(function(err) {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log('Server is running')
})

