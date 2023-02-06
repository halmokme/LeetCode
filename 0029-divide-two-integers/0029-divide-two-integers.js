/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
    let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
    let divd = Math.abs(dividend);
    let divs = Math.abs(divisor);

    let count = parseInt(divd / divs);

    count = sign ? count : -count;

    if (count > 2147483647) return 2147483647;
    if (count < -2147483647) return -2147483648;
    return count;
};