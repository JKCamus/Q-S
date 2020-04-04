//!遍历
function reverseArray(arr){
  // length为一半
  for(let i=0;i<arr.length/2;i++){
    // 索引长度注意arr.length-1-i
    [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]]
  }
  return arr
}
let arr1=[1,2,2,34,-2,0]
console.log(reverseArray(arr1));//[ 0, -2, 34, 2, 2, 1 ]

//!reverse方法

let arr2=[1,2,2,34,-2,0]
console.log(arr2.reverse());

