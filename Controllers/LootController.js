const Result = require("../Helper/Result");

let Loot = require('../MongoDB/loot');
let Game = require('../MongoDB/game');

class LootController{
    async getAllLoot(game_id){
        let query = { _id: game_id };
        var s = await Game.findOne(query).populate('loot');
        return new Result(200, s.loot);
    }

    async getAllLootByPlayer(player_id){
        let query = { _id: player_id };
        let s = await Player.findOne(query);

        let allLoot = []

        for(var i = 0; i < s.loot.length; i++) {
            var loot = await Loot.findOne(s[i]);
            allLoot.push(loot)
        }

        return new Result(200, allLoot)
    }

    async getLootByID(id){
        let query = { _id: id };
        return await Loot.findOne(query);
    }

    async addLoot(game_id, body){
        let loot = new Loot(body);
        try {
            let query = { _id: game_id };
            let game = await Game.findOne(query);
            if(game == null){
                return new Result(404, "Game does not exist");
            }
            game.loot.push(loot._id);
            await loot.save();
            await game.save();
            return new Result(200, loot.name + " has been added");
        }
        catch (e){
            return new Result(400, e.message);
        }
    }

    async editLoot(id, body){
        let query = { _id: id };
        try{
            let loot = await this.getLootByID(id);
            if(loot != null){
                await Loot.updateOne(query, body);
                return new Result(200, loot.name + " has been updated");
            } else {
                return new Result(404, "Loot not found");
            }
        }
        catch{
            return null;
        }
        
    }

    async deleteLoot(game_id, id){
        try{
            let loot = await this.getLootByID(id);
            if(loot != null){
                let query = { _id: game_id };
                let game = await Game.findOne(query);
                if(game == null){
                    return new Result(404, "Game does not exist");
                }

                let index = game.loot.indexOf(id);
                game.loot.splice(index, 1);
                await game.save();

                query = { _id: id };
                await Loot.deleteOne(query);
                return new Result(200, loot.name + " has been deleted");
            } else {
                return new Result(404, "Loot not found");
            }
        }
        catch{
            return null;
        }
    }


}
module.exports = new LootController();
