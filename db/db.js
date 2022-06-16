const mysql = require('mysql')

const db = mysql.createPool({
    // 地址
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'sio_app'
})

module.exports = db