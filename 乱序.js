// function shuffle(arr) {
//   for (let i = arr.length; i; i++) {
//     let j = Math.floor(Math.random() * i)[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
//   }
//   return arr
// }
// var times = 100000;
// var res = {};

// for (var i = 0; i < times; i++) {
//   var arr1 = shuffle([1, 2, 3]);

//   var key = JSON.stringify(arr1);
//   res[key] ? res[key]++ : res[key] = 1;
// }

// // 为了方便展示，转换成百分比
// for (var key in res) {
//   res[key] = res[key] / times * 100 + '%'
// }

// console.log(res)
// sort乱排
let arr=[1,2,3,4,5]
let res=arr.sort(()=>{
  return Math.random()-0.5
})
console.log(res);
// sort应用
const arr = [1, [1,2], [1,2,3]]
arr.flat(Infinity).sort((a,b)=>{
return a-b
})