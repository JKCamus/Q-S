/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-05 14:06:10
 * @LastEditors: camus
 * @LastEditTime: 2021-03-05 14:09:30
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('once')
    resolve('success')
  }, 1000)
})

const start = Date.now()
promise.then((res) => {
  console.log(res, Date.now() - start)
})

promise.then((res) => {
  console.log(res, Date.now() - start)
})

promise.then((res) => {
  console.log(res, Date.now() - start)
})
