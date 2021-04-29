var express = require('express');
var Game = require('../MongoDB/game');
var Player = require('../MongoDB/player');
var router = express.Router();
const passport = require("passport");

let AdministratorController = require('../Controllers/AdministratorController');
const authorize = require("../Authorization/authorize");
const {DefaultResponse} = require("../Helper/DefaultResponse");

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

router.put('/playfield', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return DefaultResponse(unauthorized, req, res);
    }

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


router.post('/administrator', async function (req, res) {
    if(!req.query.name || !req.query.code){
        let message = { message: "Login with name and code"};
        return res.status(400).json(message);
    }

    let result = await AdministratorController.authenticate(req.query.name, req.query.code);
    if(result.responseCode === 200){
        return res.status(200).json(result.message);
    } else {
        DefaultResponse(result, req, res);
    }
});

module.exports = router;
