/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    // while(1) {
    //     num = (num+'').split('').reduce((acc, val) => acc + +val, 0);
    //     if(num < 10) return num;
    // }
  if (num === 0) {
    return 0;
  } else if (num % 9 === 0) {
    return 9;
  } else {
    return num % 9;
  }
};