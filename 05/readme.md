# 后台模版
## jade

### 常用方法
#### 渲染
```js
  var jade = require('jade')
  // pretty参数是为了输出格式良好的html模版，{}还可以放变量
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
- 在内容前加‘|’，表示原样输出内容（script标签里的多行代码）
- 在标签后加‘.’，表示里面的内容原样输出
- include可以引入一个外部文件，include a.js（引入的内容还是嵌在页面中的）
- 使用变量：#{变量}，变量定义在renderFile(,{},)方法的‘{}’中（还可以写表达式）
- 可以写两个class属性，jade自会处理好
- 以‘-’开头的，解析为js。前面一行加了‘-’，下面与它平级或下级的都不用加‘-’
- span #{name}与span=name，两者等价
- 不让变量里面的尖括号被转义，在‘=’前面加‘!’
- 原来的switch-case变成case-when结构。

## ejs

### 常用方法
#### 渲染
```js
  var ejs = require('ejs')
  // pretty参数是为了输出格式良好的html模版
  ejs.renderFile('路径', {模版中要用到的变量}, (err, data) => {})
```

### 语法
- 变量：<%= name %>
- js语法：<% 脚本 %>
- 引入外部文件的内容：<% include 路径 %>
- include不是原生js的语法，所以使用include时，要单独起一行用“<% %>”包裹起来
