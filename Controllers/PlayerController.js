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
        var player = await Player.findOne(query);
        if(player != null){
            role = player.role;
        }else{
            role = null;
        }
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


    async CheckPlayersOutOfBounds(gameID){
        let gameQuery = {_id: gameID};
        try{

            let game = await Game.findOne(gameQuery).populate('players');
            let results = [];
            for(let i = 0; i < game.players.length; i++){
                let player_name = game.players[i].name;
                let result = await this.CheckPlayerOutOfBounds(game.players[i]._id, gameID);
                if(result.responseCode === 200 && result.message === true) {
                    results.push(player_name);
                }
            }

            return new Result(200, results);
        }catch(e){
            return new Result(400, e.message);
        }
    }

    async CheckPlayerOutOfBounds(playerID,gameID){
        let playerQuery = {_id: playerID};
        let gameQuery = {_id: gameID};
        try{
            
            let game = await Game.findOne(gameQuery).populate('playfield');

            let player = await Player.findOne(playerQuery);

            if(player.location.latitude == null){
                return new Result(400, "Player does not have a location");
            }

            let isOutOfBounds = false;

            let polygonCollectionArray = game.playfield.playfield;
            // PolygonCollection array
            for(let j = 0; j < polygonCollectionArray.length; j++) {
                let polygonArray = polygonCollectionArray[j];

                // Polygon array first entry (which is the polygon)
                if(polygonArray.length > 0){
                    let polygonLocations = []
                    // Location array
                    for(let k = 0; k < polygonArray[0].length; k++){
                        polygonLocations.push({latitude: polygonArray[0][k].latitude, longitude: polygonArray[0][k].longitude})
                    }
                    isOutOfBounds = !geolib.isPointInPolygon(player.location, polygonLocations);
                }

                if(!isOutOfBounds){
                    // Polygon array other entries (which are the cutouts)
                    for(let k = 1; k < polygonArray.length; k++) {
                        let polygonLocations = []
                        // Location array
                        for(let l = 0; l < polygonArray[k].length; l++){
                            polygonLocations.push({latitude: polygonArray[k][l].latitude, longitude: polygonArray[k][l].longitude})
                        }
                        isOutOfBounds = geolib.isPointInPolygon(player.location, polygonLocations);
                    }
                }
            }
            return new Result(200, isOutOfBounds);
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
