/*
 * @Description:
 * @version:this指向问题归纳
 * @Author: camus
 * @Date: 2021-02-13 11:12:34
 * @LastEditors: camus
 * @LastEditTime: 2021-02-13 11:19:16
 */
/**
 * @description: 通过对象的方式调用函数
 */
var obj = {
  name:'小鹿',
  age: '21',
  print: function(){
      console.log(this)  //打印整个对象=>{ name: '小鹿', age: '21', print: [Function: print] }
      console.log(this.name + ':' + this.age) //小鹿:21
  }
}
// 通过对象的方式调用函数，this指向obj
obj.print()

/**
 * @description:全局调用函数
 */
function print(){
	console.log(this);
}

print();   // this 指向 window


/**
 * @description: 通过new 的方式，this永远指向新创建的对象
 * @param {*} name
 * @param {*} age
 */
function Person(name,age){
  this.name = name
  this.age = age
  console.log(this) //Person { name: 'camus', age: 24 }
}
var camus = new Person('camus',28)// this = > camus
