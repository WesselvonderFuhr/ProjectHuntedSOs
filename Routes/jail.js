const express = require('express');
const router = express.Router();

let JailController = require('../Controllers/JailController');
const {DefaultResponse} = require("../Helper/DefaultResponse");

router.get('/', async function (req, res) {
    let result = await JailController.getJailByID(id);
    return res.status(200).json(result);
});

router.put('/', async function (req, res) {
    let result = await JailController.editLoot(id, req.body);
    DefaultResponse(result, req, res);
});

module.exports = router;
