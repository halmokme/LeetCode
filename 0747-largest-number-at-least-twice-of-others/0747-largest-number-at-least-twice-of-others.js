/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
    let max = Math.max(...nums);
    for(let i=0; i<nums.length; i++) {
        if(nums[i]*2 > max && nums[i] !== max) return -1;
    }
    return nums.indexOf(max);
};