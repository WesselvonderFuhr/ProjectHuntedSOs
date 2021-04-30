const Result = require("../Helper/Result");
const randomstring = require("randomstring");

let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Playfield = require('../MongoDB/playfield');
let Administrator = require('../MongoDB/administrator');
const PlayfieldController = require("./PlayfieldController");
const playfield = require("../MongoDB/playfield");

class GameController{
    async getAllGames(){
        return await Game.find()
    }

    async getGameById(game_id){
        let query = { _id: game_id };
        return await Game.findOne(query);
    }

    async addGame(body){
        let game = new Game();
        //jail
        let jail = {
            "location" : {
                "latitude" : 0,
                "longitude" : 0
            }
        };
        let jailModel = new Jail(jail);
        await jailModel.save();
        game.jail = jailModel;
        //admin
        let code = randomstring.generate(7).toUpperCase();
        let administrator = { name: body.name, code: code };
        let administratorModel = new Administrator(administrator);
        await administratorModel.save();
        game.administrator = administratorModel;
        //playfield
        let playfield = {
            "playfield" :  [   {
                                "location" : {
                                    "latitude" : 0,
                                    "longitude" : 0
                                }
                            }  
                     ]
        };
        let playfieldModel = new Playfield(playfield);
        await playfieldModel.save();
        game.playfield = playfieldModel;

        await game.save()
        return new Result(200, code);
    }


    async addPlayerToGame(gameId, playerId){
        var isDuplicate = false

        var player = await Player.findOne({_id: playerId})
        var game = await Game.findOne({_id: gameId})

        if(player == null){
            return new Result(404, "Player does not exist")
        }

        if(game == null){
            return new Result(404, "Game does not exist")
        }

        for(var i = 0; i < game.players.length; i++){
            if(req.params.playerId == game.players[i]){
                isDuplicate = true
                break;
            }
        }
        if(!isDuplicate){
            game.players.push(player._id)
            game.save()
            return new Result(200, "Player has been added")
        }else{
            return new Result(400, "Player already exists in game")
        }
    }

}
module.exports = new GameController();
