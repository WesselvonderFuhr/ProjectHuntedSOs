const express = require('express');
const router = express.Router();
const passport = require("passport");

const AccesscodeController = require('../Controllers/AccesscodeController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");


router.post('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await AccesscodeController.addAccesscodes(req.body, req.user.game_id)
    ResponseHandler(result, req, res);
});

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await AccesscodeController.getAllAccesscodes(req.user.game_id)
    ResponseHandler(result, req, res);
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
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await AccesscodeController.deleteCode(req.params.id, req.body.role, req.user.game_id)
    ResponseHandler(result, req, res);
})

module.exports = router;
