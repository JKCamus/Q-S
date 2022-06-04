/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * 思路：
 * 1. 新建一个链表节点，生成dummy
 * 2.对链表进行循环，直至一条链表为null
 * 3. 先将小的加入到新建的链表节点中
 * 4. 最后，新节点指向，循环结束后还有没有加入进链表的节点，因为剩下的肯定是大于之前的
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let curr = new ListNode()
  const dummy = curr
  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      curr.next = list2
      list2 = list2.next
    } else {
      curr.next = list1
      list1 = list1.next
    }
    curr = curr.next
  }
  if (list1 !== null) curr.next = list1
  if (list2 !== null) curr.next = list2
  return dummy.next

};
// @lc code=end

