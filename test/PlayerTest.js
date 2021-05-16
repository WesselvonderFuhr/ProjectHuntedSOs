require('../test/testSetup');
const PlayerController = require('../Controllers/PlayerController');
var expect = require('chai').expect;
let Game = require('../MongoDB/game');
let Player = require('../MongoDB/player');

//getAllPlayers
describe('player get players', async function(){
    it('get players 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.getAllPlayers(game_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player get players', async function(){
    it('get players 404', async ()  => {
        let game_id;
        let games = await Game.find();
        games.forEach(g => {
            if(g.players.length == 0){
                game_id = g.id;
            }
        });        
        let result = await PlayerController.getAllPlayers(game_id);
        expect(result.responseCode).to.equal(404);
    });
});
//getPlayerByID
describe('player get player by id', async function(){
    it('get player 200', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let result = await PlayerController.getPlayerByID(player_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player get player by id', async function(){
    it('get player 404', async ()  => {
        let player_id = "60a174ab5ddcf556b0250f6b";
        let result = await PlayerController.getPlayerByID(player_id);
        expect(result.responseCode).to.equal(404);
    });
});
//CheckPlayerRole
describe('player get role', async function(){
    it('get player role 200', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let result = await PlayerController.CheckPlayerRole(player_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player get role', async function(){
    it('get player role 404', async ()  => {
        let player_id = "60a174ab5ddcf556b0250f6b";
        let result = await PlayerController.CheckPlayerRole(player_id);
        expect(result.responseCode).to.equal(404);
    });
});