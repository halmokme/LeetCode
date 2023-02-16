/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    let result = [];
    const arr = candidates.sort((a, b) => a - b);
    
    const recursive = (sum, idx, tmp) => {
        if(sum > target) return;
        if(sum === target) {
            result.push(tmp);
            return;
        }
        for(let i=idx; i<arr.length; i++) {
            if(sum > target) break;
            if(i > idx && arr[i] === arr[i-1]) continue;
            recursive(arr[i]+sum, i+1, [...tmp, arr[i]]);
        }
    }
    
    recursive(0, 0, []);
    return result;

};