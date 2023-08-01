const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type:String,
        default:""
    }
})

module.exports = User = mongoose.model("myUser",UserSchema)
