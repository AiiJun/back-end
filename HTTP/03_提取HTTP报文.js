//1.导入http模块
const http = require("http");

//2.创建服务对象
const server = http.createServer((request,response) => {
    //获取请求的方法
    // console.log(request.method);
    //获取请求的url
    // console.log(request.url);
    //获取 HTTP 协议的版本号
    // console.log(request.httpVersion);
    //获取 HTTP 的请求头   获得单独的请求头内容  request.headers.host
    // console.log(request.headers);
    response.end('http')
});

//3.监听端口,启动服务
server.listen(9000,() => {
    console.log('服务已经启动....');
});