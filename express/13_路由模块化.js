//导入 express
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const adminRouter = require("./routes/adminRouter");
const allRouter = require("./routes/allRouter");
//创建应用对象
const app = express();

//设置
app.use(homeRouter,adminRouter,allRouter);

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
