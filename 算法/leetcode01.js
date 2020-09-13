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
/*//! leetCode03 */
// let s = "abcabcbb";

// var lengthOfLongestSubstring = function (s) {
//   let aye = [];
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     let index = aye.indexOf(s[i]);
//     if (index !== -1) {
//       aye.splice(0, index + 1);
//     }
//     aye.push(s.charAt(i));
//     console.log('aaa', aye)
//     max = Math.max(aye.length, max);
//   }
//   return max;
// };

// let res = lengthOfLongestSubstring(s);
// console.log("res", res);
/*  */

//!leetCode 05
let s = "babad";
var longestPalindrome = function (s) {
  /* 长度小于2直接返回 */
  if (s.length < 2) {
    return s;
  }
  /* 设置设置标记点&&和记录最长的回文长度 */
  let start = 0;
  /* ab 最长回文长度不是0，而是1，所以最长回文长度为1 ，并且当字符串长度小于1的情况时，
  前面是直接返回的，所以不会出错*/
  let maxLength = 1;
  /* 创建一个扩散函数，判断左边的字符串是否等于右边的字符串*/
  function expandAroundCenter(left, right) {
    /* 边界判断 */
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      /* [1,2,3]数组的长度为其下标值，left=0 right=2 长度就是2-0+1*/
      if (right - left + 1 > maxLength) {
        /* 更新标志位及长度 */
        maxLength = right - left + 1;
        start = left;
      }
      left -= 1;
      right += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    /* 循环两遍 */
    expandAroundCenter(i - 1, i + 1);
    /* 避免特殊情况，即，回文中心bb类的情况，例如babbac的 */
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLength);
};
let res = longestPalindrome(s);
console.log("res", res);
// console.log('ssssssss',[ 'b', 'a', 'b', 'a' ].splice(0,1) )
