const fs = require("fs");

const process = require("process"); //nodejs内置模块  =>   查看程序运行时的内存占用量

// 方式一  readFile
// //读取文件内容
// let data = fs.readFileSync('E:/视频/凌晨四点半，温暖守夜人.mp4')
// //写入文件
// fs.writeFileSync('E:/视频/凌晨四点半，温暖守夜人_2.mp4',data)
// console.log(process.memoryUsage());      //    rss  37113856 字节    35MB

//方式二   流式操作
//创建读取流对象
const rs = fs.createReadStream("E:/视频/凌晨四点半，温暖守夜人.mp4");

//创建写入流对象
const ws = fs.createWriteStream("E:/视频/凌晨四点半，温暖守夜人_3.mp4");

//绑定data事件
// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log(process.memoryUsage());  
// });

rs.pipe(ws)   //pipe  管道    将读取流的信息读取传给写入流