/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-02-18 15:55:47
 * @LastEditors: camus
 * @LastEditTime: 2021-02-18 16:19:37
 */
class Parent {
  constructor(value){
    this.val=value
  }
  say(){
    console.log('', this.val)
  }
}
// 子类继承父类
class Child extends Parent{
  constructor(value){
    super(value)
    this.val=value
  }
}

const child=new Child('hey')
child.say()
console.log('', child instanceof Parent)
