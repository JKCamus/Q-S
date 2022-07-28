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

console.log(array);

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

df "d"
