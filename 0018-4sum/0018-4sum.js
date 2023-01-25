/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
    
    let n = nums.sort((a, b) => a - b);
    let result = [];
    
    for(let i=0; i<n.length-3; i++) {
        if( i > 0 && n[i] === n[i-1]) continue;
        
        for(let j=i+1; j<n.length-2; j++) {
            let left = j+1;
            let right = n.length-1;
            if( j > i+1 && n[j] === n[j-1]) continue;
            
            while(right > left) {
                let sum = n[i] + n[j] + n[left] + n[right];
                if(sum === target) {
                    result.push([n[i], n[j], n[left], n[right]]);
                    left++;
                    right--;
                    while(n[left] === n[left-1]) left++;
                    while(n[right] === n[right+1]) right--;
                }
                else if(sum < target) left++;
                else right--;
            }
        }
    }
    
    return result;
};
