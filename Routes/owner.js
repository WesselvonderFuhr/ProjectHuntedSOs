const express = require('express');
const router = express.Router();

const OwnerController = require('../Controllers/OwnerController');
const {ResponseHandler} = require("../Helper/ResponseHandler");

router.put('/changePassword', async function (req, res) {
    let result = await OwnerController.changePassword(req.body, req.query.password);
    ResponseHandler(result, req, res);
});

module.exports = router;
