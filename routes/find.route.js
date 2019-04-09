const express = require('express');
const router = express.Router();

const findController = require('../controllers/find.controller');

router.get('/isGround', findController.getIsGround);

router.get('/isFlying', findController.getIsFlying);

router.get('/isAquatic', findController.getIsAquatic);

router.get('/isJumping', findController.getIsJumping);

router.get('/:id', findController.getOne);

module.exports = router;