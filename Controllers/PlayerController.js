let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = require('../MongoDB/player');


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

    async addPlayer(game_id,body){
        let player = new Player(body);
        try {
            let query = { _id: game_id };
            let game = await Game.findOne(query);
            if(game == null){
                return new Result(404, "Game does not exist");
            }
            game.players.push(player._id);
            await player.save();
            await game.save();
            return new Result(200, player.name + " has been added");
        }
        catch (e){
            return new Result(400, e.message);
        }
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
