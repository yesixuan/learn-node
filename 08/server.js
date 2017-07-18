const express = require('express')
const expressStatic = require('express-static')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const consolidate = require('consolidate')
const mysql = require('mysql')

// 使用连接池而不是创建连接，以提高性能（会创建多个链接，以保持跟数据库的持久通话）
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
})

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
server.set('views', './templates') // 指定模板目录
server.engine('html', consolidate.ejs) // 指定引擎

// 用户登录
server.get('/', (req, res, next) => {
  db.query('select * from banner_table', (err, data) => {
    if(err){
      res.status(500).send('database err!').end()
    }
    else{
      // 将查询到的数据传到下一个去
      res.banners = data
      next()
      // res.render('index.ejs', {banners: data})
    }
  })
})
server.get('/', (req, res, next) => {
  db.query('select ID,title,summery from article_table', (err, data) => {
    if(err) {
      res.status(500).send('database err!').end()
    }else {
      // res.render('index.ejs', {banners: res.banners, articles: data})
      res.articles = data
      next()
    }
  })
})
server.get('/', (req, res) => {
  res.render('index.ejs', {banners: res.banners, articles: res.articles})
})
server.get('/conText', (req, res, next) => {
  // res.render('conText.ejs', {})
  db.query('select ')
})

// 4. 静态数据
// server.use(expressStatic(__dirname + '/www'))
server.use(express.static('www'))
