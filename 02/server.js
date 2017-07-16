const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var users = {} // 存用户数据

http.createServer((req, res) => {
  // 解析数据
  var str = ''
  req.on('data', data => {
    str += data
  })
  req.on('end', () => {
    var obj = urlLib.parse(req.url, true)
    // console.log(obj)
    const url = obj.pathname
    const GET = obj.query
    const POST = querystring.parse(str)
    // 区分接口和文件
    if(!url) {
      return
    }
    if (url === '/user') { // 接口
      switch (GET.act) {
        case 'reg':
          // 检查用户是否存在
          if (users[GET.user]) {
            res.write('{"ok":false,"msg":"用户名已存在"}')
          // 插入数据
          }else{
            users[GET.user]=GET.pass
            res.write('{"ok":true,"msg":"注册成功"}')
          }
          break;
        case 'login':
          // 检查用户名是否存在
          if(users[GET.name]==null){
            res.write('{"ok":false,"msg":"用户不存在"}')
            // 检查密码是否正确
          }else if(users[GET.name]!=GET.pass){
            res.write('{"ok":false,"msg":"密码有误"}')
          }else{
            res.write('{"ok":true,"msg":"登录成功"}')
          }
          break;
        default:
          res.write('{"ok":false,"msg":"未知的act"}')
      }
      res.end()
    } else { // 当文件来对待
      // 读取文件
      var file_name = './www' + url
      fs.readFile(file_name, (err, data) => {
        if (err) {
          res.write('404')
        } else {
          res.write(data)
        }
        res.end()
      })
    }
  })
}).listen(4001)
