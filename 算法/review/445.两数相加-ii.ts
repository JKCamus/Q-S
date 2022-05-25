/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1 = [], stack2 = []
  while (l1 !== null) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2 !== null) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carry = 0
  let curr = null


  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0
    while (stack1.length) {
      sum += stack1.pop()
    }

    while (stack2.length) {
      sum += stack2.pop()
    }

    sum += carry
    const node = new ListNode(sum % 10)
    node.next = curr
    carry = Math.floor(sum / 10)
  }

  if (carry > 0) {
    const node = new ListNode(carry)
    node.next = curr
  }
  return curr
};
// @lc code=end

