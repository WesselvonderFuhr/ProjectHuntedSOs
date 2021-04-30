const Result = require("../Helper/Result");
var randomstring = require("randomstring");
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');

class AccesscodeController{
    async getAllAccesscodes(game_id){
        let query = { _id: game_id };
        return await Game.findOne(query).populate('accesscodes').accesscodes;
    }

    async getAccesscodeByID(id){
        let query = { _id: id };
        return await Accesscode.findOne(query);
    }

    async addAccesscodes(body){
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
                accesscodeModel.save();
            }

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

    async deleteCode(id, role){
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
            return new Result(200, 'all ' + role + ' codes deleted')
        }
    }
}
module.exports = new AccesscodeController();
