//导入 express
const express = require("express");

//创建应用对象
const app = express();

//创建路由
app.get("/other", (req, res) => {
    //跳转响应
    // res.redirect('http://baidu.com')
    //下载响应
    // res.download(__dirname + '/package.json')
    //JSON 响应
    // res.json({
    //     name:'大名',
    //     slogon:'我是谁'
    // })
    //响应文件内容
    res.sendFile(__dirname + '/test.html');// path.resolve()
});

//监听端口,启动服务
app.listen(3000, () => {
  console.log("3000服务,启动!!");
});
