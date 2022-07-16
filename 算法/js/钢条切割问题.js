/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-01-27 16:36:34
 * @LastEditors: camus
 * @LastEditTime: 2021-01-27 16:43:33
 */
// const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30];// 下标表示钢条长度，值表示对应价格
const p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // 下标表示钢条长度，值表示对应价格

function cut_rod(n) {
  if(n === 1) return 1;

  let max = p[n];
  for(let i = 1; i < n; i++){
    let sum = cut_rod(i) + cut_rod(n - i);
    if(sum > max) {
      max = sum;
    }
  }

  return max;
}

cut_rod(9);  // 返回 25
