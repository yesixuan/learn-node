var express = require('express')
var cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

var server = express()
server.use(cookieParser())
server.use(cookieSession({
  keys: ['aaa', 'bbb', 'ccc'],
  name: 'sess', // 如果没这个参数，默认就是在cookie中的键名就是session
  maxAge: 1000*3600*2 // 两小时未操作，自动注销
}))

server.use('/', (req, res) => {
  if(req.session['count'] == null) {
    req.session['count'] = 1
  }else {
    req.session['count']++
  }
  console.log(req.session['count'])
  res.send('ok')
})

server.listen(4001)
