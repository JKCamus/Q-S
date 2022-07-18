/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @description:
 * 这题难度较大
 * 剪枝，递归，回溯
之前利用的是hashmap，剪枝。这次使用数组。之前的可以看notion相关的记录
记录当前数组track,选过了这个数的，就不再进行选择。
递归入口，for loop枚举出所有选项，通过if跳过进行剪枝。track包含了当前的数
如果不包含，则，推入构建数组track
基于选了当前数，进行递归
上一句结束后pop进行回溯

 * @param {number} nums
 * @return {*}
 */
function permute(nums: number[]): number[][] {
  // const res: number[][] = [];
  // const used = new Map<number, boolean>();
  // function dfs(path: number[]) {
  //   if (path.length === nums.length) {
  //     res.push(path.slice());
  //     return;
  //   }
  //   for (const num of nums) {
  //     if (used.has(num)) continue;
  //     path.push(num);
  //     used.set(num, true);
  //     dfs(path);
  //     path.pop();
  //     used.delete(num);
  //   }
  // }
  // dfs([]);
  // return res;
  const track: number[] = [];
  const res: number[][] = [];
  function backTrack() {
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    for (let num of nums) {
      if (track.includes(num)) continue;
      track.push(num);
      backTrack();
      track.pop();
    }
  }

  backTrack();
  return res;
}
// @lc code=end
