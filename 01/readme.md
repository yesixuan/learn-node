## 在atom中运行node
### 插件：script
### 开启：ctrl + shift + B
### 关闭：ctrl + Q

## fs模块
### 方法
fs.readFile(cb)
fs.writeFile(cb)

## http
### get请求
req.url ---> 端口号后面的所有，包含查询参数  
querystring模块专门用来解析查询参数：querystring.parse("xx=xx&xx=xx")  
url模块解析完整URL地址：url.parse("http://127.0.0.1:4001/index?xx=xx&xx=xx", [true(可选参数)])这里将得到一个很详细的对象，包含：协议、主机、主机名、hash、查询字符串、pathName（端口后面，查询参数前面）、path（比pathName多了查询参数）、href（完整地址）  
通过URL解析过后，我们最需要的就是pathName属性、query属性
### post请求
post请求数据是分成小段发送到后台的  
req.on('data', data => {}) // 每接受到一段数据触发  
req.on('end', () => {}) // 接受完毕触发  
post是直接拿到请求的数据，然后用querystring模块去解析就好了
