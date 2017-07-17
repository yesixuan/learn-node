var ejs = require('ejs')

ejs.renderFile('./template/1.ejs', (err, data) => {
  if(err) {
    console.log('解析出现问题')
  }else {
    console.log(data)
  }
})
