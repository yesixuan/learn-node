const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')

var server = express()
var objMulter = multer()

// server.use(bodyParser.urlencoded({extended: false}))
// server.use(objMulter.single('f1'))
server.use(multer({dest:'./www/upload'}).any())

server.post('/', (req, res) => {
  console.log(req.files)
  // 获取原始文件名
})

server.listen(4000)
