/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-18 10:14:29
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 10:43:09
 */
// 父类
function Father(name) {
  this.name =name||'camus'
  this.emotion=['喜','怒']

}
// 父类函数
Father.prototype.say=function () {
  console.log('saying something', )
}
// 子类
function Son() {
  Father.call(this)//构造函数继承，继承属性
}
Son.prototype=new Father()//原型链继承，继承方法
Son.prototype.constructor = Son;//可不要

const son1=new Son('dav')
const son2=new Son()
son1.emotion.push('乐')
// 引用类型修改，不改变
console.log('son1=>', son1.emotion) //son1=> [ '喜', '怒', '乐' ]
console.log('son1=>', son2.emotion)//son1=> [ '喜', '怒' ]
console.log('函数是否相同', son1.say===son2.say)//true
console.log('son', son1.constructor)

