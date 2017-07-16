# express
## 对比原生http
- req,res与原生保持一致，只是增加了一些功能
- 使用use()来写路由`server.use('/xx', (req, res) => {})`
- 原生的write()用send()代替
- end()与原生保持一致
- write()不能直接发送json到浏览器，而send()可以

## express方法
get('/xx', (req, res) => {})
post('/xx', (req, res) => {})
use('/xx', (req, res) => {}) // 这个通吃
回调函数还有第三个参数next，表示即使已经匹配上，也要继续往下走

## express提供静态服务
1. 引入express-static模块
2. 使用中间件：server.use(expressStatic('./www'))

## express处理get
使用req.query直接拿到查询参数

## express处理post
1. 引入body-parser模块
2. 使用中间件：server.use(bodyParser.urlencoded(extend, limit)) // 是否扩展，数据大小限制
3. req.body拿到post过来的数据

## 自定义中间件
其实就是王use()里面传了一个函数，这个函数可以接收到req,res，自然也可以给它们添加属性或方法
