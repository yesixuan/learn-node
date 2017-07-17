const jade = require('jade')
const fs = require('fs')

var str = jade.renderFile('./template/index.jade', {pretty: true})
 /* 写文件时，文件可以不存在，但是目录要有 */
fs.writeFile('./build/index.html', str, err => {
  if(err){
    console.log('写入文件出错')
  }
  else{
    console.log('成功');
  }
})
