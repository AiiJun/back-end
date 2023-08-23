// 当把code文件夹中的02文件删除后,让02后面的每一个文件的序号都向前进

/**
 * 思路:
 * 1.先读取code文件夹
 * 2.将文件名进行拆分
 * 3.判断是哪一块的文件之间有空缺,就把离空缺最近的num比较大的文件名后面的内容进行遍历修改num值
 * 4.判断num值,依次给num附新值
 * 5.创建新文件名
 * 6.重命名
 */


const fs = require("fs");

//读取code 文件夹
const files = fs.readdirSync("./code");
console.log(files);

files.forEach((item) => {
  //拆分文件名
  let data = item.split("-");
  // console.log(data);
  let [num, name] = data;
  //判断
  if (Number(num) < 10) {
    num--;
    num = "0" + num;
  } else {
    num--;
    if (Number(num) < 10) {
      num = "0" + num;
    }
  }
  //创建新的文件名
  let newName = num + "-" + name;
  // console.log(newName);
  //重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`);
});
