/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    let result = [];
    let n = nums.sort((a, b) => a - b);

    for(let i=0; i<n.length-2; i++) {
        let left = i+1;
        let right = n.length-1;
        
        if(n !== 0 && n[i] === n[i-1]) continue;
        while(right > left) {
            let sum = n[i] + n[left] + n[right];
            if(sum === 0) {
                result.push([n[i], n[left], n[right]]);
                left++;
                right--;
                while(right < n.length - 1 && n[left] === n[left-1]) left++;
                while(right > left && n[right] === n[right+1]) right--;
            }
            else if(sum < 0) left++;
            else right--;
        }
    }
    
    return result;
};