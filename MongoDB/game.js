const mongoose = require('mongoose');

console.log('Initializing game schema');

const gameSchema = new mongoose.Schema({
	jail: { type: mongoose.Schema.Types.ObjectId, ref: 'Jail' },
    administrator: { type: mongoose.Schema.ObjectId, ref: 'Administrator'},
    loot: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loot' }],
    accesscodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accesscode'}],
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