/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
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

function isPalindrome(head: ListNode | null): boolean {
    // 通过转为字符串，一个加在前面，一个加在后面。
    let a = ''
    let b = ''
    while (head !== null) {
        a = head.val + a
        b = b + head.val
        head = head.next

    }
    return a===b
};

// 二解
// let leftNode: any = null

// function isPalindrome(head: ListNode | null): boolean {
//     leftNode = head;
//     return traverse(head)
// };


// function traverse(head: ListNode | null){
//     if(head.next){
//         let last = traverse(head.next);
//         last = (leftNode.val === head.next.val) && last
//         leftNode = leftNode.next
//         return last;
//     } else {
//         return true
//     }
// }

// @lc code=end

