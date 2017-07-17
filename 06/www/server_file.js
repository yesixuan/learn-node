const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const pathLib = require('path')

var server = express()
var objMulter = multer()

// server.use(bodyParser.urlencoded({extended: false}))
// server.use(objMulter.single('f1'))
server.use(multer({dest:'./www/upload'}).any())

server.post('/', (req, res) => {
  // 获取原始文件名
  console.log(req.files[0].path)
  console.log(req.files[0].originalname)
  // 新文件名
  var newName = req.files[0].path + pathLib.extname(req.files[0].originalname)
  fs.rename(req.files[0].path, newName, err => {
    if(err)
      res.send('上传失败！')
    else
      res.send('ok!')
  })
})

server.listen(4000)
