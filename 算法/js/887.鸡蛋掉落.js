/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
  let dp = Array(k+1).fill(0)
    let cnt = 0
    while (dp[k] < n){
        cnt++
        for (let i=k; i>0; i--){
            dp[i] = dp[i-1] + dp[i] + 1
        }
    }
    return cnt

};
// @lc code=end

