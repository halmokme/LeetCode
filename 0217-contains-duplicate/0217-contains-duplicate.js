/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    // nums.sort((a, b) => a - b);
    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i] === nums[i+1]) return true;
    // }
    // return false;
    
    return new Set(nums).size !== nums.length;
};