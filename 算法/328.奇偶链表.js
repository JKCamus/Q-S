/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  // 链表判空，当为不是直接返回而是返回head
  // 比如当链表为[]则直接返回为undefined
  if (head === null) return head;
  if (head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  // 边界判定由奇数位在前，偶数位在后，所以判定偶数位的边界
  while (even !== null && even.next !== null) {
    // 选定奇数位的下一格，并指过去
    odd.next = odd.next.next;
    odd = odd.next;
    // 选定偶数位的下一格，并指过去
    even.next = even.next.next;
    even = even.next;
  }
  // 奇数链表指向偶数链表
  odd.next = evenHead;
  return head;
};
// console.log("oddEvenL", oddEvenList([1, 2, 3, 4, 5]));
// @lc code=end
