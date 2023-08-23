// console.log('hello Node.js');
// console.log(Buffer.alloc(10));
// console.log(Buffer.allocUnsafe(10000));
// console.log(Buffer.from('hello'));
// console.log(Buffer.from([105,108,111,118,101,121,111,117]));
// console.log(Buffer.from([105,108,111,118,101,121,111,117]).toString());
const buf = Buffer.from('hello');
console.log(buf[0].toString(2));