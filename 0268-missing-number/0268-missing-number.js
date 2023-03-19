/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let sum = nums.length * (nums.length+1) / 2
    let numsSum = nums.reduce((acc, val) => acc + val, 0);
    return sum - numsSum;
};