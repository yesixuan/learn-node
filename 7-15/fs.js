let fs = require('fs')
fs.readFile('aa.txt', (err, data) => {
  if (err) {
    console.log('读取失败')
    return
  } else {
    console.log(data) // buffer对象
    console.log(data.toString())
  }
})
