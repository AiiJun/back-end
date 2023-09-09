var express = require("express");
var router = express.Router();
// 导入 formidable 模块
const formidable = require("formidable");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 显示网页的(表单)
router.get("/portrait", (req, res) => {
  res.render("portrait");
});

// 处理文件上传
router.post("/portrait", (req, res) => {
  //此处安装的formidable版本为2.1.1
  // 创建 formidable 对象
  const form = formidable({
    multiples: true,
    //设置文件上传位置
    uploadDir: path.resolve(__dirname + "/../public/images"),
    //保持文件后缀
    keepExtensions: true,
  });
  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    // console.log(fields);//text   radio   checkbox   select
    // console.log(files);//file
    //服务器保存该图片的访问URL
    // /images/0814346479afe2925a5258d00.jepg
    let url = '/images/' + files.portrait.newFilename;//将来将此数据保存在数据库中
    res.send(url);
  });
});

module.exports = router;
