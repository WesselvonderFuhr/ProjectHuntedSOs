require('../test/testSetup');
var expect = require('chai').expect;
const LootController = require('../Controllers/LootController');
let Game = require('../MongoDB/game');
let Player = require('../MongoDB/player');

//getAllLootByPlayer
describe('loot get loot by player', async function(){
    it('get loot 200', async ()  => {
        let player = new Player({name: "piet", role: "Boef"})
        await player.save();
        let result = await LootController.getAllLootByPlayer(player._id);
        expect(result.responseCode).to.equal(200);
    });
});

//GetStolenLootFromGame
describe('loot get stolen loot by game', async function(){
    it('get loot 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await LootController.GetStolenLootFromGame(game_id);
        expect(result.responseCode).to.equal(200);
    });
});