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