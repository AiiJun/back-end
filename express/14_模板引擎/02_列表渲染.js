//西游记
const xiyou = ["唐僧", "孙悟空", "猪八戒", "沙僧"];
const ejs = require("ejs");
const fs = require("fs");

//原生JS
// let str = "<ul>";
// xiyou.forEach((item) => {
//   str += `<li>${item}</li>`;
// });
// //闭合 ul
// str += "</ul>";
// console.log(str);

//使用ejs渲染
let html = fs.readFileSync("./02_xiyou.html").toString();
let result = ejs.render(html, { xiyou });

console.log(result);
