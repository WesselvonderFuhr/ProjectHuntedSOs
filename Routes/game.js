var express = require('express');
var Game = require('../MongoDB/game');
var Player = require('../MongoDB/player');
var router = express.Router();

let GameController = require('../Controllers/GameController');


router.get('/', async function (req, res) {
    var result = await GameController.getAllGames()
    return res.status(200).json(result)
});

router.post('/', async function (req, res) {
    var result = await GameController.addGame()
    return res.status(200).json(result)
});

router.put('/playfield', async function (req, res) {
    var result = await GameController.editPlayfield(req.body)
    return res.status(200).json(result)
});

router.put('/:gameId/player/:playerId', async function(req, res){
    var result = await GameController.addPlayerToGame(req.params.gameId, req.params.playerId)
    return res.status(200).json(result)
});

module.exports = router;