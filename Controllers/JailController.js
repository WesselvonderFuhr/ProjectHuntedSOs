const Result = require("../Helper/Result");

let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');

class JailController{
    async getJailByGameId(game_id){
        let query = { _id: game_id };
        let game = await Game.findOne(query);
        let jail = await Jail.findOne({_id: game.jail})
        return new Result(200, jail);
    }

    async editJail(game_id, body){
        let game = await Game.findOne({_id: game_id}).populate('jail');
        let jail = game.jail;

        let new_body = {
            location:
                {
                    latitude: body.location.latitude.replace(",", "."),
                    longitude: body.location.longitude.replace(",", ".")
                }
        }
        await jail.updateOne(new_body);
        return new Result(200, "Jail has been updated");
    }

}
module.exports = new JailController();
