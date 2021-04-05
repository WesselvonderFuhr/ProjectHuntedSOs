var request = require('supertest')
var expect = require('chai').expect;
var should = require('chai').should();

var app = require('express')();
var jail = require('../routes/jail');
app.use('/', jail);

function makeRequest(route, statusCode, done){
	request('http://localhost:3000')
		.get(route)
		.expect(statusCode)
		.end(function(err, res){
			if(err){ return done(err); }

			done(null, res);
		});
};

describe('Testing calendar route', function(){
	describe('without params', function(){
		it('should return jails ', function(done){
			makeRequest('/jail', 200, function(err, res){
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
			var newLocation = {
				location:
				{
					latitude: 300,
					longitude: 500
				}
			}
			let jail = new Jail({newLocation})

			jail.save((err, jail) => {
				  chai.request(server)
				  .put('/jail')
				  .send({location:{latitude: 300,longitude:500}})
				  .end((err, res) => {
						res.should.have.status(200);
						res.body.should.have.property('message').eql('Update gelukt');
					done();
				  });
			});
		});
	});
});