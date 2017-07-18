const mysql = require('mysql')

// 1. 链接到数据库(服务器、用户名、密码、库)
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: '20170718'
  // 如果不是默认端口3306，则要加上port: 3308
})

// 2. 查询(通过网络来获取数据)
db.query('SELECT * FROM user_table', (err, data) => {
  if(err)
    console.log('查询数据出错！')
  else
    console.log('查询成功：', JSON.stringify(data))
})
