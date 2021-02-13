/*
 * @Description:
 * @version:this指向问题归纳
 * @Author: camus
 * @Date: 2021-02-13 11:12:34
 * @LastEditors: camus
 * @LastEditTime: 2021-02-13 11:34:16
 */
/**
 * @description: 通过对象的方式调用函数
 */
// var obj = {
//   name:'camus',
//   age: '21',
//   print: function(){
//       console.log(this)  //打印整个对象=>{ name: 'camus', age: '21', print: [Function: print] }
//       console.log(this.name + ':' + this.age) //camus:21
//   }
// }
// // 通过对象的方式调用函数，this指向obj
// obj.print()

/**
 * @description:全局调用函数
 */
// function print(){
// 	console.log(this);
// }

// print();   // this 指向 window

/**
 * @description: 通过new 的方式，this永远指向新创建的对象
 * @param {*} name
 * @param {*} age
 */
// function Person(name,age){
//   this.name = name
//   this.age = age
//   console.log(this) //Person { name: 'camus', age: 24 }
// }
// var camus = new Person('camus',28)// this = > camus

/**
 * @description: 箭头函数this指向问题，箭头函数没有单独的this值，其this与声明所在的上下文相同。
 * 调用箭头函数的时候，不会隐式调用this参数，而是从定义时的函数继承上下文
 */
// const obj = {
//   print:()=>{
//       console.log(this);
//   }
// }
// // 对象调用箭头函数
// obj.print(); // window   在浏览器里面是Window，但是node环境中，为{}

/**
 * @description: 改变this的指向，可以通过调用函数的call、apply、bind来改变this指向
 */
var obj = {
  name: "camus",
  age: "22",
  address: "China",
};

function print() {
  console.log(this); // 打印 this 的指向
  console.log(arguments); // 打印传递的参数
}

// 通过 call 改变 this 指向
print.call(obj, 1, 2, 3);

// 通过 apply 改变 this 指向
print.apply(obj, [1, 2, 3]);

// 通过 bind 改变 this 的指向
let fn = print.bind(obj, 1, 2, 3);

const bindFunc = print.bind(obj, [1, 2, 3]);

fn();
// { name: 'camus', age: '22', address: 'China' }
// [Arguments] { '0': 1, '1': 2, '2': 3 }
bindFunc();
// { name: 'camus', age: '22', address: 'China' }
// [Arguments] { '0': [ 1, 2, 3 ] }
/**
 * !conclusion:
 * 共同點：三者都能改变this指向，且第一个参数都是this指向的对象，三者都采用后续传参的形式
 * 不同点：call的传参是单个传递，apply后续参数是数组形式，bind都可以
 *        call和apply是直接执行，bind会返回一个函数，在调用时才会执行
 * 箭头函数不能用call，apply改变this指向，因为他没有自己的this指向，如果用call，apply只会传递后续参数
 */
