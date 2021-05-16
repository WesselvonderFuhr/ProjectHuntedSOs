require('../test/testSetup');
var expect = require('chai').expect;
const GameController = require('../Controllers/GameController');
let Game = require('../MongoDB/game');
let Player = require('../MongoDB/player');

//getAllGames
describe('game get games', async function(){
    it('get games 200', async ()  => {
        let result = await GameController.getAllGames();
        expect(result.responseCode).to.equal(200);
    });
});
//getGameByID
describe('game get game by id ', async function(){
    it('get game 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await GameController.getGameById(game_id);
        expect(result.responseCode).to.equal(200);
    });
});
//addGame
describe('game add game', async function(){
    it('add game 200',  async () => {
        let body = {
            "name": "Karel"
        }
        let result = await GameController.addGame(body);
        expect(result.responseCode).to.equal(200);
    });
});
//addPlayerToGame
describe('game add player ', async function(){
    it('add player 200', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await GameController.addPlayerToGame(game_id,player_id);
        expect(result.responseCode).to.equal(200);
    });
});
describe('game add player ', async function(){
    it('add player 404 player', async ()  => {
        let player_id = "60a174ab5ddcf556b0250f6b";
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await GameController.addPlayerToGame(game_id,player_id);
        expect(result.responseCode).to.equal(404);
    });
});
describe('game add player ', async function(){
    it('add player 404 game', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let game_id = "60a174ab5ddcf556b0250f6b";
        let result = await GameController.addPlayerToGame(game_id,player_id);
        expect(result.responseCode).to.equal(404);
    });
});
describe('game add player ', async function(){
    it('add player 400 player', async ()  => {
        let player = await Player.findOne();
        let player_id = player.id;
        let game = await Game.findOne();
        let game_id = game.id;
        await GameController.addPlayerToGame(game_id,player_id);
        let result = await GameController.addPlayerToGame(game_id,player_id);
        expect(result.responseCode).to.equal(400);
    });
});
//setGameTime
describe('game set time ', async function(){
    it('set time 200', async ()  => {
        let body = {
            "start_time": "2021-05-04T12:04:59",
            "end_time": "2021-05-05T12:04:59"
        }
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await GameController.setgameTime(game_id,body);
        expect(result.responseCode).to.equal(200);
    });
});

