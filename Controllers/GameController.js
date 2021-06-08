const Result = require("../Helper/Result");
const randomstring = require("randomstring");
const bcrypt = require('bcrypt');

let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Playfield = require('../MongoDB/playfield');
let Owner = require('../MongoDB/owner');
let Administrator = require('../MongoDB/administrator');

class GameController{

    async getAllGames(){
        return new Result(200, await Game.find());
    }

    async getGameById(game_id){
        let query = { _id: game_id };
        return new Result(200, await Game.findOne(query));
    }

    async addGame(body, password){
        if(password == null){
            return new Result(401, "Authentication needed.");
        }

        let owner = await Owner.findOne();

        if(bcrypt.compareSync(password, owner.password)) {
            let game = new Game();
            //jail
            let jail = {
                "location" : {
                    "latitude" : 0,
                    "longitude" : 0
                }
            };
            let jailModel = new Jail(jail);
            await jailModel.save();
            game.jail = jailModel;
            //admin
            let code = randomstring.generate(7).toUpperCase();
            let hash = bcrypt.hashSync(code, 8);
            let administrator = { name: body.name, code: hash };
            let administratorModel = new Administrator(administrator);
            await administratorModel.save();
            game.administrator = administratorModel;
            //playfield
            let playfield = {
                "playfield" :  [   {
                    "location" : {
                        "latitude" : 0,
                        "longitude" : 0
                    }
                }
                ]
            };
            let playfieldModel = new Playfield(playfield);
            await playfieldModel.save();
            game.playfield = playfieldModel;
            //time
            game.start_time = new Date(0);
            game.end_time = new Date(0);
            game.lootWinPercentage = 70;

            await game.save()
            return new Result(200, code);
        } else {
            return new Result(403, "Forbidden, failed to authenticate");
        }
    }


    async addPlayerToGame(gameId, playerId){
        var isDuplicate = false

        var player = await Player.findOne({_id: playerId})
        var game = await Game.findOne({_id: gameId})

        if(player == null){
            return new Result(404, "Player does not exist")
        }

        if(game == null){
            return new Result(404, "Game does not exist")
        }

        for(var i = 0; i < game.players.length; i++){
            if(playerId == game.players[i]){
                isDuplicate = true
                break;
            }
        }
        if(!isDuplicate){
            game.players.push(player._id)
            game.save()
            return new Result(200, "Player has been added")
        }else{
            return new Result(400, "Player already exists in game")
        }
    }

    async setGameTime(gameID,body){
        let game = await Game.findOne({_id: gameID})

        let end_date = new Date(body.end_time)
        body.end_time = new Date(end_date.getTime()-end_date.getTimezoneOffset()*60*1000)

        let start_date = new Date(body.start_time)
        body.start_time = new Date(start_date.getTime()-start_date.getTimezoneOffset()*60*1000)

        await game.updateOne(body);
        await game.save();
        return new Result(200, game);
    }

    async getStatus(gameID){
        let game = await Game.findOne({_id: gameID})

        let startTime = game.start_time;
        let endTime = game.end_time;

        console.log("start time: " + startTime.getFullYear())
        console.log("end time: " + endTime.getFullYear())
        console.log("null time: " + new Date(0))

        //not started
        // no startTime, no endTime
        if (!this.isValidDate(startTime) && !this.isValidDate(endTime)){
            console.log("not started")
            return new Result(200, "not started")
        }
        //running
        // yes startTime, yes endTime
        if (this.isValidDate(startTime) && this.isValidDate(endTime)){
            console.log("in progress")
            return new Result(200, "in progress")
        }

        //stopped
        // no startTime, yes endTime
        if (!this.isValidDate(startTime) && this.isValidDate(endTime)){
            console.log("stopped")
            return new Result(200, "stopped")
        }
    }

    async isSetup(gameID) {
        let game = await Game.findOne({_id: gameID});

        let jail = await Jail.findOne({_id: game.jail});
        let latitude = jail.location.latitude;                           //0 if not set
        let longitude = jail.location.longitude;                         //0 if not set

        let playField = await Playfield.findOne({_id: game.playfield});
        let playFieldCount = playField.playfield[0][0].length;           //1 if not set, otherwise >1

        let accessCodesCount = game.accesscodes.length;                  //0 if not set

        let lootCount = game.loot.length;                                //0 if not set

        let jailSet = (latitude != 0 && longitude != 0) ? true : false;
        let playFieldSet = (playFieldCount > 1) ? true : false;
        let accessCodesSet = (accessCodesCount > 0) ? true: false;
        let lootSet = (lootCount > 0) ? true : false;

        if(jailSet && playFieldSet && accessCodesSet && lootSet) {
            return new Result(200, { "status": "ready" });
        }
        return new Result(200, { "status": "not ready" });
    }

    isValidDate(date) {
        if(date.getFullYear() == "1970") {
            return false
        }
        return true
    }



    async setLootWinPercentage(gameID, body){
        let game = await Game.findOne({_id: gameID})
        await game.updateOne(body);
        await game.save();
        return new Result(200, game);
    }

}
module.exports = new GameController();
