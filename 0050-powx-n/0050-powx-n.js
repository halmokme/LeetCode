/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) { 
    if(n < 0) {
        x = 1 / x
        n = -n;
    }
    return pow(x, n);
};

const pow = (x, n) => {
    if(n === 0) return 1;
    if(n % 2 === 0) {
        let res = pow(x, n/2);
        return res * res;
    }
    else {
        let res = pow(x, (n-1)/2);
        return res * res * x;
    }
}