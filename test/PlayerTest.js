require('../test/testSetup');
var expect = require('chai').expect;
const PlayerController = require('../Controllers/PlayerController');
const GameController = require('../Controllers/GameController');
const PlayfieldController = require('../Controllers/PlayfieldController');
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
//getArrestablePlayers
describe('player get arrestablePlayers', async function(){
    it('get arrestablePlayers 200', async ()  => {
        let players = await Player.find();
        let player_id = players[0].id;
        let game = await Game.findOne();
        let game_id = game.id;
        await GameController.addPlayerToGame(game_id,players[0].id);
        await GameController.addPlayerToGame(game_id,players[1].id);
        let result = await PlayerController.getArrestablePlayers(player_id,game_id,100);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player get arrestablePlayers', async function(){
    it('get arrestablePlayers 400 distance', async ()  => {
        let players = await Player.find();
        let player_id = players[0].id;
        let game = await Game.findOne();
        let game_id = game.id;
        await GameController.addPlayerToGame(game_id,players[0].id);
        await GameController.addPlayerToGame(game_id,players[1].id);
        let result = await PlayerController.getArrestablePlayers(player_id,game_id,"twaalf");
        expect(result.responseCode).to.equal(400);
    });
});
describe('player get arrestablePlayers', async function(){
    it('get arrestablePlayers 400 playerlocation', async ()  => {
        let players = await Player.find();
        let player_id = players[0].id;
        let game = await Game.findOne();
        let game_id = game.id;
        players[0].location = null;
        await players[0].save();
        await GameController.addPlayerToGame(game_id,players[0].id);
        await GameController.addPlayerToGame(game_id,players[1].id);
        let result = await PlayerController.getArrestablePlayers(player_id,game_id,100);
        expect(result.responseCode).to.equal(400);
    });
});
describe('player get arrestablePlayers', async function(){
    it('get arrestablePlayers 404 player', async ()  => {
        let player_id = "60a174ab5ddcf556b0250f6b";
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.getArrestablePlayers(player_id,game_id,100);
        expect(result.responseCode).to.equal(404);
    });
});
//CheckPlayersOutOfBounds
describe('player CheckPlayersOutOfBounds ', async function(){
    it('get CheckPlayersOutOfBounds 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.CheckPlayersOutOfBounds(game_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player CheckPlayersOutOfBounds ', async function(){
    it('get CheckPlayersOutOfBounds 400', async ()  => {
        let game_id = "60a174ab5ddcf556b0250f6b";
        let result = await PlayerController.CheckPlayersOutOfBounds(game_id);
        expect(result.responseCode).to.equal(400);
    });
});
//CheckPlayerOutOfBounds
describe('player CheckPlayerOutOfBounds ', async function(){
    it('get CheckPlayerOutOfBounds  200', async ()  => {
        let player = await Player.findOne();
        player.location = {
            "latitude": 0,
            "longitude": 0,    
        }
        await player.save();
        let player_id = player.id;
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.CheckPlayerOutOfBounds(player_id,game_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('player CheckPlayerOutOfBounds error', async function(){
    it('get CheckPlayerOutOfBounds 400', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let game_id = "60a174ab5ddcf556b0250f6b";
        let result = await PlayerController.CheckPlayerOutOfBounds(player_id,game_id);
        expect(result.responseCode).to.equal(400);
    });
});
describe('player CheckPlayersOutOfBounds false', async function(){
    it('get CheckPlayersOutOfBounds false', async ()  => {
        let player = await Player.findOne();
        player.location = {
            "latitude": 51.689130,
            "longitude": 5.285638,
        }
        await player.save();
        let player_id = player.id;
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.CheckPlayerOutOfBounds(player_id,game_id);
        expect(result.message).to.equal(false);
    });
});

describe('player getArrestedThieves true', async function(){
    it('get getArrestedThieves true', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayerController.getArrestedThieves(game_id);
        expect(result.responseCode).to.equal(200);
    });
});