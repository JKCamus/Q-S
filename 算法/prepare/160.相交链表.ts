/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let l1 = headA,
    l2 = headB;
  while (l1 !== l2) {
    if (l1 !== null) {
      l1 = l1.next;
    } else {
      l1 = headB;
    }

    if (l2 !== null) {
      l2 = l2.next;
    } else {
      l2 = headA;
    }
  }

  return l1;
}
// @lc code=end
