const mongoose = require('mongoose');

console.log('Initializing loot schema');

const lootSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = Loot = mongoose.model('loot', lootSchema);
