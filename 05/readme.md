# 后台模版
## jade

### 常用方法
#### 渲染
```js
  var jade = require('jade')
  // pretty参数是为了输出格式良好的html模版
  jade.renderFile('路径', {pretty: true}, (err, data) => {})
```
#### 将渲染后的模版存放
```js
  var str = jade.renderFile('路径', {pretty: true})
  fs.witeFile('./build/xx.html', str, err => {})
```

### 语法
- 属性，使用小括号：img(src="./xx.jpg",alt="xxx")
- 内容，空格往标签后面写：a 链接
- style属性的对象写法：div(style={width:'200px',...})
- class的数组写法：div(class=['aa',...])
- 写class与id可以使用类似emmet写法
- 标签后面加上&attributes，可以用对象方式写多个属性

## ejs

### 常用方法
#### 渲染
```js
  var ejs = require('ejs')
  // pretty参数是为了输出格式良好的html模版
  ejs.renderFile('路径', {模版中要用到的变量}, (err, data) => {})
```

### 语法
- 变量：<% =name %>
