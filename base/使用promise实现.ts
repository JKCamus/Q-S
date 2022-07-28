// 实现间隔疫一秒打印1，2,3

const arr = [1, 2, 3]

arr.reduce((p, v) => p.then(() => new Promise(r => setTimeout(() => {
  r(console.log(v)
  )
}, 1000))), Promise.resolve())
