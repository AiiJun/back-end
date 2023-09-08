//导入 express
const express = require("express");

//创建应用对象
const app = express();

//创建路由
app.get("/:id", (req, res) => {
  //乱码解决
  res.setHeader("content-type", "text/html;charset=utf-8");
  //获取 URl 路由参数
  console.log(req.params.id);
  res.end("商品详情");
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
