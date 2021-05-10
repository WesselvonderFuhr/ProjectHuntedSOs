const express = require('express');
const router = express.Router();
const passport = require("passport");

const GameController = require('../Controllers/GameController');
const PlayfieldController = require('../Controllers/PlayfieldController');
const AdministratorController = require('../Controllers/AdministratorController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result;
    if(req.user.game_id != null){
        result = await GameController.getGameById(req.user.game_id);
    } else {
        result = await GameController.getAllGames();
    }
    ResponseHandler(result, req, res);
});

router.post('/', async function (req, res) {
    let result = await GameController.addGame(req.body);
    ResponseHandler(result, req, res);
});

router.put('/playfield', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }
    
    let result = await PlayfieldController.editPlayfield(req.user.game_id, req.body);
    ResponseHandler(result, req, res);
});

router.put('/time', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }
    let result = await GameController.setgameTime(req.user.game_id, req.body);
    ResponseHandler(result, req, res);
});

router.post('/authenticate', async function (req, res) {
    if(!req.query.name || !req.query.code){
        let message = { message: "Login with name and code"};
        return res.status(400).json(message);
    }

    let result = await AdministratorController.authenticate(req.query.name, req.query.code);
    ResponseHandler(result, req, res);
});



module.exports = router;
