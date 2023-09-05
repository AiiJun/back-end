//导入http模块
const http = require("http");

//创建服务对象
const server = http.createServer((request,response) => {
    //1.设置响应状态码
    // response.statusCode = 200;
    //2.响应状态的描述
    // response.statusMessage = 'i love you';
    //3.响应头
    // response.setHeader('content-type','text/html;charset=utf-8');
    // response.setHeader('Server','Node.js');
    // response.setHeader('myHeader','test test test');
    //3.1 同名响应头
    // response.setHeader('test',['a','b','c']);
    //4.响应体的设置
    response.write('love 4\r\n');
    response.write('love 3\r\n');
    response.write('love 2\r\n');
    response.write('love 1\r\n');
    response.end();// 设置响应体
    // response.end('love');// 设置响应体
    // response.end('response');// 设置响应体
});

//监听端口,启动服务
server.listen(9000,() => {
    console.log('服务已经启动....');
});