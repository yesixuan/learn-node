const express = require('express')
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const jade = require('jade')

var server = express()
server.listen(4001)

// 1. 解析cookie
server.use(cookieParser('nsdojgf45642norjes'))

// 2. 使用session
server.use(cookieSession({
  name: 'xuan_sess',
  keys: ['shd','dsr156er','nherisg','bdsrgfij'],
  maxAge: 1000*3600*20
}))

// 3. post数据
server.use(bodyParser.urlencoded({extended: false}))

// 用户登录
server.use('/', (req, res, next) => {
  console.log(req.query, req.body, req.cookies, req.session)
})

// 4. 静态数据
server.use(expressStatic('./www'))
