const express = require('express');
const router = express.Router();

const editRouter = require('../controllers/edit.controller');

router.put('/:id', editRouter.editOne);

router.delete('/:id', editRouter.deleteOne);

router.post('/', editRouter.createOne);

module.exports = router;