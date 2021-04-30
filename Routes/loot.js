const express = require('express');
const router = express.Router();
const passport = require("passport");

let LootController = require('../Controllers/LootController');
const {DefaultResponse} = require("../Helper/ResponseHandler");

router.post('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
  let result = await LootController.addLoot(req.user.game_id, req.body);
  DefaultResponse(result, req, res);
});

router.get('/', passport.authenticate('jwt', { session: false }), async function (req, res) {
  let result = await LootController.getAllLoot(req.user.game_id);
  return res.status(200).json(result);
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), async function (req, res) {
  let result = await LootController.deleteLoot(req.user.game_id, req.params.id);
  DefaultResponse(result, req, res);
});

module.exports = router;
