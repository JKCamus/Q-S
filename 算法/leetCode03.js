/* LeetCode 53动态规划 */
let nums =[-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
if(!nums.length)return 
let max_here=nums[0]
let max_c=nums[0]
for(let i=1;i<nums.length;i++){
    max_here=Math.max(nums[i],max_here+nums[i])
    max_c=Math.max(max_c,max_here)
}
return max_c
};
console.log('res', maxSubArray(nums))