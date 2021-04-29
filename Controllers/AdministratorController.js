const Result = require("../Helper/Result");
const jwt = require('jsonwebtoken');
const secret = require("../Authorization/secret");
const randomstring = require("randomstring");

let Administrator = require('../MongoDB/administrator');
let Game = require('../MongoDB/game');

class AdministratorController{
    async authenticate(name, code){
        let query = { name: name, code: code };
        let administrator = await Administrator.findOne(query);

        if(administrator != null){
            let query = { administrator: administrator._id };
            let game = await Game.findOne(query);
            if(game == null){
                return new Result(404, 'Game doesn\'t exist (anymore).');
            }
            let payload = {game_id: game._id, role: 'Administrator'};
            let token = { token: jwt.sign(payload, secret)};
            return new Result(200, token);
        } else {
            return new Result(404, 'Combination name and code does not exist.');
        }
    }

    async addAdministrator(body, game_id){
        let code = randomstring.generate(7).toUpperCase();

        let administrator = {};
        administrator.code = code;
        administrator.name = body.name;

        let administratorModel = new Administrator(administrator);
        await administratorModel.save();

        let query = { _id: game_id };
        let update_body = { administrator: administratorModel._id};
        await Game.updateOne(query, update_body)
    }

}
module.exports = new AdministratorController();
