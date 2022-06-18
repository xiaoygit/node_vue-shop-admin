const express = require('express')
const Router = express.Router()
const login = require('../login/index')
const user = require('../user/index')

// 登录
Router.post('/login', login.login)

// 人员配置模块
Router.get('/userList', user.userList)

module.exports = Router
