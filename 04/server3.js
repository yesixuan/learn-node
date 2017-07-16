var express = require('express')
var cookieParser = require('cookie-parser')

var server = express()
server.use(cookieParser('shdgopedfgh'))

server.use('/', (req, res) => {
  req.secret = 'shdgopedfgh'
  res.cookie('user', 'xuan', {signed: true})
  console.log(req.cookies) // 没有签过名的cookie
  console.log(req.signedCookies) // 签过名的cookie
  res.send('ok')
})

server.listen(4001)
