## 上传文件
### 基本用法
```js
  const multer = require('multer')
  // ...
  /* multer()会将返回一个对象，这个对象包含很多方法，我们要的就是这些方法 */
  /* 建议将multer()用一个变量存起来 */
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
