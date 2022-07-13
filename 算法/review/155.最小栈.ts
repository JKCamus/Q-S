/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  public stack: number[] = []
  public min
  constructor() {
    this.stack = []
    this.min = Infinity
  }

  push(val: number): void {
    this.stack.push(val)
    if (val < this.min) this.min = val

  }

  pop(): void {
    this.stack.pop()
    this.min = Math.min(...this.stack)
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min
  }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end



