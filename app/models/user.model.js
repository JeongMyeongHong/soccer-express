const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    id : { type: String, required: true, unique: true },
    name : { type: String, required: true, unique: true },
    pw : { type: String, required: true },
    phoneNum : { type: String }
})

let User = mongoose.model('User', UserSchema)
module.exports = User