var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var player = require('../routes/player');
app.use('/', player);


describe('Testing player route', function(){
    describe('Testing arrestableThieves route, invalid player id', function(){
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
    describe('Testing player route', function(){
        describe('stolen invalid player', function(){
            it('should return 404 ', function(done){
                request(server)
                    .post('/player/jaap/stolen/605b5ec6eef6ac0f588fde00')
                    .expect(404)
                    .end(function(err, res){
                        if(err){ return done(err); }
                        res.statusCode.should.equal(404);
                        done();
                    });
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

    describe('stolen invalid loot', function(){
		it('should return 404 ', function(done){
			request(server)
				.post('/player/605c8faed96441448cac6688/stolen/invalid')
				.expect(404)
				.end(function(err, res){
					if(err){ return done(err); }
                    res.statusCode.should.equal(404);
					done();
				});
		});
	});
    describe('stolen double loot', function(){
		it('should return 400 ', function(done){
			request(server)
				.post('/player/605c8faed96441448cac6688/stolen/605b5ec6eef6ac0f588fde00')
				.expect(400)
				.end(function(err, res){
					if(err){ return done(err); }
                    res.statusCode.should.equal(400);
					done();
				});
		});
	});
    describe('stolen valid loot', function(){
		it('should return 200 ', function(done){
			request(server)
				.post('/player/605c8faed96441448cac6688/stolen/605b6513d8fade37e4652518')
				.expect(200)
				.end(function(err, res){
					if(err){ return done(err); }
                    res.statusCode.should.equal(200);
					done();
				});
		});

	});
});