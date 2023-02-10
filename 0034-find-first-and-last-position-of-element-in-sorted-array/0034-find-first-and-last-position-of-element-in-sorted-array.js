/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {

    let start = -1, end = -1;

    let left = 0, right = nums.length - 1;
    while(right >= left) {
        let mid = Math.floor(right - left / 2);
        if(nums[mid] === target) {
            right = mid - 1;
            start = mid;
        }
        else if(nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    if(start === -1) return [-1, -1];
    
    left = 0, right = nums.length - 1;
    while(right >= left) {
        let mid = Math.floor(right - left / 2);
        if(nums[mid] === target) {
            left = mid + 1;
            end = mid;
        }
        else if(nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return [start, end];
};
