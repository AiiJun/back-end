/**
 * 针对 /admin /setting 的请求,要求URL写阿呆 code=521 参数,如未携带提示[暗号错误]
 */

//导入 express
const express = require("express");

//创建应用对象
const app = express();

//创建路由
app.get("/home", (req, res) => {
  res.send("前台首页");
});

//声明中间件
let checkCodeMiddleware = (req, res, next) => {
  //判断URL中是否code参数等于521
  if (req.query.code === "521") {
    next();
  } else {
    res.send("暗号错误");
  }
};

//后台 
app.get("/admin", checkCodeMiddleware, (req, res) => {
  res.send("后台首页");
});

//后台设置
app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("设置页面");
});

app.all("*", (req, res) => {
  res.send("<h1>404 not Found</h1>");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
