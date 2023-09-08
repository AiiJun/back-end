//导入 express
const express = require("express");
//导入 JSON 文件
const { singers } = require("./singers.json");

//创建应用对象
const app = express();

//创建路由
app.get("/singer/:id", (req, res) => {
  //获取路由参数
  // let id = req.params.id;
  let { id } = req.params;
  //在数组中寻找对应id的数据
  let result = singers.find((items) => {
    if (items.id === Number(id)) return true;
  });

  //判断result值
  if(!result){
    res.statusCode = 404;
    res.end(`<h1>404 not Found</h1>`);
    return;
  }

  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h2>${result.singer_name}</h2>
      <img src="${result.singer_pic}"/>
  </body>
  </html>`);
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
