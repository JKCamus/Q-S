/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head, slow = head
  while (fast!== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};
// @lc code=end

console.log(middleNode([1,2,3,4,5,6]));
