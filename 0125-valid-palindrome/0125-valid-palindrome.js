/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = str.length-1;
    while(right >= left) {
        if(str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true;
};