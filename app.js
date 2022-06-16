const express = require('express')
const app = express()
const port = 8888
const cors = require('cors')
const Router = require('./router/index')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/api/stockIo/admin', Router)

app.get('/', (req, res) => res.send('success!'))


app.listen(port, () => console.log(`127.0.0.1:${port}!`))


