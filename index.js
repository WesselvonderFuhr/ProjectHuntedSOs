const express = require('express');
const app = express();
const passport = require("passport");
const cors = require('cors');
const connectDB = require('./MongoDB/Connection');

app.use(cors());

connectDB();
const loot = require('./Routes/loot.js');
const player = require('./Routes/player.js');
const jail = require('./Routes/jail.js');
const accesscode = require('./Routes/accesscode.js');
const game = require('./Routes/game.js');
const owner = require('./Routes/owner.js');
const message = require('./Routes/message.js');

require('./Authorization/passport-jwt');

app.use(express.json())
app.use(passport.initialize());
app.use('/loot', loot);
app.use('/player', player);
app.use('/jail', jail);
app.use('/accesscode', accesscode);
app.use('/game', game);
app.use('/owner', owner);
app.use('/message', message);


app.listen(process.env.PORT || 3000);
