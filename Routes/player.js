const express = require('express');
const Player = require('../MongoDB/player');
const Loot = require('../MongoDB/loot');
const Game = require('../MongoDB/game');
const router = express.Router();
const geolib = require('geolib');

let PlayerController = require('../Controllers/PlayerController');
const {DefaultResponse} = require("../Helper/DefaultResponse");
const Result = require("../Helper/Result");
const passport = require("passport");
const authorize = require("../Authorization/authorize");

//get
router.get('/', async function (req, res) {
    let result = await PlayerController.getAllPlayers(req.query.game_id);
    return res.status(result.responseCode).json(result.message);
});


router.get('/:id', async function (req, res) {
    let result =  await PlayerController.getPlayerByID(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

router.get('/check/:id', async function (req, res) {
    let result = await PlayerController.CheckPlayerRole(req.params.id);
    return res.status(result.responseCode).json(result.message);
});

router.get('/arrestableThieves/:id/:distance', async function(req, res){
    let result =  await PlayerController.getArrestablePlayers(req.params.id,req.params.distance);
    console.log(result)
    return res.status(result.responseCode).json(result.message);
});

router.get('/outofbounds/:id', async function(req, res){
    let result = await PlayerController.CheckPlayerOutOfBounds(req.params.id); 
    return res.status(result.responseCode).json(result.message);
});

router.get('/distances/:id', async function (req, res) {
    let result = await PlayerController.GetPlayerDistances(req.params.id); 
    return res.status(result.responseCode).json(result.message);
});

//post
router.post('/:codeId/:username', async function (req, res) {
    let result = await PlayerController.addPlayer(req.params.codeId, req.params.username,req.query.game_id); 
    
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
