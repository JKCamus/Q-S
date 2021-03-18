/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 * @description 总体思路与环形链表一类似。
 * 快慢指针，确定有环之后break。
 * 将fast指针拨回head一步一步走。
 * 相遇的时候，fast就是当前的序号
 */
var detectCycle = function (head) {
  if (head === null) {
    return null;
  }
  let slow = head,
    fast = head,
    isCycle = false;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      isCycle = true;
      break;
    }
  }
  if (!isCycle) {
    return null;
  }
  fast = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

// @lc code=end
