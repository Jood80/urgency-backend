const express = require('express')
const cors= require('cors')
const router = require('./controllers')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())
app.use(router)

module.exports = app