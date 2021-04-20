const mongoose = require('mongoose');

console.log('Initializing player schema');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
	arrested: { type: Boolean },
	location: {
		latitude: { type: Number },
		longitude: { type: Number }
	},
    loot: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loot' }]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = Player = mongoose.model('Player', playerSchema);
