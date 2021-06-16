const express = require('express');
const router = express.Router();
const passport = require("passport");

const MessageController = require('../Controllers/MessageController');
const authorize = require("../Authorization/authorize");
const {ResponseHandler} = require("../Helper/ResponseHandler");

router.post('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Administrator(req.user);
    if(unauthorized){
      return ResponseHandler(unauthorized, req, res);
    }
  
    let result = await MessageController.addMessage(req.user.game_id, req.body);
    ResponseHandler(result, req, res);
  });

  router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let unauthorized = await authorize.Player(req.user);
    if(unauthorized){
      return ResponseHandler(unauthorized, req, res);
    }
    let result = await MessageController.getAllMessages(req.user.game_id);
    ResponseHandler(result, req, res);
  });


module.exports = router;
