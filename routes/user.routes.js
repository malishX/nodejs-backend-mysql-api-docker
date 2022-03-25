const express = require('express')
const userController = require('../controller/user.controller')
const routes = express.Router()

routes.get('/', userController.userList)
routes.post('/save', userController.userSave)
routes.delete('/delete', userController.userDelete)

module.exports = routes