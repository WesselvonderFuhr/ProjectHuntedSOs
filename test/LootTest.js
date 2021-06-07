require('../test/testSetup');
var expect = require('chai').expect;
const LootController = require('../Controllers/LootController');
let Game = require('../MongoDB/game');
let Player = require('../MongoDB/player');

//getAllLoot
describe('loot get all loot', async function(){
    it('get loot 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await LootController.getAllLoot(game_id);
        expect(result.responseCode).to.equal(200);
    });
});
//getAllLootByPlayer
describe('loot get loot by player', async function(){
    it('get loot 200', async ()  => {
        let player = new Player({name: "piet", role: "Boef"})
        await player.save();
        let result = await LootController.getAllLootByPlayer(player._id);
        expect(result.responseCode).to.equal(200);
    });
});
//addLoot
describe('loot add loot', async function(){
    it('add loot 200', async ()  => {
        let body = {
            "name":"loot"
        };
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await LootController.addLoot(game_id,body);
        expect(result.responseCode).to.equal(200);
    });
});
describe('loot add loot', async function(){
    it('add loot 404', async ()  => {
        let body = {
            "name":"loot"
        };
        let game_id = "60a174ab5ddcf556b0250f6b";
        let result = await LootController.addLoot(game_id,body);
        expect(result.responseCode).to.equal(404);
    });
});
describe('loot add loot', async function(){
    it('add loot 400', async ()  => {
        let body = {
            "name":"loot"
        };
        let game_id = "60a174ab5ddcf556b0250f446b";
        let result = await LootController.addLoot(game_id,body);
        expect(result.responseCode).to.equal(400);
    });
});
//Edit loot
describe('loot edit loot', async function(){
    it('edit loot 200', async ()  => {
        let body = {
            "name":"loot"
        };
        let loot = await Loot.findOne();
        let loot_id = loot.id;        
        let result = await LootController.editLoot(loot_id,body);
        expect(result.responseCode).to.equal(200);
    });
});
describe('loot edit loot', async function(){
    it('edit loot 404', async ()  => {
        let body = {
            "name":"loot"
        };
        let loot_id = "60a174ab8ddcf556b0250f6b";
        let result = await LootController.editLoot(loot_id,body);
        expect(result.responseCode).to.equal(404);
    });
});
describe('loot edit loot', async function(){
    it('edit loot 400', async ()  => {
        let body = {
            "name":"loot"
        };
        let loot_id = "60a174a33b8ddcf556b0250f6b";
        let result = await LootController.editLoot(loot_id,body);
        expect(result.responseCode).to.equal(400);
    });
});
//delete Loot
describe('loot delete loot', async function(){
    it('delete loot 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let loot = await Loot.findOne();
        let loot_id = loot.id;        
        let result = await LootController.deleteLoot(game_id,loot_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('loot delete loot', async function(){
    it('delete loot 404 game', async ()  => {
        let game_id = "60a174ab8ddcf556b0250f6b";
        let loot = await Loot.findOne();
        let loot_id = loot.id;        
        let result = await LootController.deleteLoot(game_id,loot_id);
        expect(result.responseCode).to.equal(404);
    });
});
describe('loot delete loot', async function(){
    it('delete loot 404 loot', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let loot_id = "60a174ab8ddcf556b0250f6b";        
        let result = await LootController.deleteLoot(game_id,loot_id);
        expect(result.responseCode).to.equal(404);
    });
});
describe('loot delete loot', async function(){
    it('delete loot 400 ', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let loot_id = "60a174wwab8ddcf556b0250f6b";        
        let result = await LootController.deleteLoot(game_id,loot_id);
        expect(result.responseCode).to.equal(400);
    });
});


