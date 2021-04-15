var express = require('express');
var app = express();
var cors = require('cors');
const connectDB = require('./MongoDB/Connection');

app.use(cors());

connectDB();
var loot = require('./Routes/loot.js');
var player = require('./Routes/player.js');
var jail = require('./Routes/jail.js');
var accesscode = require('./Routes/accesscode.js');
var game = require('./Routes/game.js');

app.use(express.json())
app.use('/loot', loot);
app.use('/player', player);
app.use('/jail', jail);
app.use('/accesscode', accesscode);
app.use('/game', game);


app.listen(process.env.PORT || 3000);
