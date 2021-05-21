const mongoose = require('mongoose');
let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Playfield = require('../MongoDB/playfield');
let Loot = require('../MongoDB/loot');
let Administrator = require('../MongoDB/administrator');
const { setgameTime } = require('../Controllers/GameController');
const jail = require('../MongoDB/jail');
const game = require('../MongoDB/game');

before(async () => {  
    //connect
    let LocalURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    let URI = "mongodb+srv://userTest:Tpy7KYPhMdzz5fSQ@cluster0.lpisu.mongodb.net/test";
    await mongoose.connect(URI);
    //fill db
    await FillDB();
});

after(async () => {  
  //clear db
  await Loot.deleteMany();
  await Jail.deleteMany();
  await Game.deleteMany();
  await Accesscode.deleteMany();
  await Player.deleteMany();
  await Playfield.deleteMany();
  await Administrator.deleteMany();
  await mongoose.connection.close();
});

async function FillDB(){
  //jail
  let jailModel = new Jail();
  jailModel.location = {
    "latitude": 51,
    "longitude": 51,    
  };
  await jailModel.save();
  //loot
  let lootModel = new Loot();
  lootModel.name = "ketting";
  await lootModel.save();
  //administrator
  let administratorModel = new Administrator();
  administratorModel.name = "bert";
  administratorModel.code = "CODE1";
  await administratorModel.save();
  //accesscode
  let AccesscodeModel = new Accesscode();
  AccesscodeModel.code = "CODE2";
  AccesscodeModel.role = "boef";
  await AccesscodeModel.save();
  //player
  let player = {};
  player.name = "jan";
  player.role = "agent";
  player.location = {
        "latitude": 0,
        "longitude": 0,      
  }
  let playerModel = new Player(player);
  await playerModel.save();
  player = {};
  player.name = "peter";
  player.role = "boef";
  player.location = {
        "latitude": 0,
        "longitude": 0,    
  }

  let playerModel2 = new Player(player);
  await playerModel2.save();
  //playfield
  let playfield = {
    "playfield" :  [   {
                        "location" : {
                            "latitude" : 400,
                            "longitude" : 500
                        }
                    },
                    {
                        "location" : {
                            "latitude" : 400,
                            "longitude" : 600
                        }
                    },
                    {
                        "location" : {
                            "latitude" : 500,
                            "longitude" : 600
                        }
                    },
                    {
                        "location" : {
                            "latitude" : 500,
                            "longitude" : 500
                        }
                    }     
             ]
}
  let PlayfieldModel = new Playfield(playfield);
  await PlayfieldModel.save();
  //game
  let gameModel = new Game();
  gameModel.jail = jailModel;
  gameModel.administrator = administratorModel;
  gameModel.loot = new Array();
  gameModel.loot.push(lootModel);
  gameModel.Accesscodes = new Array();
  gameModel.Accesscodes.push(AccesscodeModel);
  gameModel.players = new Array();
  gameModel.players.push(playerModel2);
  gameModel.playfield = PlayfieldModel;
  gameModel.start_time = new Date();
  gameModel.end_time = new Date();
  await gameModel.save();
}






