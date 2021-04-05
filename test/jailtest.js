var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();
var server = 'http://localhost:3000';
var app = require('express')();
var jail = require('../routes/jail');
app.use('/', jail);


describe('Testing jail route', function(){
	describe('get', function(){
		it('should return jails ', function(done){
			request(server)
				.get('/jail')
				.expect(200)
				.end(function(err, res){
					if(err){ return done(err); }
					expect(res.body).to.have.members;
					let array = res.body;
					array.forEach(element => {
						expect(element).to.have.property('location');
						expect(element.location).to.have.property('latitude');
						expect(element.location).to.have.property('longitude');
					});
					done();
				});
		});
	});
	describe('put jail', () => {
		it('it should add a new jail', (done) => {
			request(server)
			.put('/jail')
			.send({location:{latitude: 300,longitude:500}})
			.expect(200)
			.end(function(err, res){
				res.statusCode.should.equal(200);
				done();
			});
		});
	});

});