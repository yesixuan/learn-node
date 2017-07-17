const express = require('express')
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
// const ejs = require('ejs')
// const jade = require('jade')
const consolidate = require('consolidate')

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
server.use(multer({dest: './www/upload'}).any())

// 模板引擎
server.set('view engine', 'html') // 要输出什么
server.set('views', './views') // 指定模板目录
server.engine('html', consolidate.ejs) // 指定引擎

// 用户登录
server.get('/index', (req, res, next) => {
  res.render('1.ejs', {name: 'yesixuan'})
})

// 4. 静态数据
server.use(expressStatic('./www'))
