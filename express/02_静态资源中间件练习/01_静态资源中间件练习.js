//导入 express
const express = require("express");

//创建应用对象
const app = express();

//创建静态资源中间件
app.use(express.static(__dirname + "/尚品汇"));

app.all("*", (req, res) => {
  res.send("<h1>404 not Found</h1>");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
