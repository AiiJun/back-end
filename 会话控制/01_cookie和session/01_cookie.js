const { log } = require("console");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  //   res.cookie("name", "zhangsan"); //会在浏览器关闭的时候销毁
  res.cookie("name", "lisi", { maxAge: 60 * 1000 }); //maxAge相当于cookie的生命周期,即时浏览器关闭也会存在,直到生命周期结束
  res.cookie("theme", "blue");
  res.send("home");
});

//删除cookie
app.get("/remove-cookie", (req, res) => {
  res.clearCookie("name");
  res.send("删除成功");
});

//获取cookie
app.get("/get-cookie", (req, res) => {
  //获取cookie
  console.log(req.cookies);
  res.send(`欢迎您 ${req.cookies.name}`);
});

app.listen(3000);
