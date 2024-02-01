const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017/')

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = mongoose.model("jayKart", UserSchema)

app.get("/getUsers", (req, res) => {
    res.json(UserModel.find())
})

app.listen(3001, () => {
    console.log('Server is running')
})