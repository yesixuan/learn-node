const http = require('http')
const urlLib = require('url')

http.createServer((req, res) => {
  let url = req.url
  let obj = urlLib.parse(url, true)
  console.log(obj)
}).listen(4001)
