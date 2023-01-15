/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let result = String(x).split('').reverse().join('');
    if (x < 0) result = - + result.slice(0, -1);
    if(x === 0 || result >= Math.pow(2, 31)-1 || result <= Math.pow(-2, 31)) return 0;
    return result;
};