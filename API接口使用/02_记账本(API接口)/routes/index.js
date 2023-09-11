var express = require("express");
var router = express.Router();
//导入lowdb
const low = require("lowdb");
//导入moment
const moment = require("moment");

const AccountModel = require("../model/AccountModel");

//测试moment
console.log(moment(new Date()).toDate());
//格式化日期对象
console.log(moment(new Date()).format("YYYY-MM-DD"));

//记账本的列表
router.get("/", function (req, res, next) {
  //获取数据库中的账单信息
  AccountModel.find()
    .sort({ time: -1 })
    .exec((err, data) => {
      if (err) {
        res.status(500).send("读取失败");
        return;
      }
      //成功提醒
      res.render("list", { accounts: data, moment: moment });
    });
});

//添加记录
router.get("/create", function (req, res, next) {
  res.render("create");
});

//新增记录
router.post("/account", (req, res) => {
  //插入数据库
  AccountModel.create(
    {
      ...req.body,
      //修改time属性的值  使用moment将日期转为日期对象
      time: moment(req.body.time).toDate(),
    },
    (err, data) => {
      if (err) {
        res.status(500).send("插入失败");
        return;
      }
      //成功提醒
      res.render("success", { msg: "添加成功", url: "/" });
    }
  );
});

//删除记录
router.get("/account/:id", (req, res) => {
  let id = req.params.id;
  AccountModel.deleteOne({ id }, (err, data) => {
    if (err) {
      res.status(500).send("删除失败");
      return;
    }
    //成功提醒
    res.render("success", { msg: "删除成功", url: "/" });
  });
});

module.exports = router;
