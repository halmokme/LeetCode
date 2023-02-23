/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    const permutation = (arr, num) => {
        if(arr.length === 1) return arr.map(el => [el]);
        const result = [];
        for(let i=0; i<arr.length; i++) {
            if(arr[i] === arr[i-1]) continue;
            const rest = arr.slice(0, i).concat(arr.slice(i+1));
            const perm = permutation(rest, num-1);
            const attach = perm.map(c => [arr[i], ...c]);
            result.push(...attach);
        }
        return result;
    }
    return permutation(nums, nums.length);
};