var express = require('express');
var Accesscode = require('../MongoDB/accesscode');
var Player = require('../MongoDB/player');
var router = express.Router();
var randomstring = require("randomstring");
let AccesscodeController = require('../Controllers/AccesscodeController');
const authorize = require("../Authorization/authorize");
const {DefaultResponse} = require("../Helper/DefaultResponse");


router.post('/', async function (req, res) {
    var result = await AccesscodeController.addAccesscodes(req.body)
    return res.status(200).json(result);
});

router.get('/', async function (req, res) {
    var result = await AccesscodeController.getAllAccesscodes()
    return res.status(200).json(result);
});

router.post('/authenticate', async function (req, res){
    if(!req.query.name || !req.query.code){
        let message = { message: "Login with name and code"};
        return res.status(400).json(message);
    }

    let result = await AccesscodeController.authenticate(req.query.name, req.query.code);
    DefaultResponse(result, req, res);
});
//check of code bestaat
//check de naam van de assigned speler
//als die niet bestaat, maak deze aan
//login

router.post('/check/:code', async function (req, res) {
    var result = await AccesscodeController.checkAssigned(req.params.code)
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
