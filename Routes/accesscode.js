var express = require('express');
var Accesscode = require('../MongoDB/accesscode');
var Player = require('../MongoDB/player');
var router = express.Router();
const passport = require("passport");

var randomstring = require("randomstring");
let AccesscodeController = require('../Controllers/AccesscodeController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");


router.post('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    var result = await AccesscodeController.addAccesscodes(req.body, req.user.game_id)
    return res.status(200).json(result);
});

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    var result = await AccesscodeController.getAllAccesscodes(req.user.game_id)
    
    return res.status(200).json(result);
});

router.post('/authenticate', async function (req, res){
    if(!req.query.name || !req.query.code){
        let message = { message: "Login with name and code"};
        return res.status(400).json(message);
    }

    let result = await AccesscodeController.authenticate(req.query.name, req.query.code);
    ResponseHandler(result, req, res);
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), async function(req, res){
    var result = await AccesscodeController.deleteCode(req.params.id, req.body.role, req.user.game_id)
    return res.status(200).json(result);
})

module.exports = router;
