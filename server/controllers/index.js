const express = require('express')
const router = express.Router();

const getAllNewData = require('./getAllNewsData')
const { Error404, Error500 } = require('../helpers');

router.get('/api/news', getAllNewData)
router.get('/api/testing', (req, res) => {

  res.send('Testing page content')
})

router.use(Error404);
router.use(Error500);

module.exports = router
