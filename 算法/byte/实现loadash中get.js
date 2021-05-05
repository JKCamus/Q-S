/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-05-05 20:42:34
 * @LastEditors: camus
 * @LastEditTime: 2021-05-05 21:04:04
 */
const get = (data, path, defaultValue = 0) => {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = data;
  for (const path of paths) {
    result = Object(data)[path];
    if (result === null) {
      return defaultValue;
    }
  }
  return result;
};
