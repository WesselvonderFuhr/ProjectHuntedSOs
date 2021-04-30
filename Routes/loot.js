const express = require('express');
const router = express.Router();
const passport = require("passport");

let LootController = require('../Controllers/LootController');
const {DefaultResponse} = require("../Helper/ResponseHandler");

router.post('/', async function (req, res) {
  let result = await LootController.addLoot(req.query.game_id, req.body);
  DefaultResponse(result, req, res);
});

router.get('/', async function (req, res) {
  let result = await LootController.getAllLoot(req.query.game_id);
  return res.status(200).json(result);
});

router.delete('/:id', async function (req, res) {
  let result = await LootController.deleteLoot(req.query.game_id, req.params.id);
  DefaultResponse(result, req, res);
});

module.exports = router;
