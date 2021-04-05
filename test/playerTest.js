var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var jail = require('../routes/jail');
app.use('/', jail);

describe('Testing arrestableThieves route', function(){
    describe('invalid player id', function(){
        it('should return 404', function(done){
            request(server)
                .get('/player/arrestableThieves/thisShouldHaveBeenAPlayerID/100')
                .expect(404)
                .end(function(err, res){
                    res.statusCode.should.equal(404);
					done();
                });
        });
    });
    describe('invalid player distance', function(){
        it('should return 400', function(done){
            request(server)
                .get('/player/arrestableThieves/606b207efbc0b7cca8a26417/feaf')
                .expect(400)
                .end(function(err, res){
                    res.statusCode.should.equal(400);
					done();
                });
        });
    });
});
describe('arrest boef', function(){
	it('should return 200 ', function(done){
		request(server)
			.put('/player/arrest/606b1ff2fbc0b7cca8a26415')
			.expect(200)
			.end(function(err, res){
				if(err){ return done(err); }
				res.statusCode.should.equal(200);
				done();
			});
	});
});