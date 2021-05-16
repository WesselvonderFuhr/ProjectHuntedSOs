const mongoose = require('mongoose');
let Jail = require('../MongoDB/jail');
let Game = require('../MongoDB/game');
let Accesscode = require('../MongoDB/accesscode');
let Player = require('../MongoDB/player');
let Playfield = require('../MongoDB/playfield');
let Loot = require('../MongoDB/loot');
let Administrator = require('../MongoDB/administrator');
let hasInitialized = false;

before(async () => {  
    console.log(hasInitialized);
    if(!hasInitialized){
        //connect
        await mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false");
        //clear db
        await Loot.deleteMany();
        await Jail.deleteMany();
        await Game.deleteMany();
        await Accesscode.deleteMany();
        await Player.deleteMany();
        await Playfield.deleteMany();
        await Administrator.deleteMany();
        //fill db
        let game = new Game();
        await game.save();
        hasInitialized = true;
        console.log(hasInitialized);
    }
  });






