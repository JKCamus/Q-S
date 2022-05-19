/*
 * @lc app=leetcode.cn id=443 lang=typescript
 *
 * [443] 压缩字符串
 */

// @lc code=start
function compress(chars: string[]): number {
    function compress(chars: string[]): number {
        const len: number = chars.length
        for (let z = len - 1; z >= 0; z--) {
            let count: number = 1
            while (z > 0 && chars[z] === chars[z - 1]) {
                count++
                z--
            }
            // 没有重复时不做任何操作
            if (count !== 1) {
                // 将统计数量拆为数组
                let tempArr = count.toString().split('')
                // 保留当前字符，将重复部分替换为统计数
                chars.splice(z + 1, count - 1, ...tempArr)
            }
        }
        return chars.length
    };

};
// @lc code=end

