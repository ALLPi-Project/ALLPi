'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/twitter-controller')

router.get('/:subject', controller.get);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.delete);

module.exports = router;