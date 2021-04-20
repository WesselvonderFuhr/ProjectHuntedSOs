const express = require('express');
const router = express.Router();
const passport = require("passport");

let LootController = require('../Controllers/LootController');
const {DefaultResponse} = require("../Helper/DefaultResponse");

router.post('/', async function (req, res) {
  let result = await LootController.addLoot(req.body);
  DefaultResponse(result, req, res);
});

router.get('/', async function (req, res) {
  let result = await LootController.getAllLoot();
  return res.status(200).json(result);
});

module.exports = router;
