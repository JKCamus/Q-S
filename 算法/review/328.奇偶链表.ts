/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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
 * 思路:
 * 1. 奇数指针指向后两位，移动一位。偶数也是
 * 2. 奇数指向偶数
 * 注意点
 * 1. 边界考虑
 * 2. 先判断even的节点是否为null
 * 3. 需要一个占位节点，占住even
 * @param {ListNode} head
 */
function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  let odd = head, even = head.next, evenHead = head.next
  while (even !== null&&even.next !== null ) {
    odd.next = odd.next.next
    odd = odd.next
    even.next = even.next.next
    even = even.next
  }

  odd.next = evenHead
  return head
};
// @lc code=end

