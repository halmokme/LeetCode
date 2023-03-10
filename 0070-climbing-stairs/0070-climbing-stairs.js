/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    let memo = [0,1,2];
    if(n <= 2) return memo[n];
    
    for(let i=3; i<=n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
};