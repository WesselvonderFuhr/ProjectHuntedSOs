const Result = require("../Helper/Result");

let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');

class GameController{
    async getAllGames(){
        return await Game.find()
    }

    async getGameById(game_id){
        let query = { _id: game_id };
        return await Game.findOne(query);
    }

    async addGame(){
        let game = new Game();
        game.jail = null
        await game.save()

        return new Result(200, "Game has been added");
    }

    async editPlayfield(body){
        var game = Game.findOneAndUpdate({}, body)
        return new Result(200, "Playfield has been updated")
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
