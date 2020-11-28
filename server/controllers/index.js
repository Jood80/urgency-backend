const express = require('express')
const router = express.Router();

const getAllNewData = require('./getAllNewsData')
const { Error404, Error500 } = require('../helpers');

router.get('/news', getAllNewData)
router.get('/testing', (req, res) => {

  res.send('Testing page content')
})

router.use(Error404);
router.use(Error500);

module.exports = router
