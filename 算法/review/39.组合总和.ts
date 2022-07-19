/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */
/**
 * @description:
 * 回溯，递归，剪枝
 * 避免重复，传入start
 * 递归函数构建，
 * 出口为求和>target，求和等于target的时候，推入结果，同样退出循环。剪枝
 * 循环，枚举当前可选数，限制起始i为start，避免选之前的数从而避免重复组合。
 * 注意，子递归传了 i 而不是 i+1 ，因为元素可以重复选入集合，如果传 i+1 就不重复了。
 * 同意继续递归，传入参数。
 * 最后回溯
 * @return {*}
 */
// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const dfs = (start: number, temp: number[], sum: number) => {
    if (sum >= target) {
      if (sum === target) {
        res.push([...temp]); // 拷贝temp加入解集
      }
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]); // 选择当前数
      dfs(i, temp, candidates[i] + sum); //基于start=i做选择，下次不会选到i左边的数，避免重复
      temp.pop(); //回溯到candidates[i]的状态，继续尝试同层右边
    }
  };
  dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0

  return res;
}
// @lc code=end
