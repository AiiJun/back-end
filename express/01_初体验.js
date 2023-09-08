//1.导入 express
const express = require("express");

//2.创建应用对象
const app = express();

//3.创建路由
app.get('/home',(req, res) => {
    res.end('hello express');
});

app.get('/login',(req, res) => {
    res.end('Login!!');
});

//4.监听端口,启动服务
app.listen(3000,() => {
    console.log('3000服务,启动!!');
})