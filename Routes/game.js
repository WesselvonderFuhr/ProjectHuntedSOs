var express = require('express');
var Game = require('../MongoDB/game');
var Player = require('../MongoDB/player');
var router = express.Router();


router.get('/', function (req, res) {
    Game.find({}, function (err, result) {
        if (!err) {
            res.send(result);
        }
    });
});

router.post('/', function (req, res) {
    let gameModel = new Game();
    gameModel.save();

    res.status(200).json(gameModel);
});

router.put('/playfield', function (req, res) {
    Game.findOneAndUpdate({}, req.body,function (err, result) {
        if (!err) {
            return res.status(200).send("Update Gelukt!");
        }else{
            res.status(400).send(err);
        }
    });
});

router.put('/:gameId/player/:playerId', async function(req, res){
    var isDuplicate = false
    try{
        var player = await Player.findOne({_id: req.params.playerId}).exec()
        var game = await Game.findOne({_id: req.params.gameId}).exec()

        for(var i = 0; i < game.players.length; i++){
            if(req.params.playerId == game.players[i]){
                isDuplicate = true
                break;
            }
        }
        if(!isDuplicate){
            Game.updateOne({_id: req.params.gameId}, {$push: {players: player}}, function(err, result){
                if(err){
                    res.status(400).send(err)
                }else{
                    res.status(200).send(result)
                }
            })

        }else{
            res.status(400).send('Player already exists in game')
        }
    }catch(e){
        res.status(400).send(e)
    }
});

module.exports = router;