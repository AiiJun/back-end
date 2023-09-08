//导入 express
const express = require("express");

//创建应用对象
const app = express();

//创建路由
app.get("/response", (req, res) => {
  //原声响应
  //   res.statusCode = 404;
  //   res.statusMessage = "love";
  //   res.setHeader("xxx", "yyy");
  //   res.write("hello express ");
  //   res.end("response");

  //express 响应
  // res.status(500)
  // res.set('aaa','bbb')
  // res.send('你好 Epxress')
  res.status(500).set("aaa", "bbb").send("这样也是可以的");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
