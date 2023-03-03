/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    
    let n = (x+1) / 2;
    
    while (n**2 > x) {
        n = ~~((n + x/n) / 2);
    }
    
    return n;
};