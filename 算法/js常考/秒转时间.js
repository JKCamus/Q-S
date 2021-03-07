/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-03-04 14:44:23
 * @LastEditors: camus
 * @LastEditTime: 2021-03-04 15:26:14
 */
function sec_to_time(msec) {
  let time = msec / 1000;
  let hour = Math.floor(time / 60 / 60);
  hour = hour.toString().padStart(2, "0");
  let minute = Math.floor(time / 60) % 60;
  minute = minute.toString().padStart(2, "0");
  let second = Math.floor(time) % 60;
  second = second.toString().padStart(2, "0");
  return `${hour}:${minute}:${second}`;
}

console.log("res=>", sec_to_time(15441544));

