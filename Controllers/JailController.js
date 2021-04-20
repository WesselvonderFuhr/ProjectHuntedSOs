let mongoose = require('mongoose');
const Result = require("../Helper/Result");

let Jail = mongoose.model('Jail');

class JailController{
    async getJailByID(id){
        let query = { _id: id };
        return await Jail.findOne(query);
    }

    async editLoot(id, body){
        let query = { _id: id };
        let new_body = {
            location:
                {
                    latitude: body.location.latitude,
                    longitude: body.location.longitude
                }
        }
        try{
            let jail = await this.getJailByID(id);
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
