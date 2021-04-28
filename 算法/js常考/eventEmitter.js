/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-28 19:49:06
 * @LastEditors: camus
 * @LastEditTime: 2021-04-28 20:37:06
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.log("没有这个事件");
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
    return this;
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
    return this
  }
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter((item) => item !== cb);
    }
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.apply(this, args);
    };
    this.on(event, func);
    return this;
  }
}
const emitter = new EventEmitter()
emitter.on('log', (param) => {
  console.log(param)
})
emitter.once('log', 'Event Fire')
emitter.once('log', 'Event Fire')
emitter.once('log', 'Event Fire')
