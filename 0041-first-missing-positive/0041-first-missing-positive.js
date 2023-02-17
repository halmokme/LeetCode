/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    let arr = [... new Set(nums)];
    arr = arr.sort((a, b) => a - b).filter(el => el > 0);
    
    for (let i = 0; i < arr.length; i++) {
        if (i+1 == arr[i]) continue;
        else return i+1;
    }
    
    return arr.length + 1;
};