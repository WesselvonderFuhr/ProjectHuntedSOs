const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('./secret');
const UserPassport = require("./userpassport");

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secret;

let strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    console.log(jwt_payload);
    if(jwt_payload.game_id != null && jwt_payload.role != null){
        let userpassport = new UserPassport(jwt_payload.game_id, jwt_payload.player_id, jwt_payload.role);
        next(null, userpassport);
    } else {
        next(null, false);
    }
});

passport.use('jwt', strategy);
