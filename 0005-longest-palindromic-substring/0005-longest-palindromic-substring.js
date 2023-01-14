/**
 * @param {string} s
 * @return {string}
 */

let dpVal = [];
const longestPalindrome = function(s) {
    let maxLength = 0;
    let maxStr = '';
    dpVal = Array.from(Array(s.length), () => new Array(s.length));
    
    if (s.length === 1) return s;
    
    for (let i=0; i<s.length; i++) {
        for (let j=i; j<s.length; j++) {
            let len = j-i+1;
            let palindrome = calc(s, i, j);
            if(palindrome && maxLength < len) {
                maxLength = len;
                maxStr = s.substring(i, j+1);
            }
        }
    }
    return maxStr;
};

const calc = function(s, left, right) {
    if(left > right) return true;
    if(dpVal[left][right]) return true;
    while (left < right) {
        if(s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    dpVal[left][right] = true;
    return true;
}