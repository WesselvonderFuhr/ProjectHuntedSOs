let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');
const Accesscode = require('../MongoDB/accesscode');
const geolib = require('geolib');


class PlayerController{
    async getAllPlayers(game_id){
        let query = { _id: game_id };
        let result = await Game.findOne(query).populate('players');
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

    async getArrestablePlayers(playerID,gameID,distance){
        //getplayers by gameid and pupulate
        let query = { _id: gameID };
        let game = await Game.findOne(query).populate('players');
        let players = game.players;
    
        if(!parseInt(distance)){
            return new Result(400,"Could not parse int distance");
        }
        //return list of id's that are close within distance
        var playerLoc
        var distances = [];
        players.map(function (player) {
            if (playerID == player.id) {
                playerLoc = player.location
            }
        });
        if (playerLoc == null){
            return new Result(404, "Player does not exist");
        } else{
            if (playerLoc.latitude == null) {
                return new Result(400, "Player has no valid location");
            }
            players.forEach(item => {
                if (item.id != playerID) {
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
        return new Result(200, distances);
       
    }

    async CheckPlayerOutOfBounds(playerID,gameID){
        console.log("here")
        var playerQuery = {_id: playerID};
        console.log("here")
        var gameQuery = {_id: gameID};
        try{
            
            var game = await Game.findOne(gameQuery).populate('player');
            await game.populate('playfield');
            
            var player = await Player.findOne(playerQuery);
            
            var polyLocations = []
            game.playfield.forEach(loc =>
                polyLocations.push({latitude: loc.location.latitude, longitude: loc.location.longitude})
            )

            if(player.location.latitude != null){
                var isPoint = geolib.isPointInPolygon(player.location, polyLocations)
                
                return new Result(200, !isPoint);
            }else{
                return new Result(404, "Player does not have a location");
            }

        }catch(e){
            return new Result(400, e);
        }
    }

    async GetPlayerDistances(id, gameID){
        //needs test
        let query = { _id: gameID };
        let game = await Game.findOne(query).populate('players');
        let players = game.players;

        var playerLoc
        var distances = [];
        players.map(function (player) {
            if (id == player.id) {
                playerLoc = player.location
            }
        });

        if (playerLoc.latitude == null) {
            return new Result(404,"Deze speler heeft geen location");
        }

        players.forEach(item => {
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
        });
                
        return new Result(200,JSON.stringify(distances, null, 2));
    }

    async addPlayer(code,name){
        let emptyLocation = { latitude: null, longitude: null }
        let accessCode = await Accesscode.findOne({ code: code })
		
        let query = { accesscodes: accessCode._id };
        let game = await Game.findOne(query);
    
        let player = {};
        player.name = name;
        player.role = accessCode.role;
        player.arrested = false;
        player.location = emptyLocation;
    
        let playerModel = new Player(player);
        await playerModel.save();
    
        accessCode.assignedTo = playerModel._id
        await accessCode.save()

        game.players.push(playerModel);
        await game.save();
		
        return playerModel;
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

        let location = {
            location:
                {
                    latitude: body.location.latitude,
                    longitude: body.location.longitude
                }
        }
        try{
            let player = await this.getPlayerByID(id);
            player = player.message;
            if(player != null){
                await Player.updateOne(query, location);
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
