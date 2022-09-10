const express = require('express')
const userController = require('./controllers/userController')

const routes = express.Router()

routes.post('/users', userController.createUser)
routes.get('/users', userController.listUsers)

module.exports = routes