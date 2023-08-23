const fs = require("fs");

//stat 方法  status 状态  缩写
fs.stat('E:/视频/赛博朋克校园.mp4', (err, data) => {
  if (err) {
    console.log("操作失败");
    return;
  }
//   console.log(data);
  //   isFile    判断目标资源是否为文件
  console.log(data.isFile());
  //   isDirectory  判断目标资源是否为文件夹
  console.log(data.isDirectory());
});
