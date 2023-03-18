/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  if(!head)return head
  const result=[]
  while(head){
    result.push(head)
    const temp=head.next
    head.next=null
    head=temp
  }
  result.sort((a,b)=>a.val-b.val).reduce((p,v)=>p.next=v)
  return result[0]
};
// @lc code=end

