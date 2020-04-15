// function getA(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       // resolve(2)
//       console.log('A');
      
//     },1000)
//   })
// }
// function getB(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       // resolve(2)
//       console.log('B');
      
//     },2000)
//   })
// }
// 链式调用
// const p1 =new Promise((resolve)=>{
//   console.log('start');
//   resolve()
// }).then(getA()).then(getB())
// 并发请求
// const p2=Promise.all([getA,getB])
// .then((res)=>{
//   console.log(res);
  
// })
let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise1参');
    console.log("promise1");
  },1000);
})
let p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise2参');
    console.log("promise2");
  },3000);
})
// 并发
// Promise.all([p1,p2]).then((result)=>{
//   console.log(result);
// })
// // 链式
// const p3 =new Promise((resolve)=>{
//   console.log('start');
//   resolve()
// }).then(p1).then(p2)

// // race
// Promise.race([p1,p2]).then((res)=>{
//   console.log(res);
// })
// finally就是不管有没有错误都会进行有结果
/* 
start
promise1
!Promise1参
promise2
[ 'Promise1参', 'Promise2参' ]
*/

// async function p4(){
//   console.log('kias ');
  
//   await p1
//   console.log('1miao');
  
// }
// p4()