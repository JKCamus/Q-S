/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *两个指针相等的时候就是交叉的时候
 *但是两个交叉的链表长度是可以不相等的，但是等n1，n2走完自己的换另一条的时候，就能达到互补，肯定能找到相交点，如果不相交的两条链表最终会返回空
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let n1 = headA,
    n2 = headB;
  while (n1 !== n2) {
    if (n1 === null) {
      n1 = headB;
    } else {
      n1 = n1.next;
    }
    if (n2 === null) {
      n2 = headA;
    } else {
      n2 = n2.next;
    }
  }
  return n1;
};
// @lc code=end
