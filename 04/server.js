var express = require('express')

var server = express()

server.use('/', (req, res) => {
  // 仅在‘/aaa’上有cookie，保质期是一个月事件
  res.cookie('user', 'xuan', {path: '/aaa', maxAge: 30*24*3600*1000})
  res.send('ok')
})

server.listen(4001)
