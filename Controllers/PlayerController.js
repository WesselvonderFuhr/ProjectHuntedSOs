let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Player = mongoose.model('Player');

class PlayerController{
    async getAllPlayers(){
        return await Player.find().populate('loot');
    }

    async getPlayerByID(id){
        let query = { _id: id };
        return await Player.findOne(query).populate('loot');
    }

    async addPlayer(body){
        let player = new Player(body);
        try {
            await player.save();
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

    async deletePlayer(id){
        let query = { _id: id };
        try{
            let player = await this.getPlayerByID(id);
            if(player != null){
                await Player.deleteOne(query);
                return new Result(200, player.name + " has been deleted");
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
