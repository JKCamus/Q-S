/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * 难点，链表长度不确定，无法从后往前遍历
 * low点： 两次扫描，一次，计算出长度，通过第n个节点=总节点数-倒数第m个节点+1
 * 一次扫描思路如下：
 * 两枚指针，相隔数量为n，同时，同步走，先走的，到了尾部，后走的则为删除的节点。但是，链表删除，需要通过上一个节点进行删除。所以,当n=2时
 * 1.l1.next=le1.next.next
 * 但是，我们也可以让间隔步数为n，但是l2不走到最后的的下一格null。也能达到目的
 *
 * 注意点：
 * 1. 两种方案都行，但是注意边界考虑
 * 2. 最后返回，想清楚，是返回dummy.next
 *
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode()
  dummy.next = head
  let l1 = dummy, l2 = dummy
  for (let i = 0; i <= n; i++) {
    l2 = l2.next
  }

  while (l2 !== null) {
    l1 = l1.next
    l2 = l2.next
  }
  l1.next = l1.next.next
  return dummy.next
};
// @lc code=end

