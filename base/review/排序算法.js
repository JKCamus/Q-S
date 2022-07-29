const bubbleSort = (list, func) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length-i-1; j++) {
      if (func(list[j], list[j + 1])>0) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
};

let array = [1, 2, 3, -1, 6, 8, 9, 0, -112];
bubbleSort(array, (a, b) => b - a); //升序

// console.log(array);

const exBubble = (arr, func) => {
  let len = arr.length
  while (len--) {
    for (let i = 0; i < len; i++) {
      if (func(arr[i], arr[i + 1])>0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
};

const quickSort=(arr)=>{
  if(!arr||arr.length<2)return arr
  const pivot=arr.pop()
  const left=arr.filter(item=>item<pivot)
  const right=arr.filter(item=>item>=pivot)
  return [...quickSort(left),pivot,...quickSort(right)]
}
let array1 = [1, 2, 3, -1, 6, 8, 9, 0,0,1, -112];

console.log('arr',quickSort(array1));
