

const fs = require('fs')

//调用rename方法
// fs.rename('./座右铭.txt','./论语.txt', err => {
//     if(err){
//         console.log('操作失败');
//         return
//     }
//     console.log('操作成功');
// })


//文件的移动
fs.rename('./data.txt','../data.txt', err => {
    if(err){
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})

// rename同步版本   fs.renameSync('旧数据','新数据')
fs.renameSync('../data.txt','./data.txt')