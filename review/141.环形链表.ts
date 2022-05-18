/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
        return false
    }
    let fast = head, slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }

    }
    return false

};
// @lc code=end

