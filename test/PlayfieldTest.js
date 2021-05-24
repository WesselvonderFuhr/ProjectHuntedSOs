require('../test/testSetup');
var expect = require('chai').expect;
const PlayfieldController = require('../Controllers/PlayfieldController');
let Game = require('../MongoDB/game');
let Player = require('../MongoDB/player');

describe('game get playfield ', async function(){
    it('get playfield 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await PlayfieldController.getPlayfieldByGameId(game_id);
        expect(result.responseCode).to.equal(200);
    });
});

describe('game put playfield ', async function(){
    it('put playfield 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let body = {
            "playfield": [
                [
                    [
                        {
                            "latitude": 51.689779,
                            "longitude": 5.283577
                        },
                        {
                            "latitude": 51.688961,
                            "longitude": 5.283276
                        },
                        {
                            "latitude": 51.688591,
                            "longitude": 5.286200
                        },
                        {
                            "latitude": 51.689586,
                            "longitude": 5.286587
                        }
                    ]
                ]
            ]
        }
        let result = await PlayfieldController.editPlayfield(game_id, body)
        expect(result.responseCode).to.equal(200);
    });
});
