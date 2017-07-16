var express = require('express')
var cookieParser = require('cookie-parser')

var server = express()
server.use(cookieParser())

server.use('/', (req, res) => {
  console.log(req.cookies)
  res.send('ok')
})

server.listen(4001)
