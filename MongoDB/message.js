const mongoose = require('mongoose');

console.log('Initializing game schema');

const messageSchema = new mongoose.Schema({
	game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'game' },
    message: { type: String},
    date_time: { type: Date}
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = Message = mongoose.model('Message', messageSchema);