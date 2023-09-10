//1.安装 mongoose
//2.导入 mongoose
const mongoose = require("mongoose");

//设置 strictQuery 为 true
mongoose.set("strictQuery", true);

//3.链接 mongodb 服务
mongoose.connect("mongodb://192.168.88.128:27017/mongo");

//4.设置回调
//设置链接成功的回调    事件回调函数只执行一次
mongoose.connection.once("open", () => {
  console.log("链接成功");
  //app.listen(8080);
});
//设置链接失败的回调
mongoose.connection.on("error", () => {
  console.log("链接失败");
});
//设置链接关闭的回调
mongoose.connection.on("close", () => {
  console.log("链接关闭");
});

//关闭mongodb的链接
// setTimeout(() => {
//   mongoose.disconnect();
// }, 2000);
