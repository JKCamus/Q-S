/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-03 22:59:03
 * @LastEditors: camus
 * @LastEditTime: 2021-03-03 22:59:12
 */

let unique = arr => {
  let obj = {}
  return arr.filter((ele) => {
      return obj.hasOwnProperty(typeof ele + ele) ? false : (obj[typeof ele + ele] = true)
  })
}
