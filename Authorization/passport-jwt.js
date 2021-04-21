const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('./secret');

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secret;

const mongoose = require('mongoose');
const Administrator = mongoose.model('Administrator');
const Accesscode = mongoose.model('Accesscode');

let admin_strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    let query = {code: jwt_payload.code};
    let admin = await Administrator.findOne(query);
    if (admin) {
        next(null, admin);
    } else {
        next(null, false);
    }
});

let accesscode_strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    let query = {code: jwt_payload.code};
    let accesscode = await Accesscode.findOne(query);
    if (accesscode) {
        next(null, accesscode);
    } else {
        next(null, false);
    }
});

//https://stackoverflow.com/questions/20052617/use-multiple-local-strategies-in-passportjs

passport.use('jwt-admin', admin_strategy);
passport.use('jwt-player', accesscode_strategy);
