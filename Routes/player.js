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
            if (playerLoc.latitude == null) {
                res.send("Deze speler heeft geen location")
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

            function finished(err) {
                console.log(err)
            }
            res.send(JSON.stringify(distances, null, 2))
        }
    });
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