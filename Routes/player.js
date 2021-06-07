const express = require('express');
const router = express.Router();
const passport = require("passport");

const PlayerController = require('../Controllers/PlayerController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");

//get
router.get('/getArrestedThieves', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Agent(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result = await PlayerController.getArrestedThieves(req.user.game_id);
    ResponseHandler(result, req, res);
});

router.get('/scores', passport.authenticate('jwt', { session: false }), async  function (req, res) {

    //let result = await PlayerController.getScoresLists(req.user.game_id)
    let unauthorized = await authorize.Player(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }
    let result = await PlayerController.getScoresLists(req.user.game_id)
    ResponseHandler(result, req, res);
});

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    if(req.user.role === "Administrator"){
        let result = await PlayerController.getAllPlayers(req.user.game_id);
        ResponseHandler(result, req, res);
    } else {
        let result =  await PlayerController.getPlayerByID(req.user.player_id);
        ResponseHandler(result, req, res);
    }
});

router.get('/outofbounds', passport.authenticate('jwt', { session: false }), async function(req, res){
    let result;
    if(req.user.player_id != null){
        result = await PlayerController.CheckPlayerOutOfBounds(req.user.player_id, req.user.game_id);
    } else {
        result = await PlayerController.CheckPlayersOutOfBounds(req.user.game_id);
    }
    ResponseHandler(result, req, res);
});

router.get('/:player_id', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result =  await PlayerController.getPlayerByID(req.params.player_id);
    ResponseHandler(result, req, res);
});

router.get('/arrestableThieves/:distance', passport.authenticate('jwt', { session: false }), async function(req, res){
    let unauthorized = await authorize.Agent(req.user);
    if(unauthorized){
        return ResponseHandler(unauthorized, req, res);
    }

    let result =  await PlayerController.getArrestablePlayers(req.user.player_id, req.user.game_id, req.params.distance);
    ResponseHandler(result, req, res);
});

router.put('/stolen/:loot_id', passport.authenticate('jwt', { session: false }), async function (req, res) {
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

    let thief = await Player.findOne({_id: req.params.thief_id})
    let loot = []

    console.log(thief)
    if(thief.loot.length > 0) {
        for(var i =0; i < thief.loot.length; i++) {
            loot.push(thief.loot[i])
        }
        console.log("loot: " + loot)
        let lootQuery = {loot: loot }

        await PlayerController.editPlayer(req.user.player_id, lootQuery);
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

    let location = {
        location:
            {
                latitude: req.body.location.latitude,
                longitude: req.body.location.longitude
            }
    }

    let result = await PlayerController.editPlayer(req.user.player_id, location);
    ResponseHandler(result, req, res);
});



// router.get('/getArrestedThieves', async function (req, res) {
//     console.log("aids")
//     let result = await PlayerController.getArrestedThieves("608bfc395e6f4c126818bee4");
//     ResponseHandler(result, req, res);
// });

module.exports = router;
