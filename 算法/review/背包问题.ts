

/**
 * @description:
 * 有若干个物品和一个大小为 m 的背包. 给定数组 A 表示每个物品的大小和数组 V 表示每个物品的价值。
问最多能装入背包的总价值是多大?
 *
 */
// m = 10
// A = [2, 3, 5, 7]
// V = [1, 5, 2, 4]   =>9
// 装入 A[1] 和 A[3] 可以得到最大价值, V[1] + V[3] = 9
const backPack=(m:number,A:number[],V:number[])=>{
  const dp=Array(m+1).fill(0)
  //外层循环物品
  for(let i=0;i<A.length;i++){
    // 内层循环背包，倒序避免重复
    for(let j=m;j>=0;j--){
      if(j-A[i]>=0){
 // dp[j]表示公式里面的A(Y),V[i]表示pj,A[i]表示wj
        dp[j]=Math.max(dp[j],dp[j-A[i]]+V[i])
      }
    }
  }
  return dp[m]
}
console.log(backPack(10,[2,3,5,7],[1,5,2,4]));

