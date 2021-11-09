'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/twitter-controller')

router.get('/:subject', controller.get);
router.patch('/:id', controller.patch);

module.exports = router;