var express = require('express')
var expressStatic = require('express-static')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.urlencoded())
/* 接口处理 */
server.get('/user', (req, res) => {
  // req.query,直接可以拿到查询参数
  res.send("xxx")
})

server.listen(4001)
server.use(expressStatic('./www'))
