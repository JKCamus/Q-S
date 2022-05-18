/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    const result = []
    // 不能简单的进行去重后再运行，子集一，因为涉及的循环不止第一步
    // 由于数组有重复，为了让重复我数据堆放在一起，进行排序
    nums.sort((a, b) => a - b)
    function backtrack(start: number, curr: number[]) {
        result.push([...curr])
        for (let i = start; i < nums.length; i++) {
            // 判断当前数是否跟上一个数相同，如果相同，跳过当前循环。
            //  i > start避免越界，当i=0的时候，避免为负数
            // 更重要的是为了去除重复的12的情况
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            curr.push(nums[i])
            backtrack(i + 1, curr)
            curr.pop()
        }
    }
    backtrack(0, [])
    return result
};
// @lc code=end

