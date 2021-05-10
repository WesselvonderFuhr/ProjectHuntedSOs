var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var game = require('../routes/game');
app.use('/', game);


describe('Testing game route', function(){
	describe('get', function(){
		it('should return games ', function(done){
			request(server)
				.get('/game')
				.expect(200)
                .end(function(err, res){
                    res.statusCode.should.equal(200);
                    done();
                });
        });
    });
});
describe('put playfield', () => {
    it('it should put a playfield', (done) => {
        request(server)
        .put('/game/playfield')
        .send({
            "playfield" :  [   {
                                "location" : {
                                    "latitude" : 400,
                                    "longitude" : 600
                                }
                            },
                            {
                                "location" : {
                                    "latitude" : 400,
                                    "longitude" : 600
                                }
                            },
                            {
                                "location" : {
                                    "latitude" : 400,
                                    "longitude" : 600
                                }
                            },
                            {
                                "location" : {
                                    "latitude" : 400,
                                    "longitude" : 600
                                }
                            }     
                        ]
        })
        .expect(200)
        .end(function(err, res){
            res.statusCode.should.equal(200);
            done();
        });
    });
});

describe('put time', () => {
    it('it should put a time', (done) => {
        request(server)
        .put('/game/time')
        .send({
            "end_time" : new Date()
        })
        .expect(200)
        .end(function(err, res){
            res.statusCode.should.equal(200);
            done();
        });
    });
});
