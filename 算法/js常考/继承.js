/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-15 11:54:26
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 10:02:09
 */
// 原始类型(6个)
// String
// Number
// Null
// Undefined
// Symbol
// Boolean
// 引用类型(对象类型)(5个)
// Object
// Array
// Function
// Date
// RegExp



/**
 * @description: 原型链继承
 * 引用属性会被所有实例共享
 * 当实例中存在和原型对象上同名的属性时，会自动屏蔽原型对象上的同名属性。
 * 原型对象上引用类型的值可以通过实例进行修改，致使所有实例共享着的该引用类型的值也会随之改变
 * 在实例上设置与原型对象上同名属性的值，只会在实例上创建一个同名的本地属性。
 */
// 父类
function Father(name, age) {
  this.name = name||'unknown'
  this.age = age||0
  this.emotion=['喜','怒']
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
//* fix 找出不足
son.score=100
son.emotion.push('乐')
console.log('son.score=>', son.score)//son.score=> 100
console.log('son.emotion=>', son.emotion)//son.emotion=> [ '喜', '怒', '乐' ]

const son1=new Son('dav')
console.log('son1.score=>',son1.score )//son1.score=> 99
console.log('son1.emotion=>', son1.emotion)//son1.emotion=> [ '喜', '怒', '乐' ]

//? 当实例中存在和原型对象上同名的属性时，会自动屏蔽原型对象上的同名属性,当前实例访问的是本地属性
//? 原型对象上引用类型的值可以通过实例进行修改，致使所有实例共享着的该引用类型的值也会随之改变。


/**
 * @description: 构造函数继承
 * 构造函数解决了引用类型被所有实例共享的问题,
 * 每个子类实例都会拷贝一份父类构造函数中的方法，作为实例自己的方法
 * 导致引用类型为函数的时候，也没办法引用。就是功能一样，但是并非同一个函数。
 * 当需求更改时，要改动方法时，之前继承的该方法得不到更新，只有后面的的实例才能访问到该方法
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

