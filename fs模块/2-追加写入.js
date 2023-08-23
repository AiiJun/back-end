const fs = require('fs')

// fs.appendFile('./座右铭.txt',',择其善者而从之,择其不善者而改之','',err => {
//     if(err){
//         console.log('写入失败');
//         return
//     }
//     console.log('追加写入成功');
// })


// fs.appendFileSync('./座右铭.txt','\n温故而知新,可以为师矣')


//writeFile 实现追加写入    flag 模式  a:append   w:write    r:read
fs.writeFile('./座右铭.txt','\ri love you',{flag:'a'},err => {
    if(err){
        console.log('写入失败');
        return
    }
    console.log('写入成功');
})