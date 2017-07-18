## 实战补缺
### express提供静态服务的坑
之前是使用express-static来提供静态服务，但总是会报错。后来查了下express官网的API发现express天然就提供这样的功能。
用法：`server.use(express.static('www'))`

### 与数据库保持持久连接
创建连接池可以与数据库保持多个连接，保证数据库连接的稳定性
```js
  const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'blog'
  })
```

### ejs
以行为单位，js用<%%>包起来，标签保持原样
```html
  <% for(var i = 0; i < banners.length; i++) { %>
    <li><img src=<%= banners[i].src %> alt=""/>
      <div class="text-box">
          <h2><%= banners[i].title %></h2>
            <p><%= banners[i].sub_title %></p>
        </div>
    </li>
  <% } %>
```

### express中的next()链式操作
终于知道express中的next()链式操作有什么作用了。
某些情况下，在我们渲染页面之前需要查询多张表来获取数据。而查表是异步的，我们要等待所有数据都获取到之后才渲染模版。此时，链式操作可以让我们控制多个异步操作的顺序，确保在渲染之前以获取到所有数据。

### res中的链式操作
```js
  res.status(404).send('文章不存在！').end()
```

### sql语句掺变量
```js
  db.query(`select * from article_table where ID=${req.query.id}`)
```
