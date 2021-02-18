/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-15 11:54:26
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 09:33:26
 */
/**
 * @description: 原型链继承
 * 引用属性会被所有实例共享
 */
// 父类
// function Father(name, age) {
//   this.name = name||'unknown'
//   this.age = age||0
// }
// // 为父类新增一个方法
// Father.prototype.say = function () {
//   console.log("i am father");
// };
// // 子类
// function Son(name) {
//   this.name = name;
//   this.score = 99;
// }
// // 继承 注意,继承必须要写在子类方法定义的前面
// Son.prototype = new Father();
// // 为子类新增一个方法(在继承之后,否则会被覆盖)
// Son.prototype.study = function () {
//   console.log("i am studying");
// };
// const son = new Son("camus");
// console.log("", son.name);
// console.log(son.age);
// console.log("", son.score);
// son.say();
// son.study();

/**
 * @description: 构造函数继承
 * 构造函数解决了引用类型被所有实例共享的问题,
 * 但是引用类型为函数的时候，也没办法引用。就是功能一样，但是并非同一个函数。
 */
function Father(name) {
  this.name = name;
  this.say=function (params) {

  }
}
function Son(name) {
  Father.call(this, name);//子类中执行构造函数
}
const son1=new Father('dav')
const son2=new Father('camus')
console.log('son1',son1.name )//son1 dav
console.log('son2',son2.name )//son2 camus
console.log(son1.say === son2.say)//false

/*
! 原型链继承	Student.prototype = new Person()	实例的引用类型共享
! 构造函数继承	在子类(Student)里执行 Person.call(this)	实例的引用类型不共享
 */
