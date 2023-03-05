/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    let res = [[1]];
    for(let i=1; i<numRows; i++) {
        let arr = [1];
        for(let j=1; j<i; j++) {
            arr.push(res[i-1][j] + res[i-1][j-1]);
        }
        arr.push(1);
        res.push(arr);
    }
    return res;
};