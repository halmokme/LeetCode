/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(right >= left) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] > target) right = mid - 1;
        else if(nums[mid] < target) left = mid + 1;
        else return mid;
    }
    return left;
};
