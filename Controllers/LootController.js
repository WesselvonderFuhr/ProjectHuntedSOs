let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Loot = mongoose.model('Loot');

class LootController{
    async getAllLoot(){
        return await Loot.find();
    }

    async getLootByID(id){
        let query = { _id: id };
        return await Loot.findOne(query);
    }

    async addLoot(body){
        let loot = new Loot(body);
        try {
            await loot.save();
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

    async deleteLoot(id){
        let query = { _id: id };
        try{
            let loot = await this.getLootByID(id);
            if(loot != null){
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
