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
        let code = await Game.findOne(query).populate('accesscodes')
        return code.accesscodes
    }

    async getAccesscodeByID(id){
        let query = { _id: id };
        return await Accesscode.findOne(query);
    }

    async addAccesscodes(body, game_id){
        let game = await Game.findOne({_id: game_id});
        var amount = body.amount
        var codes = []
    
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
            return new Result(404, "Not a valid amount input, choose a number bigger than 0")
        }
    }

    //Is deze method nodig?
    async checkAssigned(code){
        var accesscodeQuery = {code: code}

        var accessCode = await Accesscode.findOne(accesscodeQuery)
        if(accessCode == null){
            return new Result(404, "Accesscode does not exist");
        }
        
        if(accessCode.assignedTo != null) {
            return new Result(401, "Accesscode already assigned");
        } else {
            return new Result(200, "Accesscode not assigned");
        }
    }

    async checkCodeNameCombination(code, username){
        var accesscodeQuery = {code: code}
        var accessCode = await Accesscode.findOne(accesscodeQuery)

        if(accessCode.assignedTo != null) {
            var player = await Player.findOne({ _id: accessCode.assignedTo })
                if(player == null){
                        return new Result(404, 'Player does not exist')
                }else{
                    if(username == player.name) {
                        return new Result(200, accessCode)
                    } else {
                        return new Result(400, 'Wrong player and code combination')
                    }
                }
        } else {
            return new Result(200, accesscode)
        }
    }

    async assignCode(playerId, codeId){
        var playerQuery = {_id: playerId}
        var accesscodeQuery = {_id: codeId}
        var code = await Accesscode.findOne(accesscodeQuery)
        var player = await Player.findOne(playerQuery)

        if(code == null){
            return new Result(404, 'Code does not exist')
        }

        if(player == null){
            return new Result(404, 'Player does not exist')
        }

        if (code.assignedTo != null){
            return new Result(404, 'Accesscode is already assigned')
        }else{
            await Accesscode.updateOne(accesscodeQuery, {assignedTo: playerId})
            return new Result(200, "Accesscode has been updated")
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
			player = PlayerController.addPlayer(code, name);
        }

        if(player != null) {
            query = { players: player._id };
            let game = await Game.findOne(query);
            if(game == null) {
                return new Result(404, 'Game does not exist (anymore).');
            }
            let payload = {game_id: game._id, player_id: player._id, role: player.role};
            let token = { token: jwt.sign(payload, secret) };
            return new Result(200, token);
        } else {
            return new Result(404, 'Player does not exist.');
        }
    }
}

module.exports = new AccesscodeController();
