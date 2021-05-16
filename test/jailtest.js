require('../test/testSetup');
var expect = require('chai').expect;

let Game = require('../MongoDB/game');
   
describe('test2', async function(){
    it('pass', (done) => {
        let x=1
        expect(x).to.equal(1);
        done();
    });
});
describe('test3', async function(){
    let result = await Game.find();
    it('check for game', (done) => {
        expect(result.length).to.equal(1);
        done();
    });
});     
 

