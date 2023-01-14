/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function(s) {
    let dp = Array.from(Array(s.length), () => new Array(s.length));
    let maxStr = '';
    
	if(s.length === 1) return s;
	
    for(let i=0; i<s.length; i++) {
        dp[i][i] = true;
        maxStr = s[i];
    }
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === s[i+1]) dp[i][i+1] = true;
        if(dp[i][i+1]) maxStr = s.substring(i, i+2);
    }

    for(let i=s.length-1; i>=0; i--) {
        for(let j=i+2; j<s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) maxStr = maxStr.length < (j-i+1) ? s.substring(i,j+1) : maxStr;
        }
    }
    
    return maxStr;
}