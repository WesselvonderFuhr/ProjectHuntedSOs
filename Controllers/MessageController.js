const Result = require("../Helper/Result");

let Message = require('../MongoDB/message');
let Game = require('../MongoDB/game');

class MessageController {

    async getAllMessages(game_id){
        let query = { _id: game_id };
        var s = await Game.findOne(query).populate('messages');
        return new Result(200, s.messages);
    }

    async addMessage(game_id, body){
        let message = new Message();
        try {
            let query = { _id: game_id };
            let game = await Game.findOne(query);
            if(game == null){
                return new Result(404, "Game does not exist");
            }
            message.message = body.message;
            var s = new Date(Date.now());
            message.date_time = new Date(s.getTime()-s.getTimezoneOffset()*60*1000);

            message.game_id = game._id;

            game.messages.push(message._id);
            await message.save();
            await game.save();
            return new Result(200, message.message);
        }
        catch (e){
            return new Result(400, e.message);
        }
    }
}

module.exports = new MessageController();
