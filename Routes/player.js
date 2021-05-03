const express = require('express');
const Player = require('../MongoDB/player');
const Loot = require('../MongoDB/loot');
const Game = require('../MongoDB/game');
const router = express.Router();
const geolib = require('geolib');

let PlayerController = require('../Controllers/PlayerController');
const {DefaultResponse} = require("../Helper/ResponseHandler");
const Result = require("../Helper/Result");
const passport = require("passport");
const authorize = require("../Authorization/authorize");

//get
router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.getAllPlayers(req.user.game_id);
    return res.status(result.responseCode).json(result.message);
});

router.get('/outofbounds', passport.authenticate('jwt', { session: false }), async function(req, res){
        let result = await PlayerController.CheckPlayerOutOfBounds(req.user.player_id);
        return res.status(result.responseCode).json(result.message);
});

router.get('/distances', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.GetPlayerDistances(req.user.player_id, req.user.game_id);
    return res.status(result.responseCode).json(result.message);
});

router.get('/:id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result =  await PlayerController.getPlayerByID(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

//TODO Usage?
router.get('/check/:id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.CheckPlayerRole(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

router.get('/arrestableThieves/:distance', passport.authenticate('jwt', { session: false }), async function(req, res){
    //TODO Only agent
    let result =  await PlayerController.getArrestablePlayers(req.user.player_id,req.params.distance);
    console.log(result)
    return res.status(result.responseCode).json(result.message);
});


router.post('/stolen/:lootid', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.StealLoot(req.user.player_id, req.params.lootid);
    return res.status(result.responseCode).json(result.message);
});

//put
router.put('/arrest/:thiefId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    var arrestQuery = { arrested: true, loot: [] }
    let result = await PlayerController.editPlayer(req.params.thiefId, arrestQuery); 
    return res.status(result.responseCode).json(result.message);
});

router.put('/location', passport.authenticate('jwt', { session: false }),async  function (req, res) {
    var newLocation = {
        location:
        {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        }
    }
    let result = await PlayerController.editPlayer(req.user.player_id, newLocation);
    return res.status(result.responseCode).json(result.message);
});

module.exports = router;
