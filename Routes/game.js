var express = require('express');
var Game = require('../MongoDB/game');
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

module.exports = router;