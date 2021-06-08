const mongoose = require('mongoose');

console.log('Initializing owner schema');

const ownerSchema = new mongoose.Schema({
    password: { type: String, required: true }
});

module.exports = Owner = mongoose.model('Owner', ownerSchema);
