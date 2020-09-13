/* 两数求和，使用逆向思维 ，但是只能返回一个答案*/
/* // !解法1
// let nums = [2, 7, 11, 15];
// let target = 9;
let nums = [3, 2, 4, 15];
let target = 6;
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    let j = nums.indexOf(rest);
    if (j >= 0 && i != j) {
      return [i, j];
    }
    // return [];
  }
};

console.log("rrrr", twoSum(nums, target)); */
// !解法2
// let nums = [3, 2, 4, 15,5,1];
// let target = 6;
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };
// console.log('rrrr', twoSum(nums,target))

//! /*!leetCode 02 addTwoNumbers*/
// // let num = 1222;
// // let red = `${1222}`.split("").map(Number);
// // let aj = new ListNode(null);
// class ListNode {
//   constructor(val) {
//     this.val = val;
//     this.next = undefined;
//   }
// }
// const getListFromArray = (a) => {
//     let dummy = new ListNode()

//     let pre = dummy;
//     a.forEach(x => pre = pre.next = new ListNode(x));
//     return dummy.next;
// }
// var addTwoNumbers = function (l1, l2) {
//   let dummy = new ListNode();
//   let current = dummy;
//   let carry = 0;
//   while (l1 !== null || l2 !== null) {
//     let sum = 0;
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     sum += carry;
//     /* 将新值塞生成新节点，并贴到原来的节点上 ，求余得到该位的值*/
//     current.next = new ListNode(sum % 10);
//     /* 通用方法，获得进位数 */
//     carry = Math.floor(sum / 10);
//     current = current.next;
//   }
//   if (carry > 0) {
//     current.next = new ListNode(carry);
//   }
//   return dummy.next;
// };

// let l1 = [2, 4, 3];
// let l2 = [5, 6, 4];
// // console.log("2222", addTwoNumbers(getListFromArray(l1), getListFromArray(l2)))
// console.log('22', getListFromArray(l1).val)
let s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let aye = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = aye.indexOf(s[i]);
    if (index !== -1) {
      aye.splice(0, index + 1);
    }
    aye.push(s.charAt(i));
    console.log('aaa', aye)
    max = Math.max(aye.length, max);
  }
  return max;
};

let res = lengthOfLongestSubstring(s);
console.log("res", res);
