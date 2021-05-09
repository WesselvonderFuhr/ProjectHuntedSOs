let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');
const Loot = require('../MongoDB/loot');
const geolib = require('geolib');


class PlayerController{
    async getAllPlayers(game_id){
        let query = { _id: game_id };
        let result = await Game.findOne(query).populate('players');
        result = result.players;
        if(result == null || result.length === 0){
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
            if (playerID === player.id) {
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
                if (item.id !== playerID) {
                    if (item.location.latitude != null) {
                        if (item.arrested === false && item.role === "Boef"){
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
        let playerQuery = {_id: playerID};
        let gameQuery = {_id: gameID};
        try{

            let game = await Game.findOne(gameQuery).populate('playfield');

            let player = await Player.findOne(playerQuery);

            let polyLocations = []
            for(let i = 0; i < game.playfield.playfield.length; i++){
                polyLocations.push({latitude: game.playfield.playfield[i].location.latitude, longitude: game.playfield.playfield[i].location.longitude})
            }

            if(player.location.latitude != null){
                let isPoint = geolib.isPointInPolygon(player.location, polyLocations)
                return new Result(200, !isPoint);
            }else{
                return new Result(404, "Player does not have a location");
            }

        }catch(e){
            return new Result(400, e.message);
        }
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
        if(!mongoose.isValidObjectId(lootID)){
            return new Result(404, "Loot does not exist");
        }

        let playerquery = { _id: playerID };
        let lootquery =  { _id: lootID };
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
