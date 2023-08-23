const fs = require("fs");

const path = require("path");
//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love');
// console.log(__dirname + '/index.html');

//resolve  解决
// path.resolve(__dirname, './index.html');
// console.log(path.resolve(__dirname, './index.html'));

//sep  分隔符
// console.log(path.sep);// window \   Linux  /

//parse  方法  __dirname '全局变量'
// console.log(__filename);  //文件的绝对路径
let str = `E:\\文档\\vscodeworkspace\\nodejs学习\\PATH\\path.js`;
// console.log(path.parse(str));

//basename  获取路径的基础名称
// console.log(path.basename(str));

//dirname   获取路径的目录名
// console.log(path.dirname(str));

//extname   获取路径的扩展名
console.log(path.extname(str));
