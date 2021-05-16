const mongoose = require('mongoose');
let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Playfield = require('../MongoDB/playfield');
let Loot = require('../MongoDB/loot');
let Administrator = require('../MongoDB/administrator');

before(async () => {  
    //connect
    let LocalURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
    let URI = "mongodb+srv://userTest:Tpy7KYPhMdzz5fSQ@cluster0.lpisu.mongodb.net/test";
    await mongoose.connect(LocalURI);
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
    //fill db
    //game
    let game = new Game();
    await game.save();
    game = new Game();
    await game.save();
    //player
    let player = {};
    player.name = "jan";
    player.role = "agent";
    let playerModel = new Player(player);
    await playerModel.save();
  }






