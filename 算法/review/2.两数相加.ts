/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {

  let carry = 0;
  let dummy = new ListNode()
  let curr = dummy

  while (l1 !== null || l2 !== null) {
    let sum = 0
    if (l1 !== null) {
      sum += l1.val
      // 加了，指针需要移位的
      l1 = l1.next
    }

    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    sum += carry
    curr.next = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    // 注意指针移位
    curr=curr.next
  }

  // 进位大于0
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }

  return dummy.next


}
// @lc code=end
