/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    let result = [];
    if(nums.length === 1) {
        result.push([...nums]);
        return result;
    }
    for(let i=0; i<nums.length; i++) {
        const first = nums.shift();
        const perms = permute(nums);
        for(let perm of perms) {
            perm.push(first);
            result.push(perm);
        }
        nums.push(first);
    }
    return result;
};