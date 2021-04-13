var mongoose = require('mongoose');

console.log('Initializing accesscode schema');

var accesscodeSchema = new mongoose.Schema({
    code: { type: String, required: true },
    role: { type: String, required: true },
    assignedTo: {type: String, required: false}
});

module.exports = Accesscode = mongoose.model('Accesscode', accesscodeSchema);