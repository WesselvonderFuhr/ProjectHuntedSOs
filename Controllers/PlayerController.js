let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');
const Accesscode = require('../MongoDB/accesscode');
const geolib = require('geolib');


class PlayerController{
    async getAllPlayers(game_id){
        let query = { _id: game_id };
        let result = await Game.findOne(query).populate('player');
        result = result.players;
        if(result == null || result.length == 0){
            return new Result(404, "There are no players found");
        }else{
            return new Result(200, result);
        }
    }

    async getPlayerByID(id){
        
        let query = { _id: id };
        let result = await Player.findOne(query).populate('loot');
        if(result == null){
            return new Result(404, "Player does not exist");
        }
        return new Result(200,result);
    }
    async CheckPlayerRole(id){
        let role;
        var query = { _id: id};
        var player = await Player.findOne(query, function (err, result) {
            if(result != null){
                role = result.role;
            }else{
                role = null;
            }
        });
        if(role == null){
            return new Result(404, "Player not found");
        }else{
            return new Result(200,role);
        }
    }

    async getArrestablePlayers(id,distance){
        //getplayers by gameid and pupulate
        let responce;
        if(id.length < 25){
            if(!parseInt(distance)){
                return new Result(400,"Could not parse int distance");
            }
            //return list of id's that are close within distance
            var playerLoc
            await Player.find({}, function (err, result) {
                if (!err) {
                    var distances = [];
                    result.map(function (player) {
                        if (id == player.id) {
                            playerLoc = player.location
                        }
                    })
                    if (playerLoc == null){
                        responce = new Result(404, "Player does not exist");
                        return;
                    } else{
                        if (playerLoc.latitude == null) {
                            responce = new Result(400, "Player has no valid distance");
                            return;
                        }
                        result.forEach(item => {
                            if (item.id != id) {
                                if (item.location.latitude != null) {
                                    if (item.arrested == false && item.role == "Boef"){
                                        var s = geolib.getPreciseDistance(
                                            { latitude: playerLoc.latitude, longitude: playerLoc.longitude },
                                            { latitude: item.location.latitude, longitude: item.location.longitude }
                                        );
                                        if (s <= distance){
                                            distances.push({
                                                'id': item.id
                                            });
                                        }
                                    }
                                }
                            }
                        })
                    }
                    responce = new Result(200, JSON.stringify(distances, null, 2));
                    return;
                }
                else{
                    return new Result(500, "Something went wrong");
                }
            });
        }else{
            responce = new Result(404, "Id does not exist");
        }
        return responce;
    }

    async CheckPlayerOutOfBounds(playerID){
        var playerQuery = {_id: playerID}
        var indexFound = null
        try{
            var game = await Game.find({}).exec()
            var player = await Player.findOne(playerQuery).exec()
    
            for(var i = 0; i < game.length; i++){
                for(var x = 0; x < game[i].players.length; x++){
                    if(game[i].players[x] == playerID){
                        indexFound = i
                        break;
                    }
                }
            }
    
            var polyLocations = []
            game[indexFound].playfield.forEach(loc =>
                polyLocations.push({latitude: loc.location.latitude, longitude: loc.location.longitude})
            )
    
            if(indexFound != null){
                if(player.location.latitude != null){
                    var isPoint = geolib.isPointInPolygon(player.location, polyLocations)
                    
                    return new Result(200, !isPoint);
                }else{
                    return new Result(404, "Player does not have a location");
                }
            }else{
                return new Result(404, "Player does not exist in any game");
            }
        }catch(e){
            return new Result(400, e);
        }
    }

    async GetPlayerDistances(id){
        //getplayers by gameid and pupulate
        //needs test
        let query = { _id: gameID };
        let game = await Game.findOne(query);
        let players = game.players;

        let responce;
        var playerLoc
        await Player.find({}, function (err, result) {
            if (!err) {
                var distances = [];
                result.map(function (player) {
                    if (id == player.id) {
                        playerLoc = player.location
                    }
                });

                if (playerLoc.latitude == null) {
                    responce = new Result(404,"Deze speler heeft geen location");
                    return;
                }
    
                result.forEach(item => {
                    if (item.id != id) {
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
                
                responce = new Result(200,JSON.stringify(distances, null, 2));
                return;
            }
        });
        return responce;
    }



    async addPlayer(codeID,username,gameID){
        //needs test
        let query = { _id: gameID };
        let game = await Game.findOne(query).populate('player');

        var emptyLoc = { latitude: null, longitude: null }
        var name = username;
        var codeId = codeID;
        var accessCode = await Accesscode.findOne({code: codeId})
    
        let player = {};
        player.name = name;
        player.role = accessCode.role;
        player.arrested = false;
        player.location = emptyLoc;
    
        let playerModel = new Player(player);
        await playerModel.save();
    
        accessCode.assignedTo = playerModel._id
        await accessCode.save()

        game.players.push(playerModel);
    
    
        return new Result(200, accessCode);
    }

    async StealLoot(playerID,lootID){
        var playerquery = { _id: playerID };
        var lootquery =  { _id: lootID };
        //get player
        let player = await Player.findOne(playerquery)
        if(player == null){
            return new Result(404, "Player does not exist");
        }    
        //get loot
        let loot = await Loot.findOne(lootquery);
        if(loot == null){
            return new Result(404, "Loot does not exist");
        }   
        //check player has loot
        let hasLoot = false;

        for(let i =0; i < player.loot.length; i++){
            if(player.loot[i].equals(loot._id)){
                hasLoot = true;
            }
        }
        if(!hasLoot){
            player.loot.push(loot)
            await player.save();
            return  new Result(200, loot.name);
        }else{
            return new Result(400, "Player already has this loot");
        }
    }

    async editPlayer(id, body){
        let query = { _id: id };
        try{
            let player = await this.getPlayerByID(id);
            player = player.message;
            if(player != null){
                await Player.updateOne(query, body);
                return new Result(200, player.name + " has been updated");
            } else {
                return new Result(404, "Player not found");
            }
        }
        catch{
            return null;
        }   
    }


}
module.exports = new PlayerController();
