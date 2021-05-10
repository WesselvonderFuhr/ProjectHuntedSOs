const mongoose = require('mongoose');

console.log('Initializing administrator schema');

const administratorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true }
});

module.exports = Administrator = mongoose.model('Administrator', administratorSchema);
