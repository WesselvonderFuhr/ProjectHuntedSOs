const mongoose = require('mongoose');

const URI = "mongodb+srv://masteruser:AvansIsWack42@hunted-sos.bo07l.mongodb.net/Hunted?retryWrites=true&w=majority";
//const URI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected');
}

module.exports = connectDB;
