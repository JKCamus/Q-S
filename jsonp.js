// import originJsonp from 'jsonp'

// export default function jsonp(url, data, option) {
//     url += (url.indexOf('?')<0 ? "?" : "&") + param(data)

//     return new Promise((resolve, reject) => {
//         originJsonp(url, option, (err, data) => {
//             if (!err) {
//                 resolve(data)
//             }else {
//                 reject(err)
//             }
//         })
//     })
// }

// function param(data) {
//     let url = ''
//     for (var k in data) {
//         let value = data[k] !== undefined ? data[k] : ''
//                 url += '&' + k + '=' + encodeURIComponent(value)
//     }

//     return url ? url.substring(1) : ''
// }
let arr1 = [12, 103, 12, 82, 2, 2, 2, 2, 2, 3, 3, 4]
// arr1.sort()
// console.log(arr1.sort((a, b) => a - b));

// function bubble(arr) {
//   let len = arr.length
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
// }
// bubble(arr1)
// console.log(arr1);
// exBubble(arr1,(a,b)=>b-a)
//  console.log(arr1);
 
// function exBubble(arr,func){
//   let len=arr.length
//   while(len--){
//     for(let i=0;i<len;i++){
//       if(func(arr[i],arr[i+1])>0){
//         [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//       }
//     }
//   }
// }

// var new1=function(func){
//   var ob=Object.create(func.prototype)
//   var k=func.call(ob)
//   if(k&&typeof k==='object'){
//     return k
//   }else{
//     return ob
//   }
// }
