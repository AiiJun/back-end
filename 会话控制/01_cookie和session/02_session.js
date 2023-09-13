const { log } = require("console");
const express = require("express");
const cookieParser = require("cookie-parser");
//引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();
//设置session的中间件
app.use(
  session({
    name: "sid", //设置cookie的name,默认值是:connect.sid
    secret: "AiiJun", //参与加密的字符串(又称签名)   加盐
    saveUninitialized: "false", //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
      mongoUrl: "mongodb://47.115.219.227:27017/mongo", //数据库的连接配置
    }),
    cookie: {
      httpOnly: true, //开启后前端无法用过js操作
      maxAge: 1000 * 100, //这个是控制sessionID的过期时间
    },
  })
);

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

//登录
app.get("/login", (req, res) => {
  //username=admin&password=admin
  if (req.query.username === "admin" && req.query.password === "admin") {
    //设置session信息
    req.session.username = "admin";
    req.session.uid = "258aefccc";
    res.send("登录成功");
  } else {
    res.send("登陆失败");
  }
});

//session的读取
app.get("/cart", (req, res) => {
  if (req.session.username) {
    res.send(`购物车页面,获取成功,欢迎您 ${req.session.username}`);
  } else {
    res.send("请先登录");
  }
});

//session 的销毁
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("退出成功");
  });
});

app.listen(3000);
