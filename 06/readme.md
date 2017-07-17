## 上传文件
### 基本用法
```js
  const multer = require('multer')
  // ...
  /* multer()会将返回一个对象，这个对象包含很多方法，我们要的就是这些方法 */
  /* 建议将multer()用一个变量存起来，{}里面还有很多选项 */
  server.use(multer({dest:'./www/upload'}).any())
  // ...
  /* 获取文件，得到一个对象数组，每个元素包含该文件的各种信息 */
  console.log(req.files)
```
### 将buffer数据直接放入磁盘，而不是放在内存中占用大量内存
```js
  var objMulter = multer({dest: '文件的存放路径'})
```
### 处理文件名和后缀名
```js
  const fs = require('fs')
  const pathLib = require('path')
  // ...
  /* 使用pathLib.parse('路径带文件名')可以解析更多信息，也可以拿到文件后缀名 */
  var newName = req.files[0].path + pathLib.extname(req.files[0].originalname)
  fs.rename(req.files[0].path, newName, err => {
    if(err)
      res.send('上传失败！')
    else
      res.send('ok!')
  })
```

## express与模版引擎
### 关键模块`consolidate`
consolidate模块整合了各种模板引擎（包括react）。有了这个模块，我们甚至都不用显式地require其他模版引擎。
### 配置
```js
  const consolidate = require('consolidate')
  server.set('view engine', 'html') // 要输出什么
  server.set('views', './views') // 指定模板目录
  server.engine('html', consolidate.ejs) // 指定如果要输出html文件就用ejs引擎
```
### 渲染
```js
  // ...
  /* 不用指定模版路径，因为配置时已经指定过了 */
  res.render('指定模版目录下的文件名', {'模板所需变量'})
```

## 模块化
大型项目中，我们常常有这样的需求：我们希望项目是模块化的，即路径'/user'下的页面统一由nodejs中的一个模块来管理。每个业务上的模块都对应nodejs中的一个模块。
router可以理解为是将server进行了拆分（迷你版server）。
### 概览
```js
  // 创建router
  var router = express.Router()
  // 把路由添加到server
  server.use('/user', router) // '/user'下的请求由这个router处理
  // router内部
  router.get('/1.html', (req, res) => {}) // 还有post、use方法，与server保持一致
```
