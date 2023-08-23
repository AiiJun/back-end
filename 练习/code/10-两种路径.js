const fs = require('fs')


//相对路径    ./当前路径  ../上一级路径
// fs.writeFileSync('./index.html','love')
// fs.writeFileSync('index.html','love')
// fs.writeFileSync('../index.html','love')

//绝对路径   对于C盘、系统盘等需要权限
// fs.writeFileSync('D:/index.html','love')