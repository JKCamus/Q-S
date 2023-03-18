/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let fast = head,
    slow = head,
    isCycle = false;
  while (fast.next != null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }

  if(!isCycle)return null

    fast=head
    while(slow!==fast){
      fast=fast.next
      slow=slow.next
    }
    return fast

}
// @lc code=end
