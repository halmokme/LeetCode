/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = function(matrix) {
    let tmp;
    for(let i=0; i<matrix.length; i++) {
        for(let j=i+1; j<matrix.length; j++) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    matrix.map(el => el.reverse());

    return matrix
};