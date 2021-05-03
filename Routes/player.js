const express = require('express');
const router = express.Router();
const passport = require("passport");

const PlayerController = require('../Controllers/PlayerController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");

//get
router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    if(req.user.role === "Administrator"){
        let result = await PlayerController.getAllPlayers(req.user.game_id);
        ResponseHandler(result, req, res);
    } else {
        let result =  await PlayerController.getPlayerByID(req.user.player_id);
        ResponseHandler(result, req, res);
    }
});


router.get('/:player_id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result =  await PlayerController.getPlayerByID(req.params.player_id);
    ResponseHandler(result, req, res);
});


router.get('/outofbounds', passport.authenticate('jwt', { session: false }), async function(req, res){
    let unauthorized = await authorize.Player(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await PlayerController.CheckPlayerOutOfBounds(req.user.player_id, req.user.game_id);
    ResponseHandler(result, req, res);
});

//TODO Usage?
router.get('/distances', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.GetPlayerDistances(req.user.player_id);
    ResponseHandler(result, req, res);
});

//TODO Usage?
router.get('/check/:id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await PlayerController.CheckPlayerRole(req.params.id);
    ResponseHandler(result, req, res);
});

router.get('/arrestableThieves/:distance', passport.authenticate('jwt', { session: false }), async function(req, res){
    let unauthorized = await authorize.Agent(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result =  await PlayerController.getArrestablePlayers(req.user.player_id, req.user.game_id, req.params.distance);
    console.log(result)
    ResponseHandler(result, req, res);
});

router.post('/stolen/:loot_id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Boef(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await PlayerController.StealLoot(req.user.player_id, req.params.loot_id);
    ResponseHandler(result, req, res);
});

//put
router.put('/arrest/:thief_id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Agent(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let arrestQuery = { arrested: true, loot: [] }
    let result = await PlayerController.editPlayer(req.params.thief_id, arrestQuery);
    ResponseHandler(result, req, res);
});

router.put('/location', passport.authenticate('jwt', { session: false }),async  function (req, res) {
    let unauthorized = await authorize.Player(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let newLocation = {
        location:
        {
            latitude: req.body.location.latitude,
            longitude: req.body.location.longitude
        }
    }
    let result = await PlayerController.editPlayer(req.user.player_id, newLocation);
    ResponseHandler(result, req, res);
});

module.exports = router;
