const Result = require("../Helper/Result");

let Playfield = require('../MongoDB/playfield');
let Game = require('../MongoDB/game');

class PlayfieldController{
    async getPlayfieldByGameId(game_id){
        let query = { _id: game_id };
        let game = await Game.findOne(query);
        let playfield = await Playfield.findOne({_id: game.playfield})
        return playfield;
    }

    async editPlayfield(game_id, body){
        let game = await Game.findOne({_id: game_id});
       // let playfield = game.playfield;
//        await playfield.updateOne(body);
        return new Result(200, "Playfield has been updated");
    }

}
module.exports = new PlayfieldController();
