var jade = require('jade')

jade.renderFile('./template/1.jade', {pretty: true}, (err, data) => {
  if(err) {
    console.log('解析出错')
  }else {
    console.log(data)
  }
})
// console.log(jade)
