const fs = require("fs");

// fs.readFile("./观书有感.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString()); // 在回调函数内部输出文件内容
// });


//同步读取
let data = fs.readFileSync("./观书有感.txt");

console.log(data.toString());
