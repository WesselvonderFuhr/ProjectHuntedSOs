var express = require('express');
var Player = require('../MongoDB/player');
var Loot = require('../MongoDB/loot');
var router = express.Router();
var geolib = require('geolib');

router.post('/', function (req, res) {
    const emptyLoc = { latitude: null, longitude: null }
    const name = req.body.name;
    const role = req.body.role;

    let player = {};
    player.name = name;
    player.role = role;
    player.arrested = false;
    player.location = emptyLoc;

    let playerModel = new Player(player);
    playerModel.save();

    res.json(playerModel.id);
});

router.get('/', function (req, res) {
    var players = Player.find({}, function (err, result) {
        if (!err) {
            res.send(result);
        }
    });
});


router.get('/:id', function (req, res) {
    var query = { _id: req.params.id };
    Player.findOne(query, function (err, result) {
        if (!err) {
            res.status(200).send(result);
        }else{
            res.status(404).send("User does not exist")
		    }
    });
});

router.get('/arrestableThieves/:id/:distance', function(req, res){
    if(req.params.id.length < 25){
        if(!parseInt(req.params.distance)){
            res.status(400).send("Could not parse int distance")
            return
        }
        //return list of id's that are close within distance
        var playerLoc
        var players = Player.find({}, function (err, result) {
            if (!err) {
                var distances = [];
                result.map(function (player) {
                    if (req.params.id == player.id) {
                        playerLoc = player.location
                    }
                })
                if (playerLoc == null){
                    res.status(404).send("User does not exist")
                    return
                } else{
                    if (playerLoc.latitude == null) {
                        res.status(400).send("Player has no valid distance")
                        return
                    }
                    result.forEach(item => {
                        if (item.id != req.params.id) {
                            if (item.location.latitude != null) {
                                if (item.arrested == false && item.role == "Boef"){
                                    var s = geolib.getPreciseDistance(
                                        { latitude: playerLoc.latitude, longitude: playerLoc.longitude },
                                        { latitude: item.location.latitude, longitude: item.location.longitude }
                                    );
                                    if (s <= req.params.distance){
                                        distances.push({
                                            'id': item.id
                                        });
                                    }
                                }
                            }
                        }
                    })
                }
                
                function finished(err) {
                    console.log(err)
                }
                res.send(JSON.stringify(distances, null, 2))
            }
            else{
                res.send(error);
            }
        });
    }else{
        res.sendStatus(404);
    }
    
});

router.get('/outofbounds/:id', function(req, res){
    var playerQuery = {_id: req.params.id}

    Player.findOne(playerQuery, function(err, result){
        if(result == null){
            res.status(401).send('Player does not exist')
        }else{
            //5.5249804, 51.7701603
            // 5.5228454, 51.7690881
            // 5.5250716, 51.7674349
            // 5.5266756, 51.7679229
            // 5.5262786, 51.7701172
            // 5.5249804, 51.7701603
            var loc = result.location
            if(loc.latitude != null){
                var isPoint = geolib.isPointInPolygon(loc, [
                    {longitude:-122.0813549, latitude: 37.4230457},
                    {longitude:-122.0867568, latitude: 37.4233737},
                    {longitude:-122.0867246, latitude: 37.4211669},
                    {longitude:-122.0813870, latitude: 37.4208175},
                    {longitude:-122.0813549, latitude: 37.4230457}
                ])
                res.status(200).send(!isPoint)
            }else{
                res.status(401).send("Player has no location")
            }
        }
    })
});

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

})

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

module.exports = router;