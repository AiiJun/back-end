//1.导入 express
const express = require("express");

//2.创建路由对象
const router = express.Router();

//3.创建路由规则
router.all("*", (req, res) => {
  res.send("<h1>404 not Found</h1>");
});

//4.暴露 router
module.exports = router;
