var express = require('express');
var Accesscode = require('../MongoDB/accesscode');
var Player = require('../MongoDB/player');
var router = express.Router();
var randomstring = require("randomstring");

let AccesscodeController = require('../Controllers/AccesscodeController');

router.post('/', async function (req, res) {
    var result = await AccesscodeController.addAccesscodes(req.body)
    return res.status(200).json(result);
});

router.get('/', async function (req, res) {
    var result = await AccesscodeController.getAllAccesscodes()
    return res.status(200).json(result);
});


//check of code bestaat
//check de naam van de assigned speler
//als die niet bestaat, maak deze aan
//login

router.post('/check/:codeId', async function (req, res) {
    var result = await AccesscodeController.checkAssigned(codeId)
    return res.status(200).json(result);
})

router.post('/check/:codeId/:username', async function (req, res) {
    var result = await AccesscodeController.checkCodeNameCombination(req.params.codeId, req.params.username)
    return res.status(200).json(result);
})

router.put('/assign/:id', async function (req, res) {
    var result = await AccesscodeController.assignCode(req.body.playerId, req.params.id)
    return res.status(200).json(result);
});

router.delete('/:id', async function(req, res){
    var result = await AccesscodeController.deleteCode(req.params.id, req.body.role)
    return res.status(200).json(result);
})

module.exports = router;