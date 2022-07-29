/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  while (curr.next !== null && curr.next.next !== null) {
    let l1 = curr.next;
    let l2 = curr.next.next;
    // 先变更curr.next
    curr.next = l2;
    l1.next = l2.next;
    l2.next = l1;
    // 移位
    curr = l1;
  }
  return dummy.next;
}
// @lc code=end
