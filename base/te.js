async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
requestAnimationFrame(() => { // 注意这个函数
  console.log('requestAnimationFrame');
});
async1();
new Promise(resolve => {
  console.log('promise');
  resolve();
}).then(() => {
  console.log('then');
})
console.log('script end');
// 两个栈，完成队列
// 栈先进后出，队列，先进先出
class CQueue {
  private inStack: number[]
  private outStack: number[]
  constructor() {
      this.inStack = []
      this.outStack = []
  }

  appendTail(value: number): void {
      this.inStack.push(value)
  }

  deleteHead(): number {
      //判断outStack是否空
      if (this.outStack.length === 0) {
          while (this.inStack.length !== 0) {
              //把inSTack的值雕花顺序放入出栈中
              this.outStack.push(this.inStack.pop())
          }
      }
      return this.outStack.pop() || -1
  }
}

// 二叉树的锯齿形层序遍历，即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行
 var zigzagLevelOrder = function(root) {
  if(!root) return [];
  let flag = 1; // 控制当前层数是 顺序 还是 逆序 打印
  const result = [], queue = [root];
  while(queue.length) {
      let len = queue.length; // 当前队列长度，即当前层数的结点个数
      let now = [];
      for(let i = 0; i < len; i++) {
          let node = queue.shift();
          // 我这里认定 flag === 1 时，是顺序打印，-1 是逆序
          if(flag > 0) {
              now.push(node.val); // 顺序是 push
          } else {
              now.unshift(node.val); // 逆序是 unshift
          }

          // 当前结点有左右子树，那就压入队列，等待下一层的 for 循环进行遍历
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      result.push(now);
      flag = -flag;
  }
  return result;
};
// add问题
// 千分问题
// Lru算法
// 找零钱
// 版本排序
// 先写这个
// console.log(arr); // ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
// arr.sort((a,b)=>a>b?-1:1);
arr.sort((a, b) => {
  let i = 0;
  const arr1 = a.split('.');
  const arr2 = b.split('.');
  while (true) {
      const s1 = arr1[i];
      const s2 = arr2[i++];
      if (s1 === undefined || s2 === undefined) {
          return arr2.length - arr1.length;
      }
      if (s1 === s2) continue;
      return s2 - s1;
  }
});

console.log(arr)
