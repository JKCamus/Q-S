// let a ={
//   age:18
// } 
// let b ={
//   ...a
// }
// a.age=2
// console.log(b.age);//18
// 但是不能应付对象里面嵌套对象
let a ={
  age:18,
  like:{
    first:'icecream'
  }
} 
let b={
  ...a
}

// let b=JSON.parse(JSON.stringify(a))
a.like.first = 'apple'
console.log(b);
console.log(a.like.first);//apple



