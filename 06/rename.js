conse fs = require('fs')

fs.rename('upload.html', 'hehe.js', err => {
  if(err){
    console.log(err)
  }else {
    console.log('改名成功!')
  }
})
