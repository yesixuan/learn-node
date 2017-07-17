## 使用nodejs写简单的后台
- 区分浏览器请求的是静态资源还是接口数据：接口统一用类似‘/api’开头
- 不管是接口的处理还是静态资源的处理，都要写在`res.on('end',() => {})`的回调函数中
- 我们不需要判断是get还是post请求，反正将他们的参数解析出来分别存储就好了

## 模块
### 自定义模块
所有模块中的代码，都将被nodejs包在`(function(require, exports, module){})`
#### 暴露模块
要暴露东西，必须要将其挂到exports对象上去
exports.xx = xx
如果到对外输出一堆东西，要使用module.exports = {}
### npm
npm login // 登录npm
npm whoami // 告诉你当前登录用户是谁
npm publish // 不成功，原因未知
npm unpublish --force // 删除发布的东西（每个版本都得删）
#### 填坑
之前publish一直都是失败，原因是之前设置了淘宝的源，以及需要重新登录npm的帐号
