const express = require('express');
const Player = require('../MongoDB/player');
const Loot = require('../MongoDB/loot');
const Game = require('../MongoDB/game');
const router = express.Router();
const geolib = require('geolib');
let PlayerController = require('../Controllers/PlayerController');
const {DefaultResponse} = require("../Helper/DefaultResponse");
//get
router.get('/', async function (req, res) {
    let result = await PlayerController.getAllPlayers(req.query.game_id);
    return res.status(result.responseCode).json(result.message);
});


router.get('/:id', async function (req, res) {
    let result =  await PlayerController.getPlayerByID(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

//geen idee wat dit is
router.get('check/:name', async function (req, res) {
    var query = { _id: req.params.name };
    var player = await Player.find(query, function (err, result) {
        if (!err && player != null) {
            for(var i = 0; i < player.length; i++) {
                if(player[i].name == query) {
                    res.status(200).send(player[i].role);
                    return;
                }
            }
        }
        res.status(200).send('Not found');
    });
});

router.get('/arrestableThieves/:id/:distance', async function(req, res){
    let result =  await PlayerController.getArrestablePlayers(req.params.id,req.params.distance); 
    return res.status(result.responseCode).json(result.message);
});

router.get('/outofbounds/:id', async function(req, res){
    let result = await PlayerController.CheckPlayerOutOfBounds(req.params.id); 
    return res.status(result.responseCode).json(result.message);
});

//geen idee wat dit is
router.get('/distances/:id', async function (req, res) {
    var playerLoc
    var players = Player.find({}, function (err, result) {
        if (!err) {
            var distances = [];
            result.map(function (player) {
                if (req.params.id == player.id) {
                    playerLoc = player.location
                }
            })
            if (playerLoc.latitude == null) {
                res.send("Deze speler heeft geen location")
                return
            }

            result.forEach(item => {
                if (item.id != req.params.id) {
                    if (item.location.latitude != null) {
                        var s = geolib.getPreciseDistance(
                            { latitude: playerLoc.latitude, longitude: playerLoc.longitude },
                            { latitude: item.location.latitude, longitude: item.location.longitude }
                        );
                        distances.push({
                            'id': item.id,
                            'distance': s
                        });
                    }
                }
            })

            function finished(err) {
                console.log(err)
            }
            res.send(JSON.stringify(distances, null, 2))
        }
    });
});

//post
router.post('/:codeId/:username', async function (req, res) {
    let result = await PlayerController.addPlayer(req.params.codeId, req.params.username); 
    return res.status(result.responseCode).json(result.message);
});

router.post('/:playerid/stolen/:lootid',async function (req, res) {
    let result = await PlayerController.StealLoot(req.params.playerid, req.params.lootid); 
    return res.status(result.responseCode).json(result.message);
});

//put
router.put('/arrest/:thiefId', async (req, res) => {
    var arrestQuery = {arrested: true,
    loot: []}
    let result = await PlayerController.editPlayer(req.params.thiefId, arrestQuery); 
    return res.status(result.responseCode).json(result.message);
});

router.put('/location/:id',async  function (req, res) {
    var newLoc = {
        location:
        {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        }
    }
    let result = await PlayerController.editPlayer(req.params.id, newLoc); 
    return res.status(result.responseCode).json(result.message);
});

module.exports = router;
