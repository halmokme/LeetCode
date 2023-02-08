/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    const reverse = (left) => {
        let right = nums.length - 1;
        while(left < right) {
            swap(left, right);
            left++;
            right--;
        }
    }

    for(let i=nums.length-2; i>=0; i--) {
        for(let j=nums.length-1; j>i; j--) {
            if(nums[j] > nums[i]) {
                swap(i, j);
                reverse(i+1);
                return;
            }
        }
    }
    reverse(0);
};