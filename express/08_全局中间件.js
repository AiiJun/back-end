/**
 * 记录每个请求的url与IP地址
 */

//导入 express
const express = require("express");
const fs = require("fs");
const path = require("path");

//创建应用对象
const app = express();

//声明中间件函数
function recordMiddleware(req, res, next) {
  //获取url和IP地址
  let { url, ip } = req;
  //将信息保存在文件中 access.log
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url} ${ip}\r\n`
  );
  //调用next
  next();
}

//使用中间件函数
app.use(recordMiddleware);

//创建路由
app.get("/home", (req, res) => {
  res.send("前台首页");
});

app.get("/admin", (req, res) => {
  res.send("后台首页");
});

app.all("*", (req, res) => {
  res.send("<h1>404 not Found</h1>");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
