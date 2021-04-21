let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = require('../MongoDB/player');
const Accesscode = require('../MongoDB/accesscode');


class PlayerController{
    async getAllPlayers(game_id){
        let query = { _id: game_id };
        return await Game.findOne(query).populate('player').players;
    }

    async getPlayerByID(id){
        let query = { _id: id };
        let result = await Player.findOne(query).populate('loot');
        if(result == null){
            return new Result(404, "Player does not exist");
        }
        return result;
    }

    async getArrestablePlayers(id,distance){
        if(id.length < 25){
            if(!parseInt(distance)){
                return new Result(400).send("Could not parse int distance");
            }
            //return list of id's that are close within distance
            var playerLoc
            Player.find({}, function (err, result) {
                if (!err) {
                    var distances = [];
                    result.map(function (player) {
                        if (id == player.id) {
                            playerLoc = player.location
                        }
                    })
                    if (playerLoc == null){
                        return new Result(404, "Player does not exist");
                    } else{
                        if (playerLoc.latitude == null) {
                            return new Result(400, "Player has no valid distance");
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
                    return new Result(200, JSON.stringify(distances, null, 2));
                }
                else{
                    return null;
                }
            });
        }else{
            return new Result(404, "Id does not exist");
        }
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
                    
                    res.status(200).send(!isPoint)
                }else{
                    return new Result(400, "Player does not have a location");
                }
            }else{
                return new Result(400, "Player does not exist in any game");
            }
        }catch(e){
            return new Result(400, e);
        }
    }

    async addPlayer(codeID,username){
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
    
        console.log(playerModel)
    
        accessCode.assignedTo = playerModel._id
    
        await accessCode.save()
    
    
        return new Result(200, accessCode);
    }

    async StealLoot(playerID,lootID){
        var playerquery = { _id: playerID };
        var lootquery =  { _id: lootID };
        Player.findOne(playerquery,function(err,result){
            if(result == null){
                return new Result(404, "Player does not exist");
            }else{
                let player = result
                Loot.findOne(lootquery, function(err, result) {
                    if(result == null){
                        return new Result(404, "Loot does not exist");
                    }else{
                        let hasLoot = false;
                        let loot=result;
                       
                        for(let i =0; i < player.loot.length; i++){
                            if(player.loot[i].equals(loot._id)){
                                hasLoot = true;
                            }
                        }
                        if(!hasLoot){
                            player.loot.push(loot)
                            player.save();
                            return new Result(200, loot.name);
                        }else{
                            return new Result(400, "Player already has this loot");
                        }
                    }  
                });
            }      
        });
    }

    async editPlayer(id, body){
        let query = { _id: id };
        try{
            let player = await this.getPlayerByID(id);
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
