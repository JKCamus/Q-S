/*
 * @Description:关于this的总结，注意node环境和浏览器环境不一样。
 * @version:
 * @Author: camus
 * @Date: 2021-03-17 21:34:59
 * @LastEditors: camus
 * @LastEditTime: 2021-03-17 22:03:59
 */
// 习题一
// let obj = {
//   a: function() {
//     console.log(this)
//   },
//   b: () => {
//     console.log(this)
//   }
// }
// let a = obj.a
// obj.a()     // obj
// obj.b()     // window
// a()         // window
// new obj.a() // {}
// new obj.b() // error 箭头函数不能作为构造函数

// 'use strict'
var a = 1;
var obj = {
  a: 2,
  print: function () {
    console.log(this.a);
  },
};
console.log(obj.print());
var print = obj.print;
print();
// 去掉use strict后
// 2
// undefined
// 1
// undefined
function F() {
  this. a = 1;
  }
  var f = new F();
  console. log( f. prototype)
