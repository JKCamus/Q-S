/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-03 16:24:55
 * @LastEditors: camus
 * @LastEditTime: 2021-03-03 16:33:44
 */
String("11") == new String("11");
String("11") === new String("11");
var str1 = String("11");
var str2 = new String("11");
str1 == str2; // true
str1 === str2; // false
typeof str1; // "string"
typeof str2; // "object"
// ==时做了隐式转换，调用了toString
// == 的时候，实际运行的是
// String('11') == new String('11').toString();
// 2者类型不一样，一个是string，一个是object

var name = "Tom";
(function () {
  // IIFE内的var穿透了块作用域，name被提升至if()之前，且此时name为undefined。
  // var通常会发生变量提升，先进行声明，所以为undefined
  console.log("name", name);
  if (typeof name == "undefined") {
    var name = "Jack";
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
})();
// let声明的变量仅仅在自己的块级作用域起作用，出了这个块级作用域就不起作用

var name = "Tom";
(function () {
  console.log("name", name); //name tom
  if (typeof name == "undefined") {
    let name = "Jack";
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
})();
