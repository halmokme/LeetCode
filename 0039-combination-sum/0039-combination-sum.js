/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    let result = [];

    const recursive = (sum, idx, tmp) => {
        if(sum > target) return;
        if(sum === target) {
            result.push(tmp);
            return;
        }

        for(let i=idx; i<candidates.length; i++) {
            if(sum > target) break;
            recursive(sum+candidates[i], i, [...tmp, candidates[i]]);
        }
    }

    recursive(0, 0, []);
    return result;
};