const path = require('path')
const express = require('express')
const router = require('./controllers')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(router)

module.exports = app