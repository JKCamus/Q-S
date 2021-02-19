/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-18 10:47:55
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 14:21:58
 */

function Father(name) {
  this.name = name || "camus";
}
Father.prototype.say = function () {
  console.log("saying something in ",this.name);
};

function Son(value) {
  Father.call(this,value);//不绑定value 则say中name拿不到
}

/**
 * @description:
 * @param {*} proto: 新创建对象的原型对象。
 * @param {*} propertiesObject: 可选参数   =>属性描述符
 * 类似构造器配置
 *
 * return 一个新对象，带着指定的原型对象和属性。
 */
// Object.create(proto，[propertiesObject])


Son.prototype = Object.create(Father.prototype, {
  constructor: {
    value: Son,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
const son1=new Son('max')
son1.say()
console.log('son1 instanceof Father', son1 instanceof Father)
console.log('', son1.constructor)

// Object.create()内部原理
// function object(o) {
//   function F() {}
//   F.prototype = o
//   return new F()
// }

// 字面量和new关键字创建的对象是Object的实例，原型指向Object.prototype，继承内置对象Object
// Object.create(arg, pro)创建的对象的原型取决于arg，arg为null，新对象是空对象，没有原型，不继承任何对象；arg为指定对象，新对象的原型指向指定对象，继承指定对象

