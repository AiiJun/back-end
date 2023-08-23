const fs = require("fs");

// 创建读取流对象
const rs = fs.createReadStream("E:/视频/凌晨四点半，温暖守夜人.mp4");

//绑定data事件，  chunk  块儿   大块儿
rs.on("data", (chunk) => {
  console.log(chunk);
  console.log(chunk.length); //65536 字节  =>  64KB
//   console.log(chunk.toString()); //乱码输出
});


rs.on('end',() => {
   console.log('读取完成');
})