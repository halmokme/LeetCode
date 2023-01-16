/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let num = x + '';
    let left = 0, right = num.length - 1;
    while(right > left) {
        if(num.charAt(left) !== num.charAt(right)) return false;
        left++;
        right--;
    }
    return true;
};