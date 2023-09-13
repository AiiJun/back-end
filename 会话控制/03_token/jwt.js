//导入 jwt
const jwt = require("jsonwebtoken");

//创建(生成)token
// let token = jwt.sign(用户数据, 加密字符串, 配置对象);
// let token = jwt.sign(
//   {
//     username: "zhangsan",
//   },
//   "AiiJun",
//   {
//     expiresIn: 60, //单位是秒
//   }
// );
// console.log(token);

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNjk0NTkwMzcxLCJleHAiOjE2OTQ1OTA0MzF9.cONPiclR6VesTnR0JksrSrMPprEwISeRHzgKIbD-TWQ";

//校验token
jwt.verify(token, "AiiJun", (err, data) => {
  if (err) {
    console.log("效验失败");
  }
  console.log(data);
});
