var express = require('express');
var Accesscode = require('../MongoDB/accesscode');
var Player = require('../MongoDB/player');
var router = express.Router();
var randomstring = require("randomstring");
let AccesscodeController = require('../Controllers/AccesscodeController');
const authorize = require("../Authorization/authorize");
const {DefaultResponse} = require("../Helper/DefaultResponse");

router.post('/', function (req, res) {
    var amount = req.body.amount
    var codes = []

    if(amount != null && !isNaN(amount) && amount > 0){
        for(var i = 0; i < amount; i++){
            var code = randomstring.generate(7).toUpperCase()
            codes.push(code)
            
            let accesscode = {};
            accesscode.code = code;
            accesscode.role = req.body.role;
            accesscode.assignedTo = null;
    
            let accesscodeModel = new Accesscode(accesscode);
            accesscodeModel.save();
        }

        res.status(200).send(codes)
    }else{
        res.status(404).send("Not a valid amount input, choose a number bigger than 0")
    }
});

router.get('/', function (req, res) {
    var codes = Accesscode.find({}, function (err, result) {
        if (!err) {
            res.send(result);
        }
    });
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

router.post('/check/:codeId', async function (req, res) {
    var playerQuery = {name: req.params.username }
    var accesscodeQuery = {code: req.params.codeId}

    var accessCode = await Accesscode.findOne(accesscodeQuery, function(err, aRes) {
        if(err || aRes == null) res.status(404).send('Accesscode does not exist')
        else {
            accessCode = aRes
            if(accessCode.assignedTo != null) {
                res.status(401).send('Accesscode already assigned')
                return;
            } else {
                res.status(200).send('Correct')
            }
        }
    })
})

router.post('/check/:codeId/:username', async function (req, res) {
    var playerQuery = req.params.username 
    var accesscodeQuery = {code: req.params.codeId}
    var accessCode
    accessCode = await Accesscode.findOne(accesscodeQuery, async function(err, aRes) {
        if(err || aRes == null) res.status(404).send('Accesscode does not exist')
        else {
            accessCode = aRes
            if(accessCode.assignedTo != null) {
                var player = await Player.findOne({ _id: accessCode.assignedTo }, function(err, pRes) {
                    if(err || pRes == null) {
                        res.status(404).send('Player does not exist')
                        return
                    } 
                    else {
                        player = pRes
                        if(playerQuery == player.name) {
                            res.status(200).send(accessCode)
                        } else {
                            res.status(401).send('Wrong player and code combination')
                        }
                        return
                    }
                })
            } else {
                console.log("Code: " + accessCode)
                res.status(200).send(accessCode)
            }
        }
    })
})

router.put('/assign/:id', async function (req, res) {
    if(req.body.playerId != null){
        var playerQuery = {_id: req.body.playerId}
        var accesscodeQuery = {_id: req.params.id}
        var code

        try{
            code = await Accesscode.findOne(accesscodeQuery).exec()
            if (code.assignedTo != null){
                res.status(401).send('Accesscode is already assigned') 
                }else{
                    Player.findOne(playerQuery, function(err, pResult){
                        if(err){
                            res.status(404).send('Player does not exist')
                        }else{
                            Accesscode.updateOne(accesscodeQuery, {assignedTo: req.body.playerId} , function(err, aResult){
                                if(err){
                                    res.status(404).send('Accesscode does not exist')
                                }else{
                                    res.status(200).send('Accesscode is updated with the id of playername ' + pResult.name)
                                }
                            })
                        }
                    })
                }
        }catch{
            res.status(401).send('Accesscode does not exist')
            return
        }
    }
});

router.delete('/:id', function(req, res){
    var id = req.params.id
    var role = req.body.role
    if(id == 1 && role != null){
        Accesscode.deleteMany({role: role}, function(err, result){
            if(!err){
                res.status(200).send('Delete completed')
            }else{
                res.status(400).send('Accesscodes not found')
            }
        })
    }else{
        Accesscode.deleteOne({_id: req.params.id}, function(err, result){
            if(!err){
                res.status(200).send('Delete completed')
            }else{
                res.status(400).send('Accesscodes not found')
            }
        })
    }
})

module.exports = router;
