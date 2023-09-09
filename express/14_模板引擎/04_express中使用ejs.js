//导入 express
const express = require("express");
const path = require("path");

//创建应用对象
const app = express();
//设置模板引擎
app.set("view engine", "ejs"); //pug    twing
//2.设置模板文件存放位置  模板文件:具有模板语法内容的文件
app.set("views", path.resolve(__dirname, "./views"));

//创建路由
app.get("/home", (req, res) => {
  //3.render方法响应
  //   res.render('模板的文件名','数据');
  //声明变量
  let title = "我才是天下第一!";
  res.render("home", { title });
  //4.创建模板文件
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
