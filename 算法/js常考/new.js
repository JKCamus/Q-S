/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-13 23:09:49
 * @LastEditors: camus
 * @LastEditTime: 2021-02-13 23:31:43
 */
// new 生成对象的过程
// 1、生成新对象
// 2、链接到原型
// 3、绑定 this
// 4、返回新对象
/**
 * @description:
 * @param {*} Con 构造函数
 * @param {array} args 传入构造函数的参数
 */
// function create(Con, ...args) {
//   // 1. 创造空对象
//   const obj = {};
//   obj._proto_ = Con.prototype;
//   // 綁定this并执行构造函数(链接对象的原型)
//   let result = Con.apply(obj, args);
//   return result instanceof Object ? result : obj;
// }

// function Test(name, age) {
//   this.name = b = name;
//   this.age = age;
// console.log('this', this)
// }
// const test = create(Test, "camus", 28);
// console.log("test", test.name);
/**
 * @description:
 * @param {*} Con
 * @param {array} args
 */
function create(Con, ...args) {
  // 1. 创造空对象
  const obj = {};
  Object.setPrototypeOf(obj, Con.prototype);
  // 綁定this并执行构造函数(链接对象的原型)
  let result = Con.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function Test(name, age) {
  this.name = name;
  this.age = age;
  console.log("this", this);
}
Test.prototype.askName = function () {
  console.log("name is", this.name);
};
const val = create(Test, "camus", 28);
const test=new Test("camus", 28)
console.log("val.name", val.name);
console.log("val.age", val.age);
val.askName();

console.log("test.name", test.name);
console.log("test.age", test.age);
test.askName();
