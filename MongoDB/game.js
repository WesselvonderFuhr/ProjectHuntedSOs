var mongoose = require('mongoose');

console.log('Initializing game schema');

var gameSchema = new mongoose.Schema({
	jail: { type: mongoose.Schema.Types.ObjectId, ref: 'Jail' },
    loot: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loot' }],
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    playfield: [{   location: {
                        latitude: { type: Number },
                        longitude: { type: Number }
	                }
                }]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

gameSchema.virtual('numberOfLoot').get(function () {
    return this.loot.length;
});

gameSchema.virtual('numberOfPlayers').get(function () {
    return this.players.length;
});

module.exports = Game = mongoose.model('Game', gameSchema);