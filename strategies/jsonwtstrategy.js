const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose")
const User = mongoose.model("myUser");
const myKey = require("./../setup/myUrl");


var opts = {};
opts.jsonfromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = myKey.secret;

module.exports = passport => {
    passport.Use(
        new JwtStrategy(opts, (jwt_payload, done) =>{
            User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(err => console.log(err));
        }
        ) 
        );
    }









