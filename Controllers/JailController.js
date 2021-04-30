const Result = require("../Helper/Result");

let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');

class JailController{
    async getJailByGameId(game_id){
        let query = { _id: game_id };
        let game = await Game.findOne(query);
        let jail = await Jail.findOne({_id: game.jail})
        return jail
    }

    async editJail(id, body){
        let query = { _id: id };
        let new_body = {
            location:
                {
                    latitude: body.location.latitude,
                    longitude: body.location.longitude
                }
        }
        try{
            let jail = await Jail.findOne(query);
            if(jail != null){
                await Jail.updateOne(query, new_body);
                return new Result(200, "Jail has been updated");
            } else {
                try {
                    jail = new Jail(new_body);
                    await jail.save();
                    return new Result(200, "Jail has been added");
                }
                catch (e){
                    return new Result(400, e.message);
                }
            }
        }
        catch{
            return null;
        }
        
    }

}
module.exports = new JailController();
