const express = require('express')
const router = express.Router();
const cors= require('cors')

const getAllNewData = require('./getAllNewsData')
const postUsers = require('./postUsers')
const { Error404, Error500 } = require('../helpers');

router.get('/api/news',cors() , getAllNewData)
router.post('/api/signUp', postUsers)

router.use(Error404);
router.use(Error500);

module.exports = router
