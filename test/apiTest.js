let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index')

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('/player/arrest/:thiefId', () => {
    it("It should put player at arrested", (done) => {
        const playerId = 1;
        const player = {
            arrested: true,
            loot: []
        }
        chai.request(server)
        .post("/player/arrest/" + playerId)
        .send(player)
        .end((err, response) => {
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('arrested').eq(true)
            done()

        })
    })
})