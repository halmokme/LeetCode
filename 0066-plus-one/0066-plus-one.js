/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    // return ((BigInt(digits.join('')) + BigInt(1))+'').split('').map(el => +el);

    let idx = digits.length - 1;
    while(1) {
        digits[idx] += 1;
        if(digits[idx] !== 10) break;
        else {
            digits[idx] = 0;
            idx--;
            if(!digits[idx]) digits.unshift(1);
        }
    }
    return digits;
};
