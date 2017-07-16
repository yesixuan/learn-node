var express = require('express')

var server = express()
server.use('/hehe', (req, res) => {
  res.send('hehe')
  res.end()
})
server.use('/', (req, res) => {
  res.send('homePage')
  res.end()
})

server.listen(4001)
