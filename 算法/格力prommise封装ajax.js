/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-22 20:36:53
 * @LastEditors: camus
 * @LastEditTime: 2021-01-22 21:10:56
 */
// var onSuccess = function(result){}; //成功的回调
// var onFail = function(error){}; //失败的回调
// var req = new XMLHttpRequest();
// req.open("POST", "www.baidu.com", true);
// req.onload = function(){
//   if(req.readyState === 4 && req.status === 200){
//     onSuccess(req.response);
//   } else {
//     onFail(req.statusText);
//   }
// }
// req.onerror = function(){
//   onFail(Error("网络异常"));
// }
// const ajax = (url) => {
//   return new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.open("POST", url, true);
//     req.onload = () => {
//       if (req.readyState === 4 && req.status === 200) {
//         resolve(req.response);
//       } else {
//         reject(req.statusText);
//       }
//     };
//     req.onerror = () => {
//       reject(Error("网络异常"));
//     };
//   });
// };

//
var name ='Jay'
function Person(name) {
  this.name=name
  console.log(this.name )
}
var a =Person('Tom')
console.log('r', name)
console.log('2', a)
var b=new Person('Michael')
// console.log('', b)

