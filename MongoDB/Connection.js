const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const URI = "mongodb+srv://masteruser:AvansIsWack42@hunted-sos.bo07l.mongodb.net/Hunted?retryWrites=true&w=majority";
//const URI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected');

    let owner = await Owner.findOne();
    if(owner == null){
        owner = new Owner();
        owner.password = bcrypt.hashSync("Ridderbier", 8);
        await owner.save();
        console.log('No owner found, default owner and password added. Consult documentation for the password.');
    }
}

module.exports = connectDB;
