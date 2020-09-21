const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

module.exports = server