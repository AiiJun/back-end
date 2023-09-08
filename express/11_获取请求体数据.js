/**
 * 按照要求搭建HTTP服务
 *
 * GET    /login   显示表单网页
 * POST   /login   获取表单中的[用户名]和[密码]
 */

//导入 express
const express = require("express");
const bodyParser = require("body-parser");

//创建应用对象
const app = express();

//解析JSON格式的请求体的中间件
// const jsonParser = bodyParser.json();

//解析querystring格式的请求体的中间件
const urlencodeParser = bodyParser.urlencoded({ extended: false });

//创建路由
app.get("/login", (req, res) => {
  // res.send('表单页面')
  //响应html文件内容
  res.sendFile(__dirname + "/11_form.html");
});

//post规则
app.post("/login", urlencodeParser, (req, res) => {
  //获取用户名和密码
  console.log(req.body);
  return
  res.send("获取用户的数据");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
