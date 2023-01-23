/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    let n = nums.sort((a, b) => a - b);
    let result = n[n.length - 1] + n[n.length - 2] + n[n.length - 3];
    
    for(let i=0; i<n.length-2; i++) {
        let left = i + 1;
        let right = n.length - 1;
        
        while(right > left) {
            let sum = n[i] + n[left] + n[right];
            if(Math.abs(result - target) > Math.abs(sum - target)) result = sum;
            if(target > sum) left++;
            else right--;
        }
    }
    return result;
};