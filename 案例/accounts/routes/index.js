var express = require("express");
var router = express.Router();
//导入lowdb
const low = require("lowdb");
//导入shortid
const shortid = require("shortid");

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(__dirname + "/../data/db.json");
//获取数据对象
const db = low(adapter);

//记账本的列表
router.get("/account", function (req, res, next) {
  //获取所有的账单信息
  let accounts = db.get("accounts").value();
  res.render("list", { accounts });
});

//添加记录
router.get("/account/create", function (req, res, next) {
  res.render("create");
});

//新增记录
router.post("/account", (req, res) => {
  //生成id
  let id = shortid.generate();
  //写入文件
  db.get("accounts")
    .push({ id, ...req.body })
    .write();
  // db.get("accounts").unshift({ id, ...req.body }).write();
  res.render("success", { msg: "添加成功", url: "/account" });
});

//删除记录
router.get("/account/:id", (req, res) => {
  let id = req.params.id;
  //写入文件
  db.get("accounts").remove({ id }).write();
  res.render("success", { msg: "删除成功", url: "/account" });
});

module.exports = router;
