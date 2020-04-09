// !冒泡排序
// 冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
/*时间复杂度：最优时间复杂度：O(n^2)
最坏时间复杂度：O(n)
稳定性：稳定 */
/* 空间复杂度：O(1) */
function bubble(array) {
  // 外循环为排序趟数，为array.length个数进行array.length-1趟
  for (let i = 0; i < array.length - 1; i++) {
    // 内循环为每趟比较的次数第i趟比较了array.length-i次
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // ES6两数值交换
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
}
let array = [1, 2, 3, -1, 6, 8, 9, 0, -112]
bubble(array)
console.log(array);

//* 拓展，传入一个函数，控制升序还是降序
function exBubble(arr,func){
  let len=arr.length
  while(len--){
    for(let i=0;i<len;i++){
      // 调用传入的函数，比较大小，交换值
      if(func(arr[i],arr[i+1])>0){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
      }
    }
  }
}
let arr1=[1, 2, 3, -1, 6, 8, 9, 0, -112]
let arr2=[1, 2, 3, -1, 6, 8, 9, 0, -112]
exBubble(arr1,(a,b)=>a-b)//升序
exBubble(arr2,(a,b)=>b-a)//降序
console.log(arr1);
console.log(arr2);
