// //! 组合继承
// //* 1父类属性
// function Father(){
//   this.hobbies=['sing','jump','rap']
// }
// //* 2父类函数
// Father.prototype.say=function(){
//   console.log('i am your father');
// }
// //*3子类构造继承属性
// function Son(){
//   Father.call(this)//构造函数继承属性
// }
// //*4子类继承方法
// Son.prototype=new Father()//原型实例继承方法
// //* 5子类实例
// let son1=new Son()
// let son2=new Son()
// son1.hobbies.push('basketball')

// console.log(son1.hobbies);//["sing", "jump", "rap", "basketball"]
// console.log(son2.hobbies);//["sing", "jump", "rap"]

// console.log(son1.say===son2.say);//true
// console.log(son1 instanceof Father);
//? 组合构造函数缺点,父类构造函数里面的代码会执行2遍,第一遍是在原型继承的时候实例化父类, 第二遍是在子类的构造函数里面借用父类的构造函数

// //! 寄生组合继承
// // 1父类属性
// function Parent(value) {
//   this.val = value
// }
// // 2父类原型
// Parent.prototype.getValue = function() {
//   console.log(this.val)
// }
// // 3子类构造继承属性
// function Child(value) {
//   Parent.call(this, value)
// }
// // 4子类继承
// Child.prototype = Object.create(Parent.prototype, {
//   constructor: {
//     value: Child,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })

// const child = new Child(1)

// child.getValue() // 1
// child instanceof Parent // true
// // console.log(child.getValue());

//!class继承
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val);
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
    this.val = value
  }

}
let child = new Child(1)
child.getValue()
console.log(child instanceof Parent);
