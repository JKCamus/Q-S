/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-22 20:36:53
 * @LastEditors: camus
 * @LastEditTime: 2021-01-23 10:58:51
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
var name = "Jay";
function Person(name) {
  this.name = name;
  console.log(this.name);
}
var a = Person("Tom");
console.log("r", name);
console.log("2", a);
var b = new Person("Michael");
// console.log('', b)
// 找到最多的元素
function findMost(arr) {
  if (!arr.length) return;
  if (arr.length === 1) return 1;
  let maxName,
    maxNum = 0;
  let res = arr.reduce((res, currentNum) => {
    res[currentNum] ? (res[currentNum] += 1) : (res[currentNum] = 1);
    if (res[currentNum] > maxNum) {
      maxNum = res[currentNum];
      maxName = currentNum;
    }
    return res;
  }, {});
  return "出现次数最多的元素为:" + maxName + ", 出现次数为:" + maxNum;
}

const str = "jshdjsihh";
const obj = str.split("").reduce((pre, item) => {
  pre[item] ? pre[item]++ : (pre[item] = 1);
  return pre;
}, {});
console.log(obj); // {j: 2, s: 2, h: 3, d: 1, i: 1}
