/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let maxLength = 0;
    let maxStr = '';
    
    if (s.length === 1) return s;
    
    for (let i=0; i<s.length; i++) {
        for (let j=i; j<s.length; j++) {
            let palindrome = true;
            let len = j-i+1;
            let left = i;
            let right = j;
            while(left < right) {
                if(s.charAt(left) !== s.charAt(right)) {
                    palindrome = false;
                    break;
                }
                left++;
                right--;
            }
            if(palindrome && maxLength < len) {
                maxLength = len;
                maxStr = s.substring(i, j+1);
            }
        }
    }
    return maxStr;
};