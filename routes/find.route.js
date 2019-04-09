const express = require('express');
const router = express.Router();

const findController = require('../controllers/find.controller');

router.get('/:id', findController.getOne);

router.get('/type/:id', findController.getType)


module.exports = router;