//导入
const m = require("./module");
console.log(m);

/**
 * 如果导入的路径是个文件夹,则会首先检测该文件夹下package.json 文件中main属性对应的文件,
 * 如果存在则导入,反之如果文件不存在咋会报错.
 * 如果main属性不存在,或者package.json不存在,则会尝试导入文件夹下的index.js和index.json,
 * 如果还是没找到,就会报错
 */


// 导入nodejs内置的模块时,直接require模块的名字即可,无需加./和../