/**
 * 搭建HTTP服务,响应一个4行3列的表格,并且要求表格有'隔行换色效果',且'点击'单元格能'高亮显示'
 *
 */

//导入http模块
const http = require("http");
const fs = require('fs')

//创建服务对象
const server = http.createServer((request, response) => {
    //读取文件内容
    let html = fs.readFileSync(__dirname + '/3-table.html')
  response.end(html);//设置响应体
});

//监听端口,启动服务
server.listen(9000, () => {
  console.log("服务已经启动....");
});
