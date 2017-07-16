const http = require('http')
const urlLib = require('url')
const querystring = require('querystring')

http.createServer((req, res) => {
  if(req.url.indexOf('?') == -1) {
    var get = querystring(req.url, true)
  }else {
    var str = ''
    req.on('data', data => {
      str += data
    })
    req.on('end', () => {
      var post = querystring(str)
    })
  }
}).listen(4001)
