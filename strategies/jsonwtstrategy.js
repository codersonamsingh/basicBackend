
const mongoose = require("mongoose");
const passport = require("passport");
const User = mongoose.model("myUser");
//const User = required("./../models/User");
//const mykey = require()

var opts = {};
opts.jsonfromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretorkey = "awer"

module.exports = passport => {
    passport.Use(
        new jwtstrategy(opts, (jwt_payload, done)=>{
            User.findById(jwt_payload.id)
            .then(user =>{
                if (user){
                    return done(null,user)
                }
                return done(null,false)
            })
            .catch(err => console.log(err))

        }
        ) 
        
        
        )}









