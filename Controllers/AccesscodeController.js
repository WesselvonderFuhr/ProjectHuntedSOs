const Result = require("../Helper/Result");
var randomstring = require("randomstring");
const jwt = require("jsonwebtoken");
const secret = require("../Authorization/secret");

let PlayerController = require('./PlayerController');
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');

class AccesscodeController{
    async getAllAccesscodes(game_id){
        let query = { _id: game_id };
        let game = await Game.findOne(query).populate('accesscodes')
        return new Result(200, game.accesscodes);
    }

    async getAccesscodeByID(id){
        let query = { _id: id };
        return await Accesscode.findOne(query);
    }

    async addAccesscodes(body, game_id){
        let game = await Game.findOne({_id: game_id});
        var amount = body.amount
        var codes = []


        if(body.role !== "Agent" && body.role !== "Boef"){
            return new Result(400, "Role must either be Agent or Boef");
        }

        if(amount > 0){
            for(var i = 0; i < amount; i++){
                var code = randomstring.generate(7).toUpperCase()
                codes.push(code)
                
                let accesscode = {};
                accesscode.code = code;
                accesscode.role = body.role;
                accesscode.assignedTo = null;
        
                let accesscodeModel = new Accesscode(accesscode);
                await accesscodeModel.save();               
                game.accesscodes.push(accesscodeModel);
                

            }
            game.save();

            return new Result(200, codes)
        }else{
            return new Result(400, "Not a valid amount input, choose a number bigger than 0")
        }
    }

    async deleteCode(id, role, game_id){
        //TODO IMPLEMENT GAME_ID

        if(role == null){
            var code = await this.getAccesscodeByID(id)
            if(code != null){
                await Accesscode.deleteOne({_id: id})
                return new Result(200, 'Code deleted')
            }else{
                return new Result(404, 'Code does not exist')
            }
        }else{
            await Accesscode.deleteMany({role: role})
            return new Result(200, 'All ' + role + ' codes deleted')
        }
    }
	
    async authenticate(name, code) {
        let query = { code: code };
        let accesscode = await Accesscode.findOne(query);

        if(accesscode == null) {
            return new Result(401, 'Code is invalid.');
        }

        let player = null;
        if(accesscode.assignedTo != null) {
            player = await Player.findOne({ _id: accesscode.assignedTo });
            if(player == null){
                return new Result(404, 'Player does not exist');
            } else {
                if(name !== player.name) {
                    return new Result(401, 'Combination name and code is invalid.');
                }
            }
        } else {
			player = await PlayerController.addPlayer(code, name);
        }

        if(player != null) {
            query = { players: player._id };
            let game = await Game.findOne(query);
            if(game == null) {
                return new Result(404, 'Game does not exist (anymore).');
            }
            let payload = {game_id: game._id, player_id: player._id, role: player.role};

            let response = { token: jwt.sign(payload, secret), role: player.role };
            return new Result(200, response);
        } else {
            return new Result(404, 'Player does not exist.');
        }
    }
}

module.exports = new AccesscodeController();
