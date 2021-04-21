const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const secret = require('./secret');
const UserPassport = require("./user-passport");

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = secret;

let strategy = new JwtStrategy(jwtOptions, async function(jwt_payload, next) {
    if(jwt_payload.game_id != null && jwt_payload.role != null){
        let user_passport = new UserPassport(jwt_payload.game_id, jwt_payload.player_id, jwt_payload.role);
        next(null, user_passport);
    } else {
        next(null, false);
    }
});

passport.use('jwt', strategy);
