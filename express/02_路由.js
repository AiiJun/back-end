//导入express
const express = require("express");

//创建应用对象
const app = express();

//创建路由
app.get("/home", (req, res) => {
  res.end("Hello epxress!!");
});

app.get("", (req, res) => {
  res.end("Welcome!!");
});

//post
app.post("/login", (req, res) => {
  res.end("Login!!");
});

//响应所有的方法
app.all("/test", (req, res) => {
  res.end("Test!!");
});

//404响应
app.all("*", (req, res) => {
  res.end("404 not Found");
});

app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
