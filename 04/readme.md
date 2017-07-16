## cookie
### 定义
在浏览器保存一些数据，每次请求都会带过来。只能存4k的数据
### 使用时注意
- 空间小，精打细算
- 校验cookie是否被篡改

## session
### 定义
保存数据，保存在服务端。
session是依托于cookie存在的。
### 简单的session流转过程
1. 浏览器给服务器空的的cookie
2. 服务器在这个cookie里面插入一个唯一的ID标识，发送给浏览器。与这个ID相关的数据保存在服务器中
3. 浏览器将带有ID的cookie发给服务器
4. 服务器根据ID知道来者何人

### session劫持
别人拿到你的sessionID，种到自己的cookie中，就可以以你的身份来做一些事情。
预防措施：cookie加密、更换sessionID。

## express中的cookie
### 写入cookie
```js
  // 指定只有在‘/aaa’下才有cookie，保质期为一个月，是否需要签名
  res.cookie(res.cookie('user', 'xuan', {path: '/aaa', maxAge: 30*24*3600*1000, signed: true}))
```
### 读取cookie
```js
  var cookieParser = require('cookie-parser')
  // 添加中间件
  server.use(cookieParser())
  // 读取,子级目录可以读根级。即树枝可以去寻根。例如/aaa/bbb可以读/aaa下的cookie
  console.log(req.cookies)
```
### 删除cookie
```js
  res.clearCookie('user')
```
### 安全
#### 签名
不能做到信息影藏，但是能够做到别人一旦篡改信息，我能知道
```js
  server.use(cookieParser('shdgopedfgh'))
  // ...
  req.secret = 'shdgopedfgh' // 这个其实可以省略，上面use的时候会自动做这个事儿
  res.cookie('user', 'xuan', {signed: true})
  console.log(req.cookies) // 没有签过名的cookie
  console.log(req.signedCookies) // 签过名的cookie
```
#### 加密
cookie没太多必要加密，真正机密的东西往session中放就好了。一定要用的话，cookie-encrypter

## express中的session
### session配置
```js
  var cookieSession = require('cookie-session')
  // ...
  // 这个要在cookieParser之下
  server.use(cookieSession({
    keys: ['aaa', 'bbb', 'ccc'], // 这个数组越长，越是安全
    name: 'sess', // 如果没这个参数，默认就是在cookie中的键名就是session
    maxAge: 1000*3600*2 // 两小时未操作，自动注销
  }))
```
### 统计访问次数
```js
  server.use('/', (req, res) => {
    if(req.session['count'] == null) {
      req.session['count'] = 1
    }else {
      req.session['count']++
    }
    console.log(req.session['count'])
    res.send('ok')
  })
```
### 删除
delete req.session
