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

/**
 * @description: 与环形链表1类似，都是通过快慢指针实现
 * 不同点：
 * 当有环的时候
 * 还需要使用弗洛伊德算法
 * 将fast指针拨回起点，同时，快慢指针每次走一步。
 * 想遇的地方，就是入环节点
 * @param {ListNode} head
 */
function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }
    let fast = head, slow = head;
    let isCycle = false
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (fast === slow) {
            isCycle = true
            break
        }
    }
    if (!isCycle) {
        return null
    }
    fast = head
    while (slow !== fast) {
        fast = fast.next
        slow = slow.next
    }
    return fast

};
// @lc code=end

