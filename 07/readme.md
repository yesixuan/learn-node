# mysql
## 准备工作
- 安装mysql客户端
- 安装时选择server only就行（我们只需要它的服务端）
- 展示高级选项，设置密码
- 安装Navicat for MYSQL客户端
- 用navicat连接mysql（使用localhost就行）

## SQL语句
### 增
INSERT INTO 表 (字段列表) VALUES (值列表)
INSERT INTO `user_table` (`ID`, `username`, `password`) VALUES(0, 'ye', '741258')
### 删
### 改
### 查
SELECT 什么 FROM 表
SELECT * FROM `user_table`
