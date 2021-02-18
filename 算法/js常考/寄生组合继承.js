/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-18 10:47:55
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 13:54:39
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
