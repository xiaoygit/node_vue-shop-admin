const db = require('../db/db.js')

// 获取用户列表
exports.userList = (req, res) => {
    const sqlStr = 'select * from sio_user'
    db.query(sqlStr, (err, results) => {
        if (err) return res.error()
        res.send({
            data: results,
            message: '请求成功',
            status: 200
        })
    })
}