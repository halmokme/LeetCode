/**
 * @param {number} rowIndex
 * @return {number[]}
 */

const getRow = function(rowIndex) {
   const res = [[1]];
    
    for(let i=0; i<rowIndex; i++) {
        const arr = [1];
        for(let j=1; j<=i; j++) {
            arr.push(res[i][j] + res[i][j-1]);
        }
        arr.push(1);
        res.push(arr);
    }
    
    return res.at(-1);
};