/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-15 11:54:26
 * @LastEditors: camus
 * @LastEditTime: 2021-02-15 18:24:32
 */
/**
 * @description: 原型继承
 */
// 父类
function Father(name, age) {
  this.name = name||'unknown'
  this.age = age||0
}
// 为父类新增一个方法
Father.prototype.say = function () {
  console.log("i am father");
};
// 子类
function Son(name) {
  this.name = name;
  this.score = 99;
}
// 继承 注意,继承必须要写在子类方法定义的前面
Son.prototype = new Father();
// 为子类新增一个方法(在继承之后,否则会被覆盖)
Son.prototype.study = function () {
  console.log("i am studying");
};
const son = new Son("camus");
console.log("", son.name);
console.log(son.age);
console.log("", son.score);
son.say();
son.study();
