/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    // nums.sort((a, b) => a - b);
    // let max = 0, count = 0, res = nums[0]

    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i] === nums[i+1]) count++;
    //     else {
    //         if(count > max) {
    //             max = count;
    //             res = nums[i];
    //         }
    //         count = 0;
    //     }
    // }

    // return res;

    let count = 0; res = 0;
    for(let i=0; i<nums.length; i++) {
        if(count === 0) {
            count++;
            res = nums[i];
        }
        else if(nums[i] === res) count++;
        else count--;
    }
    return res;
};















