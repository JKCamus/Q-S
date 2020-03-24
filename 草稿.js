const throttle = (func, delay = 500) => {
  let flag = true
  return (...args) => {
    if (!flag) return
    flag = false
    setTimeout(() => {
      func.apply(this, args)
      flag = true
    }, delay)
  }
}