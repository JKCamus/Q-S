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

/**
 * @description:
 * 思路：
 * 1.双指针利用路程相同。
 * 2. a指针走完a链走b链，b指针走完b链走a链。两个相等时，为相交节点。
 * 注意点：
 * 循环条件是，a指针不等于b指针
 *
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let l1 = headA, l2 = headB
  while (l1 !== l2) {
    if (l1 === null) {
      l1 = headB
    } else {
      l1 = l1.next
    }

    if (l2 === null) {
      l2 = headA
    } else {
      l2 = l2.next
    }
  }
  return l1
};
// @lc code=end

