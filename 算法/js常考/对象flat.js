/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-04-16 14:56:22
 * @LastEditors: camus
 * @LastEditTime: 2021-04-16 14:56:38
 */

function flat(obj, key = "", res = {}, isArray = false) {
  for (let [k, v] of Object.entries(obj)) {
    if (Array.isArray(v)) {
      let tmp = isArray ? key + "[" + k + "]" : key + k;
      flat(v, tmp, res, true);
    } else if (typeof v === "object") {
      let tmp = isArray ? key + "[" + k + "]." : key + k + ".";
      flat(v, tmp, res);
    } else {
      let tmp = isArray ? key + "[" + k + "]" : key + k;
      res[tmp] = v;
    }
  }
  return res;
}
