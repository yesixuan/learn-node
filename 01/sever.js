const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
  let fileName = './www' + req.url
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.write('404')
    } else {
      res.write(data)
    }
    // 读文件是异步的，所以end该放在这里
    res.end()
  })
})

server.listen('4001')
