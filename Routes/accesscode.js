var express = require('express');
var Accesscode = require('../MongoDB/accesscode');
var Player = require('../MongoDB/player');
var router = express.Router();
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    var amount = req.body.amount
    var codes = []

    if(amount != null && !isNaN(amount) && amount > 0){
        for(var i = 0; i < amount; i++){
            var code = randomstring.generate(7)
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
        res.status(401).send("Not a valid amount input, choose a number bigger than 0")
    }
});

router.get('/', function (req, res) {
    var codes = Accesscode.find({}, function (err, result) {
        if (!err) {
            res.send(result);
        }
    });
});

router.post('/check/:playerName/:codeId', async function (req, res) {

    var playerQuery = {name: req.params.playerName}
    var accesscodeQuery = {code: req.params.codeId}
    var player

    try {
        player = await Player.findOne({name: playerQuery.name}, function(err, pRes) {
            if (err) res.status(401).send('Playername does not exist')
            else if(pRes == null) res.status(401).send('Playername does not exist')
            else {
                player = pRes
                var accessCode = Accesscode.findOne(accesscodeQuery, function(err, aRes) {
                    if(err) res.status(401).send('Accesscode does not exist')
                    else if(aRes == null) res.status(401).send('Accesscode does not exist')
                    else {
                        accessCode = aRes
                        if(accessCode.assignedTo == player.id) {
                            if(accessCode.role == "Boef") {
                                res.status(200).send("Boef")
                            } else {
                                res.status(200).send("Politie")
                            }

                        } else {
                            res.status(401).send('Accesscode does not match player name')
                        }
                    }
                })
            }
        })
    } catch(e) {
        res.status(401).send("Error: " + e)
        return
    }
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
                            res.status(401).send('Player does not exist')
                        }else{
                            Accesscode.updateOne(accesscodeQuery, {assignedTo: req.body.playerId} , function(err, aResult){
                                if(err){
                                    res.status(401).send('Accesscode does not exist')
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

module.exports = router;