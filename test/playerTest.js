var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var player = require('../routes/player');
app.use('/', player);

describe('Testing player route', function(){
	describe('Player does not exist', function(){
		it('should return 404', function(done){
			request(server)
				.get('/player/698542893745598')
				.expect(404)
				.end(function(err, res){
					if(err){ return done(err); }
                    res.statusCode.should.equal(404);
					done();
				});
		});
	});

    describe('Player does exist', function(){
		it('Should return 200', function(done){
			request(server)
				.get('/player/605c8fc8d96441448cac668b')
				.expect(200)
				.end(function(err, res){
					if(err){ return done(err); }
                    res.statusCode.should.equal(200);
					done();
				});
		});
	});


});