const express = require('express')
const memberController = require('../controller/member.controller')
const routes = express.Router()

routes.get('/', memberController.memberList)
routes.post('/save', memberController.memberSave)
routes.delete('/delete', memberController.memberDelete)

module.exports = routes