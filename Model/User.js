const mongoose = require("mongoose");
const schema = mongoose.schema;

const UserSchema = new schema({
    name: {
        type:String,
        default:""
    }
})

module.exports = User = mongoose.module("my user",UserSchema)
