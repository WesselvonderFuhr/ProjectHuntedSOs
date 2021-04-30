const express = require('express');
const router = express.Router();
const passport = require("passport");

let JailController = require('../Controllers/JailController');
const {ResponseHandler} = require("../Helper/ResponseHandler");

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await JailController.getJailByGameId(req.user.game_id);
    return res.status(200).json(result);
});

router.put('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
    let result = await JailController.editJail(req.user.game_id, req.body);
    ResponseHandler(result, req, res);
});

module.exports = router;
