const Result = require("../Helper/Result");
const jwt = require("jsonwebtoken");
const secret = require("../Authorization/secret");

let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Game = require('../MongoDB/game');

class AccesscodeController{
    async authenticate(name, code) {
        let query = { code: code };
        let accesscode = await Accesscode.findOne(query);

        if(accesscode == null) {
            return new Result(401, 'Code is invalid.');
        }

        let player = null;
        if(accesscode.assignedTo != null) {
            //TODO PlayerController?
            player = await Player.findOne({ _id: accesscode.assignedTo });
            if(player == null){
                return new Result(404, 'Player does not exist');
            } else {
                if(name !== player.name) {
                    return new Result(401, 'Combination name and code is invalid.');
                }
            }
        } else {
            //TODO PlayerController.addPlayer(codeID,username);

            /*let player_body = {};
            player_body.name = name;
            player_body.role = accesscode.role;
            player_body.arrested = false;
            player_body.location = { latitude: null, longitude: null };

            player = new Player(player_body);
            await player.save();

            ERROR query = { accesscodes: accesscode._id };
            ERROR let game = await Game.findOne(query);
            ERROR await Game.updateOne(query, {})
            await Accesscode.updateOne(query, {assignedTo: player._id});*/
        }

        if(player != null) {
            query = { players: player._id };
            let game = await Game.findOne(query);
            if(game == null) {
                return new Result(404, 'Game does not exist (anymore).');
            }
            let payload = {game_id: game._id, player_id: player._id, role: 'Player'};
            let token = { token: jwt.sign(payload, secret) };
            return new Result(200, token);
        } else {
            return new Result(404, 'Player does not exist.');
        }
    }
}

module.exports = new AccesscodeController();
