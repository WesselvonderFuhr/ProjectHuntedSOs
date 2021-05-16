const mongoose = require('mongoose');

console.log('Initializing playfield schema');

const playfieldSchema = new mongoose.Schema({
    playfield: [[[{
            latitude: { type: Number },
            longitude: { type: Number }
    }]]]
});

module.exports = Playfield = mongoose.model('Playfield', playfieldSchema);
