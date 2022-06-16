const express = require('express')
const Router = express.Router()
const login = require('../login/index')

// 登录
Router.post('/login', login.login)

module.exports = Router
