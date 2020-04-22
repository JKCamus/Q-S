// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// let twoSum = (nums, target) => {
//   let targetMap = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     const key = target - nums[i]
//     if (targetMap.has(key)) {
//       return [targetMap.get(key), i]
//     }
//     targetMap.set(nums[i], i)
//   }
// }
// twoSum([5, 2, 11, 15, 7, 6], 9)
// console.log(twoSum([5, 2, 11, 15, 7, 6], 9));


// 普通写法
// var twoSum = function(nums, target) {
//   let targetMap = {}
//   for (let i = 0; i < nums.length; i++) {
//     // 该元素对应的另一个元素,作为键名
//     let key = target - nums[i]
//     // 如果存在该值，则之前存在对应的另一个值
//     if (targetMap[key] || targetMap[key] === 0) {
//       return [targetMap[key], i]
//     }
//     // 建立映射关系
//     targetMap[nums[i]] = i
//   }
// }
// twoSum([5, 2, 11, 15, 7, 6], 9)

/**
 *array.
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var sum = (function () {
  var list = [];
  var add = function () {
    // 拼接数组
    // console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    list = list.concat(args);
    // console.log(list);
    console.log(add);
    
    return add;
  }
  // 覆盖 toString 方法
  add.toString = function () {
    // 计算总和
    var sum = list.reduce(function (pre, next) {
      return pre + next;
    });
    // 清除记录
    list.length = 0;
    return sum;
  }
  return add;
})();
var s = sum(2, 3, 4)(3)(1, 2);
console.log(s.toString());
console.log(sum(2, 3, 4).toString());
console.log(sum(2, 3, 4).toString());
console.log(sum(2)(3)(4).toString());
console.log(sum(2)(3)(4).toString());