require('../test/testSetup');
var expect = require('chai').expect;
const JailController = require('../Controllers/JailController');

//getJailByGameId
describe('jail get jail by game', async function(){
    it('get jail 200', async ()  => {
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await JailController.getJailByGameId(game_id);
        expect(result.responseCode).to.equal(200);
    });
});
//editJail
describe('jail edit jail', async function(){
    it('edit jail 200', async ()  => {
        let body = {
            "location": {
                "latitude": "12",
                "longitude": "12"
            }
        };
        let game = await Game.findOne();
        let game_id = game.id;
        let result = await JailController.editJail(game_id,body);
        expect(result.responseCode).to.equal(200);
    });
});