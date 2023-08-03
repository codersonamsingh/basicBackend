const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
        default:""
    }
})

module.exports = User = mongoose.model("myUser",UserSchema)
