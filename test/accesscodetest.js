var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var accesscode = require('../routes/accesscode');
app.use('/', accesscode);


describe('Testing accesscode route', function(){
	describe('get', function(){
		it('should return accesscodes ', function(done){
			request(server)
				.get('/accesscode')
				.expect(200)
				.end(function(err, res){
					if(err){ return done(err); }
					expect(res.body).to.have.members;
					let array = res.body;
					array.forEach(element => {
						expect(element).to.have.property('code');
						expect(element).to.have.property('role');
						expect(element).to.have.property('assignedTo');
					});
					done();
				});
		});
	});
	describe('post accesscode', () => {
		it('it should add a new accesscode', (done) => {
			request(server)
			.post('/accesscode')
			.send({amount: 5, role: "Boef"})
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(200);
				done();
			});
		});
	});
    describe('assign valid accesscode to valid player', () => {
		it('it should assign a accesscode to a player', (done) => {
			request(server)
			.put('/accesscode/assign/60759484b9953527744d1f2c')
			.send({playerId: "606c2cdc5bfb7ad424368bf2"})
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(200);
				done();
			});
		});
	});
    describe('assign valid accesscode to invalid player', () => {
		it('no accesscode is assigned', (done) => {
			request(server)
			.put('/accesscode/assign/60759484b9953527744d1f2c')
			.send({playerId: "skkl"})
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(401);
				done();
			});
		});
	});
    describe('assign invalid accesscode to valid player', () => {
		it('no accesscode is assigned', (done) => {
			request(server)
			.put('/accesscode/assign/lkaesjl2k342')
			.send({playerId: "606c2cdc5bfb7ad424368bf2"})
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(401);
				done();
			});
		});
	});
	describe('check code and player name combination', () => {
		it('valid login', (done) => {
			request(server)
			.post('/accesscode/check/ZtTV2BD/Djerrie')
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(200);
				done();
			});
		});
	});
	describe('check code and player name combination', () => {
		it('invalid login', (done) => {
			request(server)
			.post('/accesscode/check/E7TrUfv/Boo')
			.expect(401)
			.end(function(err, res){
				res.statusCode.should.equal(404);
				done();
			});
		});
	});


});