const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('./secret');

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secret;

const mongoose = require('mongoose');
const User = mongoose.model('User');

let strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    let query = {name: jwt_payload.name};
    let user = await User.findOne(query);
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

passport.use('jwt', strategy);
