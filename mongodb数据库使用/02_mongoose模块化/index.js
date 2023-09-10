//导入 db 文件
const db = require("./db/db");
//导入mongoose
const mongoose = require("mongoose");
//导入BookModel文件
const BookModel = require("./models/BookModel");

//调用函数
db(
  () => {
    //新增
    BookModel.create(
      {
        name: "红楼梦",
        author: "曹雪芹",
        price: 19.9,
      },
      (err, data) => {
        //判断是否有错误
        if (err) {
          console.log(err);
          return;
        }
        //如果没有出错,则输出插入后的文档对象
        console.log(data);
        //关闭数据库链接(项目运行过程中,不会添加该代码)
        mongoose.disconnect();
      }
    );
  },
  () => {
    console.log("连接失败");
  }
);
