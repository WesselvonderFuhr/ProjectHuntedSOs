const mongoose = require('mongoose');

console.log('Initializing jail schema');

const jailSchema = new mongoose.Schema({
    location: {
		latitude: { type: Number },
		longitude: { type: Number }
	}
});

module.exports = Jail = mongoose.model('Jail', jailSchema);
