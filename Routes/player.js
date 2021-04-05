var express = require('express');
var Player = require('../MongoDB/player');
var router = express.Router();
var geolib = require('geolib');

router.post('/', function (req, res) {
    const emptyLoc = { latitude: null, longitude: null}
    const name = req.body.name;
    const role = req.body.role;
    //const arrested = req.body.arrested;

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
            return res.send(result);
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

router.put('/arrest/:thiefId', async (req, res) => {
    var thief = await Player.findById(req.params.id)
    var arrestQuery = {arrested: true,
    loot: []}

    Player.updateOne(thief, arrestQuery, function (err, result) {
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

module.exports = router;