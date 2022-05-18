/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */


// @lc code=start
function subsets(nums: number[]): number[][] {
    const result = []
    function backtack(start: number, curr: number[]) {
        //! 传递数组为引用，所以需要新创建数组，[...curr]
        // 把curr添加到数组中
        result.push([...curr])
        for (let i = start; i < nums.length; i++) {
            // 把nums[i]添加到curr里面
            curr.push(nums[i])
            backtack(i + 1, curr)
            // 把curr数组最后一个元素移除
            curr.pop()
        }

    }
    backtack(0, [])
    return result
};
// @lc code=end

