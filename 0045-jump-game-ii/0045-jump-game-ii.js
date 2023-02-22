/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    let result = 0, currIdx = 0, max = 0;

    for(let i=0; i<nums.length-1; i++) {
        max = Math.max(max, i+nums[i]);
        if(i === currIdx) {
            result++;
            currIdx = max;
        }
    }
    return result;
};