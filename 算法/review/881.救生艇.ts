/*
 * @lc app=leetcode.cn id=881 lang=typescript
 *
 * [881] 救生艇
 */

// @lc code=start
function numRescueBoats(people: number[], limit: number): number {
  const person = people.sort((a, b) => a - b)
  console.log(person);

  let boats = 0, left = 0, right = person.length-1;
  while (left <=right) {
    if ((person[left] + person[right--] )<= limit) {
      left++
    }
    boats += 1
  }
  return boats
};
// @lc code=end
console.log(numRescueBoats( [1,2],3));
