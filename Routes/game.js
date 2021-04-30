var express = require('express');
var Game = require('../MongoDB/game');
var Player = require('../MongoDB/player');
var router = express.Router();
const passport = require("passport");

let GameController = require('../Controllers/GameController');
let AdministratorController = require('../Controllers/AdministratorController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");


router.get('/', async function (req, res) {
    var result = await GameController.getAllGames()
    return res.status(200).json(result)
});

router.post('/', async function (req, res) {
    var result = await GameController.addGame(req.body);
    ResponseHandler(result, req, res);
});

router.put('/playfield', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await GameController.editPlayfield(req.body);
    return res.status(200).json(result);
});

router.put('/:gameId/player/:playerId', async function(req, res){
    var result = await GameController.addPlayerToGame(req.params.gameId, req.params.playerId)
    return res.status(200).json(result)
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
