/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    while(1) {
        num = (num+'').split('').reduce((acc, val) => acc + +val, 0);
        if(num < 10) return num;
    }
};