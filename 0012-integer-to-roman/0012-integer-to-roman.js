/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const rome = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    const exceptNum = [4, 9, 40, 90, 400, 900];
    let result = '';
    let n;
    
    // 1000
    n = num / 1000;
    num = num % 1000;
    if(n >= 1) result += 'M'.repeat(n);
    if(num >= 900) {
        result += 'CM';
        num -= 900;
    }

    // 500
    n = num / 500;
    num = num % 500;
    if(n >= 1) result += 'D'.repeat(n);
    if(num >= 400) {
        result += 'CD';
        num -= 400;
    }

    // 100
    n = num / 100;
    num = num % 100;
    if(n >= 1) result += 'C'.repeat(n);
    if(num >= 90) {
        result += 'XC';
        num -= 90;
    }

    // 50
    n = num / 50;
    num = num % 50;
    if(n >= 1) result += 'L'.repeat(n);
    if(num >= 40) {
        result += 'XL';
        num -= 40;
    }

    // 10
    n = num / 10;
    num = num % 10;
    if(n >= 1) result += 'X'.repeat(n);
    if(num >= 9) {
        result += 'IX';
        num -= 9;
    }

    // 5
    n = num / 5;
    num = num % 5;
    if(n >= 1) result += 'V'.repeat(n);
    if(num >= 4) {
        result += 'IV';
        num -= 4;
    }

   // 1
   n = num / 1; 
   result += 'I'.repeat(n);

   return result;
};