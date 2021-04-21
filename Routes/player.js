const express = require('express');
const Player = require('../MongoDB/player');
const Loot = require('../MongoDB/loot');
const Game = require('../MongoDB/game');
const router = express.Router();
const geolib = require('geolib');
let PlayerController = require('../Controllers/PlayerController');
const {DefaultResponse} = require("../Helper/DefaultResponse");
//get
router.get('/', function (req, res) {
    let result = await PlayerController.getAllPlayers(req.query.game_id);
    return res.status(result.responseCode).json(result.message);
});


router.get('/:id', function (req, res) {
    let result =  await PlayerController.getPlayerByID(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

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

router.get('/arrestableThieves/:id/:distance', function(req, res){
    let result =  await PlayerController.getArrestablePlayers(req.params.id,req.params.distance); 
    return res.status(result.responseCode).json(result.message);
});

router.get('/outofbounds/:id', async function(req, res){
    let result = await PlayerController.CheckPlayerOutOfBounds(req.params.id); 
    return res.status(result.responseCode).json(result.message);
});

router.get('/distances/:id', function (req, res) {
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
    var emptyLoc = { latitude: null, longitude: null }
    var name = req.params.username;
    var codeId = req.params.codeId
    var accessCode = await Accesscode.findOne({code: codeId})

    let player = {};
    player.name = name;
    player.role = accessCode.role;
    player.arrested = false;
    player.location = emptyLoc;

    let playerModel = new Player(player);
    await playerModel.save();

    console.log(playerModel)

    accessCode.assignedTo = playerModel._id

    await accessCode.save()

    res.status(200).send(accessCode);
});

router.post('/:playerid/stolen/:lootid', function (req, res) {
    var playerquery = { _id: req.params.playerid };
    var lootquery =  { _id: req.params.lootid };
    Player.findOne(playerquery,function(err,result){
        if(result == null){
            res.status(404).send("Deze speler bestaat niet")
        }else{
            let player = result
            Loot.findOne(lootquery, function(err, result) {
                if(result == null){
                    res.status(404).send("Deze loot bestaat niet")
                }else{
                    let hasLoot = false;
                    let loot=result;
                   
                    for(let i =0; i < player.loot.length; i++){
                        if(player.loot[i].equals(loot._id)){
                            hasLoot = true;
                        }
                    }
                    if(!hasLoot){
                        player.loot.push(loot)
                        player.save();
                        res.send(loot.name)
                    }else{
                        res.status(400).send("U heeft deze loot al")
                    }
                }  
            });
        }      
    });
});
//put
router.put('/arrest/:thiefId', async (req, res) => {
    var query = { _id: req.params.thiefId };
    var arrestQuery = {arrested: true,
    loot: []}

    Player.updateOne(query, arrestQuery, function (err, result) {
        function finished(err) {
            console.log(err)
        }
        res.send("Boef gevangen!");
    })

});
router.put('/location/:id', function (req, res) {
    var query = { _id: req.params.id };
    var newLoc = {
        location:
        {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        }
    }
    Player.updateOne(query, newLoc, function (err, result) {
        function finished(err) {
            console.log(err)
        }
        res.send("Update gelukt");
    })
});









module.exports = router;
