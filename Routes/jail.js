const express = require('express');
const router = express.Router();
const passport = require("passport");

const JailController = require('../Controllers/JailController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await JailController.getJailByGameId(req.user.game_id);
    ResponseHandler(result, req, res);
});

router.put('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await JailController.editJail(req.user.game_id, req.body);
    ResponseHandler(result, req, res);
});

module.exports = router;
