const express = require('express')
const router = express.Router();
const { Error404, Error500 } = require('../helpers');

router.use(Error404);
router.use(Error500);

module.exports = router;