const fs = require("fs");

//调用unlink方法     fs.unlink('删除的文件路径','回调')     unlinkSync
// fs.unlink('./观书有感.txt',err => {
//     if(err){
//         console.log('删除失败');
//         return
//     }
//     console.log('删除成功');
// })

//调用 rm 方法   14.4版本    rmSync
fs.rm("./论语.txt", (err) => {
  if (err) {
    console.log("删除失败");
    return;
  }
  console.log("删除成功");
});
