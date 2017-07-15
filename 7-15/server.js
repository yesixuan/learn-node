const http = require('http')

http.createServer((req, res) => {
  let str = ''
  let time = 0
  // 有一段数据到达的时候被触发
  req.on('data', data => {
    console.log(`第${time++}次`)
    str += data
  })
  // 数据发送完毕时被触发一次
  req.on('end', () => {
    console.log(111)
  })
}).listen(4001)
