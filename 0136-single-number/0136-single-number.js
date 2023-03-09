/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    // 1번풀이
    // nums = nums.sort();
    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i] !== nums[i+1]) return nums[i];
    //     else i++;
    // }

    // 2번풀이(비트연산자 이용)
    return nums.reduce((acc, val) => acc ^ val);
};