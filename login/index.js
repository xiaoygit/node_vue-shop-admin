const db = require('../db/db.js')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    const { phone, password } = req.body
    const sqlStr = `select * from sio_user where phone = '${phone}'`
    db.query(sqlStr, (err, results) => {
        if (err) return res.send({ status: 203, message: '遇到不可知的错误，请联系管理员' })
        if (results.length !== 1) return res.send({ status: 204, message: '账号未注册' })
        if (password !== results[0].password) return res.send({ status: 205, message: '密码错误' })
        // 生成token
        const user = { ...results[0] }
        const token = jwt.sign(user, 'stockIO ^_^!!!', { expiresIn: '10h' })
        res.send({ status: 200, message: '登录成功', data: results[0], token: token })
    })
}