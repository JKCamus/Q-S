/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-06 18:53:44
 * @LastEditors: camus
 * @LastEditTime: 2021-06-06 18:53:45
 */
class queue {
  constructor() {
    this.q = [];
    this.map = new Map();
  }
  push(val) {
    const len = this.q.length;
    this.q.push(val);
    this.map.set(len, val);
  }
  pop() {
    const itorat = this.map.keys().next();
    if (itorat.value === undefined) reutn - 1;
    else this.q.pop();
    this.map.delete(itorat.value);
  }
  search(index) {
    if (this.map.has(index)) return this.map.get(index);
    else return -1;
  }
}
let a = new queue();
a.push(1);
a.push(2);
a.push(3);
a.search(1);
a.pop();
a.search(4);
