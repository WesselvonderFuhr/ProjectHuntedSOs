const mongoose = require('mongoose');

console.log('Initializing accesscode schema');

const accesscodeSchema = new mongoose.Schema({
    code: { type: String, required: true },
    role: { type: String, required: true },
    assignedTo: {type: String, required: false},
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game'}
});

module.exports = Accesscode = mongoose.model('Accesscode', accesscodeSchema);
