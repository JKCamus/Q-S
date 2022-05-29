/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
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
 * @description: 简答题
 * 思路：
 * 1. 指针循环，判断当前节点与下一个节点的值是否相等，相等，指针指向下下个节点，意思就是删除下个节点。
 * 注意：
 * 1. 内循环，需要在else里
 * @param {ListNode} head
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    }else{
      curr = curr.next
    }
  }

  return head
};
// @lc code=end

